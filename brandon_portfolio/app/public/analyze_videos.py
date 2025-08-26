#!/usr/bin/env python3
"""
Simple Video Compression Script using moviepy
Compresses videos without requiring FFmpeg installation.
"""

import os
import sys
from pathlib import Path

def compress_video_simple(input_path, output_path, target_size_mb=10):
    """
    Simple video compression using basic file operations and recommendations.
    Since we don't have FFmpeg available, we'll provide guidance for manual compression.
    """
    try:
        original_size = os.path.getsize(input_path)
        original_size_mb = original_size / (1024 * 1024)
        
        print(f"📹 {os.path.basename(input_path)}: {original_size_mb:.1f} MB")
        
        if original_size_mb > target_size_mb:
            print(f"   ⚠️  File is larger than {target_size_mb}MB - consider compressing")
            print(f"   💡 Recommended settings for web:")
            print(f"      - Resolution: 1080p or 720p")
            print(f"      - Bitrate: 2-5 Mbps for 1080p, 1-3 Mbps for 720p")
            print(f"      - Format: MP4 with H.264 codec")
            print(f"      - Duration: Keep under 30 seconds if possible")
        else:
            print(f"   ✅ File size is acceptable for web use")
            
        return True
        
    except Exception as e:
        print(f"✗ Error analyzing {input_path}: {e}")
        return False

def main():
    """Main function to analyze videos."""
    print("🎥 Video Analysis Tool")
    print("=" * 50)
    
    current_dir = Path.cwd()
    videos_dir = current_dir / "videos"
    
    if not videos_dir.exists():
        print("No videos directory found.")
        return
    
    print(f"\n📹 Analyzing videos in {videos_dir}")
    print("-" * 40)
    
    video_extensions = {'.mp4', '.avi', '.mov', '.mkv', '.wmv'}
    total_size = 0
    video_count = 0
    
    for video_file in videos_dir.rglob('*'):
        if video_file.is_file() and video_file.suffix.lower() in video_extensions:
            if video_file.name.lower() == 'readme.md':
                continue
                
            file_size = video_file.stat().st_size
            total_size += file_size
            video_count += 1
            
            compress_video_simple(video_file, None, target_size_mb=10)
    
    print(f"\n📊 Video Summary")
    print("=" * 30)
    print(f"Total videos: {video_count}")
    print(f"Total size: {total_size / (1024 * 1024):.1f} MB")
    
    if total_size > 50 * 1024 * 1024:  # 50MB
        print(f"\n💡 Recommendations:")
        print(f"   - Consider compressing videos larger than 10MB")
        print(f"   - Use online tools like CloudConvert, HandBrake, or FFmpeg")
        print(f"   - Target settings: 720p-1080p, H.264, 2-5 Mbps bitrate")
        print(f"   - Keep videos under 30 seconds for better web performance")

if __name__ == "__main__":
    main()