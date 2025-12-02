# Full Screen Scroll FX Component Integration

## ✅ Integration Complete

The `FullScreenScrollFX` component has been successfully integrated into the Templates page, replacing the previous template grid layout.

## 📦 Dependencies

- ✅ `gsap` - Already installed (v3.13.0)
- ✅ `ScrollTrigger` - Part of GSAP (no separate installation needed)
- ✅ `framer-motion` - Already installed (not used in this component, but available)

## 📁 Files Created/Modified

### New Files:
- `src/components/ui/full-screen-scroll-fx.tsx` - Main full-screen scroll component
- `src/components/ui/full-screen-scroll-fx.css` - Styles (converted from styled-jsx)

### Modified Files:
- `src/pages/Templates.jsx` - Replaced template grid with FullScreenScrollFX

## 🎨 Component Location

The component is located at:
- **Path:** `src/components/ui/full-screen-scroll-fx.tsx`
- **Import:** `import { FullScreenScrollFX } from '../components/ui/full-screen-scroll-fx'`

## 🚀 Usage

The component is now integrated into the **Templates page**. It features:

- Full-screen scroll-triggered sections
- Pinned sections with smooth transitions
- Animated title words with mask effects
- Left and right label lists
- Background image transitions
- Progress indicator
- Click-to-navigate functionality

## 🎯 Component Features

The FullScreenScrollFX component includes:

### Scroll Animation:
- ScrollTrigger-based pinning
- Smooth section transitions
- Progress tracking
- Programmatic navigation

### Visual Effects:
- **Title Animation:** Words slide in/out with mask effects
- **Background Transitions:** Fade or wipe transitions between backgrounds
- **List Animation:** Left/right labels animate and center on active section
- **Progress Bar:** Visual progress indicator with section numbers

### Interactive Features:
- **Click Navigation:** Click left/right labels to jump to sections
- **Scroll Navigation:** Natural scroll triggers section changes
- **Programmatic API:** Imperative API for external control

## 📝 Component Props

```typescript
interface FullScreenFXProps {
  sections: Section[];           // Array of section data
  className?: string;             // Additional CSS classes
  style?: CSSProperties;          // Inline styles
  
  // Layout
  fontFamily?: string;            // Font family
  header?: ReactNode;             // Header content
  footer?: ReactNode;             // Footer content
  gap?: number;                   // Grid gap in rem
  gridPaddingX?: number;          // Horizontal padding in rem
  
  showProgress?: boolean;         // Show progress indicator
  debug?: boolean;               // Show debug info
  
  // Motion
  durations?: Durations;          // Animation durations
  reduceMotion?: boolean;         // Respect prefers-reduced-motion
  smoothScroll?: boolean;         // Use smooth scrolling
  
  // Background
  bgTransition?: "fade" | "wipe"; // Transition type
  parallaxAmount?: number;        // Parallax amount
  
  // Controlled
  currentIndex?: number;          // Controlled index
  onIndexChange?: (index: number) => void;
  initialIndex?: number;          // Initial section index
  
  // Colors
  colors?: Colors;               // Color customization
  
  // API
  apiRef?: React.Ref<FullScreenFXAPI>;
  ariaLabel?: string;
}
```

### Section Type:
```typescript
type Section = {
  id?: string;
  background: string;            // Background image URL
  leftLabel?: ReactNode;         // Left side label
  title: string | ReactNode;     // Center title
  rightLabel?: ReactNode;        // Right side label
  renderBackground?: (active: boolean, previous: boolean) => ReactNode;
};
```

## 🎨 Styling

The component uses:
- CSS custom properties (CSS variables)
- Responsive design with mobile breakpoints
- Dark theme optimized colors
- Smooth animations with GSAP

## 🔧 Technical Details

### ScrollTrigger Setup:
- Pins the fixed section during scroll
- Tracks scroll progress
- Triggers section changes based on progress

### Animation System:
- GSAP for all animations
- Spring physics for natural movement
- Staggered animations for word effects
- Smooth transitions between sections

### Layout:
- 12-column grid system
- Three-column content layout (left, center, right)
- Responsive: single column on mobile

## 📱 Responsive Design

- **Desktop:** Full three-column layout with all features
- **Mobile (≤900px):** Single column, simplified layout
- **Text Sizing:** Fluid typography with clamp()

## ✅ Adaptations Made

1. **Styled-jsx Conversion:**
   - Converted `<style jsx>` to separate CSS file
   - Maintained all styling and animations

2. **Template Data:**
   - Converted template data to section format
   - Used Unsplash images for backgrounds
   - Added appropriate labels and titles

3. **Color Customization:**
   - Set dark theme colors
   - Adjusted overlay opacity for better visibility
   - Matched brand colors

4. **Integration:**
   - Removed old template grid section
   - Integrated directly after hero section
   - Maintained page structure

## 🎯 Integration Location

The component replaces:
- **Before:** Template grid with individual carousels
- **After:** Full-screen scroll experience with pinned sections

## 🚀 Features

- **Full-Screen Sections:** Each template style gets a full-screen section
- **Scroll-Triggered:** Sections change as you scroll
- **Animated Titles:** Words slide in/out with smooth animations
- **Background Images:** High-quality Unsplash images
- **Progress Indicator:** Shows current section and progress
- **Click Navigation:** Click labels to jump to sections
- **Responsive:** Adapts to mobile and desktop

## 🎬 Animation Details

- **Section Change:** 0.7s duration with power3 easing
- **Word Animation:** Staggered slide-in effect
- **Background Fade:** Smooth opacity and scale transitions
- **List Centering:** Smooth Y-axis movement to center active item
- **Progress Bar:** Smooth width transition

