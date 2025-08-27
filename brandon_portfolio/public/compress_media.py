#!/usr/bin/env python3
"""
Media Compression Script
Compresses images and videos in the public directory for web optimization.
"""

import os
import sys
from PIL import Image, ImageOps
import subprocess
import shutil
from pathlib import Path

def compress_image(input_path, output_path, quality=85, max_width=1920, max_height=1080):
    """
    Compress an image file while maintaining aspect ratio.
    
    Args:
        input_path: Path to input image
        output_path: Path to save compressed image
        quality: JPEG quality (1-100)
        max_width: Maximum width in pixels
        max_height: Maximum height in pixels
    """
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for JPEG output)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Auto-orient based on EXIF data
            img = ImageOps.exif_transpose(img)
            
            # Calculate new dimensions while maintaining aspect ratio
            original_width, original_height = img.size
            
            # Only resize if image is larger than max dimensions
            if original_width > max_width or original_height > max_height:
                ratio = min(max_width / original_width, max_height / original_height)
                new_width = int(original_width * ratio)
                new_height = int(original_height * ratio)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Save with compression
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            print(f"✓ {os.path.basename(input_path)}: {original_size:,} → {compressed_size:,} bytes ({compression_ratio:.1f}% reduction)")
            return True
            
    except Exception as e:
        print(f"✗ Error compressing {input_path}: {e}")
        return False

def compress_video_ffmpeg(input_path, output_path, crf=28, max_width=1920):
    """
    Compress a video file using ffmpeg.
    
    Args:
        input_path: Path to input video
        output_path: Path to save compressed video
        crf: Constant Rate Factor (18-28, lower = better quality)
        max_width: Maximum width in pixels
    """
    try:
        # FFmpeg command for compression
        cmd = [
            'ffmpeg', '-i', input_path,
            '-c:v', 'libx264',  # H.264 codec
            '-crf', str(crf),   # Quality setting
            '-preset', 'medium', # Encoding speed vs compression efficiency
            '-c:a', 'aac',      # Audio codec
            '-b:a', '128k',     # Audio bitrate
            '-vf', f'scale={max_width}:-2', # Scale video, maintain aspect ratio
            '-movflags', '+faststart', # Optimize for web streaming
            '-y',  # Overwrite output file
            output_path
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            original_size = os.path.getsize(input_path)
            compressed_size = os.path.getsize(output_path)
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            print(f"✓ {os.path.basename(input_path)}: {original_size:,} → {compressed_size:,} bytes ({compression_ratio:.1f}% reduction)")
            return True
        else:
            print(f"✗ FFmpeg error for {input_path}: {result.stderr}")
            return False
            
    except FileNotFoundError:
        print("✗ FFmpeg not found. Please install FFmpeg to compress videos.")
        return False
    except Exception as e:
        print(f"✗ Error compressing {input_path}: {e}")
        return False

def check_ffmpeg():
    """Check if ffmpeg is available."""
    try:
        result = subprocess.run(['ffmpeg', '-version'], capture_output=True, text=True)
        return result.returncode == 0
    except FileNotFoundError:
        return False

def main():
    """Main compression function."""
    print("🎬 Media Compression Tool")
    print("=" * 50)
    
    # Get current directory
    current_dir = Path.cwd()
    images_dir = current_dir / "images"
    videos_dir = current_dir / "videos"
    
    # Create backup directories
    backup_dir = current_dir / "backup_original"
    backup_dir.mkdir(exist_ok=True)
    
    # Image compression settings
    image_quality = 85  # JPEG quality
    max_image_width = 1920
    max_image_height = 1080
    
    # Video compression settings
    video_crf = 28  # Quality (lower = better)
    max_video_width = 1920
    
    total_original_size = 0
    total_compressed_size = 0
    
    # Compress images
    if images_dir.exists():
        print(f"\n📸 Compressing images in {images_dir}")
        print("-" * 30)
        
        image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff'}
        
        for image_file in images_dir.rglob('*'):
            if image_file.is_file() and image_file.suffix.lower() in image_extensions:
                # Skip README files
                if image_file.name.lower() == 'readme.md':
                    continue
                
                # Create backup
                backup_path = backup_dir / f"original_{image_file.name}"
                if not backup_path.exists():
                    shutil.copy2(image_file, backup_path)
                
                # Compress image
                temp_path = image_file.with_suffix('.tmp.jpg')
                
                original_size = image_file.stat().st_size
                total_original_size += original_size
                
                if compress_image(image_file, temp_path, image_quality, max_image_width, max_image_height):
                    # Replace original with compressed version
                    compressed_path = image_file.with_suffix('.jpg')
                    shutil.move(temp_path, compressed_path)
                    
                    # Remove original if it had a different extension
                    if image_file.suffix.lower() != '.jpg':
                        image_file.unlink()
                    
                    compressed_size = compressed_path.stat().st_size
                    total_compressed_size += compressed_size
                else:
                    # Clean up temp file if compression failed
                    if temp_path.exists():
                        temp_path.unlink()
                    total_compressed_size += original_size
    
    # Compress videos
    if videos_dir.exists():
        print(f"\n🎥 Compressing videos in {videos_dir}")
        print("-" * 30)
        
        if not check_ffmpeg():
            print("⚠️  FFmpeg not found. Skipping video compression.")
            print("   To compress videos, please install FFmpeg:")
            print("   - Windows: Download from https://ffmpeg.org/download.html")
            print("   - Or use: winget install ffmpeg")
        else:
            video_extensions = {'.mp4', '.avi', '.mov', '.mkv', '.wmv'}
            
            for video_file in videos_dir.rglob('*'):
                if video_file.is_file() and video_file.suffix.lower() in video_extensions:
                    # Skip README files
                    if video_file.name.lower() == 'readme.md':
                        continue
                    
                    # Create backup
                    backup_path = backup_dir / f"original_{video_file.name}"
                    if not backup_path.exists():
                        shutil.copy2(video_file, backup_path)
                    
                    # Compress video
                    temp_path = video_file.with_suffix('.tmp.mp4')
                    
                    original_size = video_file.stat().st_size
                    total_original_size += original_size
                    
                    if compress_video_ffmpeg(video_file, temp_path, video_crf, max_video_width):
                        # Replace original with compressed version
                        compressed_path = video_file.with_suffix('.mp4')
                        shutil.move(temp_path, compressed_path)
                        
                        # Remove original if it had a different extension
                        if video_file.suffix.lower() != '.mp4':
                            video_file.unlink()
                        
                        compressed_size = compressed_path.stat().st_size
                        total_compressed_size += compressed_size
                    else:
                        # Clean up temp file if compression failed
                        if temp_path.exists():
                            temp_path.unlink()
                        total_compressed_size += original_size
    
    # Summary
    print(f"\n📊 Compression Summary")
    print("=" * 50)
    print(f"Original total size:   {total_original_size:,} bytes ({total_original_size/1024/1024:.1f} MB)")
    print(f"Compressed total size: {total_compressed_size:,} bytes ({total_compressed_size/1024/1024:.1f} MB)")
    
    if total_original_size > 0:
        total_reduction = (1 - total_compressed_size / total_original_size) * 100
        space_saved = total_original_size - total_compressed_size
        print(f"Space saved:           {space_saved:,} bytes ({space_saved/1024/1024:.1f} MB)")
        print(f"Total reduction:       {total_reduction:.1f}%")
    
    print(f"\n💾 Original files backed up to: {backup_dir}")
    print("✅ Compression complete!")

if __name__ == "__main__":
    main()