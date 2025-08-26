# Media Assets Guide

## Adding Your Jeep Pictures and Videos

### Directory Structure
```
brandon_portfolio/app/public/
├── images/
│   └── jeep/
│       ├── trail-mountain.jpg
│       ├── jeep-meetup.jpg
│       ├── mud-terrain.jpg
│       ├── scenic-overlook.jpg
│       ├── trail-action-poster.jpg (video poster)
│       └── rock-crawling-poster.jpg (video poster)
└── videos/
    └── jeep/
        ├── trail-action.mp4
        └── rock-crawling.mp4
```

### How to Add Your Media

#### For Images:
1. **Optimize your images** for web:
   - Recommended size: 800x600px or similar 4:3 aspect ratio
   - Format: JPG or WebP for photos
   - File size: Keep under 500KB each for fast loading

2. **Copy your images** to `brandon_portfolio/app/public/images/jeep/`

3. **Update the file names** in `components/interests.tsx` in the `jeepingMedia` array:
   ```javascript
   {
     type: 'image',
     src: '/images/jeep/your-actual-filename.jpg',
     alt: 'Description of your image',
     caption: 'Caption that appears on hover'
   }
   ```

#### For Videos:
1. **Optimize your videos** for web:
   - Format: MP4 (H.264 codec)
   - Resolution: 1080p or 720p
   - Duration: Keep under 30 seconds for best performance
   - File size: Keep under 10MB each

2. **Create poster images** (optional but recommended):
   - Take a screenshot from your video
   - Save as JPG in the same dimensions as your video
   - Place in `brandon_portfolio/app/public/images/jeep/`

3. **Copy your videos** to `brandon_portfolio/app/public/videos/jeep/`

4. **Update the file names** in `components/interests.tsx`:
   ```javascript
   {
     type: 'video',
     src: '/videos/jeep/your-video.mp4',
     poster: '/images/jeep/your-video-poster.jpg',
     alt: 'Description of your video',
     caption: 'Caption for your video'
   }
   ```

### Features Included:

✅ **Mixed Media Gallery**: Displays both images and videos in the same grid
✅ **Video Previews**: Shows poster images with play button overlay
✅ **Lightbox Modal**: Click any media to view full-size with controls
✅ **Responsive Design**: Works on all device sizes
✅ **Hover Effects**: Smooth animations and caption overlays
✅ **Media Type Indicators**: Icons show whether item is image or video
✅ **AWS Amplify Ready**: All assets served from public directory

### AWS Amplify Deployment Notes:

- All media files in the `public` directory will be automatically served by Amplify
- No additional configuration needed for static assets
- Videos will stream directly from your Amplify deployment
- Consider using Amplify's CDN for even faster loading

### Performance Tips:

1. **Compress images** before uploading (use tools like TinyPNG)
2. **Keep video files small** - consider reducing quality if file size is large
3. **Use poster images** for videos to improve perceived loading speed
4. **Test on mobile** to ensure good performance on slower connections

### Adding More Media:

Simply add more objects to the `jeepingMedia` array in `components/interests.tsx`:

```javascript
{
  type: 'image', // or 'video'
  src: '/images/jeep/new-adventure.jpg',
  alt: 'New adventure description',
  caption: 'Your caption here'
}
```

The gallery will automatically adjust to show all your media in a responsive grid!