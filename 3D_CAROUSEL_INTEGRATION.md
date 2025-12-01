# 3D Carousel Component Integration

## ✅ Integration Complete

The `ThreeDPhotoCarousel` component has been successfully integrated into the Templates page, replacing the previous Carousel component.

## 📦 Dependencies

- ✅ `framer-motion` - Already installed (v10.16.16)
- ✅ No additional packages needed

## 📁 Files Created/Modified

### New Files:
- `src/components/ui/3d-carousel.tsx` - 3D cylindrical carousel component

### Modified Files:
- `src/pages/Templates.jsx` - Replaced Carousel with ThreeDPhotoCarousel

## 🎨 Component Location

The component is located at:
- **Path:** `src/components/ui/3d-carousel.tsx`
- **Import:** `import { ThreeDPhotoCarousel } from '../components/ui/3d-carousel'`

## 🚀 Usage

The component is now integrated into the **Templates page** for each template style. It features:

- 3D cylindrical carousel effect
- Drag-to-rotate interaction
- Click to view full-size image
- Smooth animations and transitions
- Responsive design (adapts to mobile/desktop)

## 🎯 Component Features

The ThreeDPhotoCarousel component includes:

### 3D Cylindrical Effect:
- Images arranged in a 3D cylinder
- Rotate by dragging horizontally
- Perspective-based 3D transforms

### Interactive Features:
- **Drag to Rotate:** Drag left/right to spin the carousel
- **Click to Expand:** Click any image to view full-size
- **Smooth Animations:** Spring-based physics for natural movement

### Image Modal:
- Full-screen overlay when image is clicked
- Smooth scale and fade animations
- Click outside to close

### Responsive Design:
- Smaller cylinder width on mobile (1100px)
- Larger cylinder width on desktop (1800px)
- Adapts to screen size automatically

## 📝 Component Props

```typescript
interface ThreeDPhotoCarouselProps {
  images?: string[];    // Array of image URLs
  className?: string;   // Additional CSS classes
}
```

### Example Usage:
```tsx
<ThreeDPhotoCarousel
  images={[
    'https://images.unsplash.com/photo-...',
    'https://images.unsplash.com/photo-...',
  ]}
  className="w-full"
/>
```

## 🎨 Styling

The component uses:
- Tailwind CSS classes
- Framer Motion for animations
- 3D CSS transforms (rotateY, translateZ)
- Perspective for 3D effect
- Blur transitions for smooth image loading

## 🔧 Technical Details

### 3D Cylinder Math:
- **Cylinder Width:** 1100px (mobile) or 1800px (desktop)
- **Face Width:** `cylinderWidth / faceCount`
- **Radius:** `cylinderWidth / (2 * π)`
- **Rotation:** Each face rotated by `360 / faceCount` degrees

### Drag Interaction:
- Drag sensitivity: `0.05` multiplier
- Spring physics on drag end
- Velocity-based momentum

### Image Loading:
- Initial blur effect (4px)
- Smooth transition to sharp (0px blur)
- Layout animations for smooth transitions

## 📱 Responsive Behavior

- **Mobile (≤640px):** Smaller cylinder (1100px width)
- **Desktop (>640px):** Larger cylinder (1800px width)
- **Image Modal:** Responsive padding and sizing

## ✅ Adaptations Made

1. **Removed Keywords:**
   - Removed hardcoded keywords array
   - Made component accept images via props

2. **Customizable Props:**
   - Added `images` prop for template images
   - Added `className` prop for styling

3. **Background Styling:**
   - Changed from `bg-mauve-dark-2` to `bg-transparent`
   - Better integration with existing design

4. **Modal Background:**
   - Changed to `bg-opacity-80` for better visibility
   - Improved contrast for image viewing

## 🎯 Integration Location

The component replaces the previous Carousel in:
- **Templates Page:** Each template style now uses 3D carousel
- **Template Images:** Uses existing Unsplash images from template data

## 🚀 Features

- **3D Cylindrical Layout:** Images arranged in a rotating cylinder
- **Drag Interaction:** Natural drag-to-rotate behavior
- **Image Modal:** Click to view full-size with smooth animations
- **Responsive:** Adapts to different screen sizes
- **Smooth Animations:** Spring physics and blur transitions

## 🎬 Animation Details

- **Drag Rotation:** Real-time rotation based on drag distance
- **Spring Physics:** Natural deceleration after drag
- **Image Blur:** Smooth transition from blurred to sharp
- **Modal Scale:** Scale animation when opening image
- **Layout Animations:** Shared layout transitions

