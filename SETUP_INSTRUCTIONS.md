# Setup Instructions for Shader Animation Integration

## ✅ Project Setup Complete

The project has been configured with:
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ shadcn/ui structure
- ✅ Three.js for shader animations

## 📦 Installation Steps

1. **Install all dependencies:**
```bash
npm install
```

This will install:
- `three` - For WebGL shader animations
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework
- `tailwindcss-animate` - Animation utilities
- `clsx` and `tailwind-merge` - Utility functions for shadcn

## 🗂️ Project Structure

The project now follows shadcn/ui conventions:

```
src/
├── components/
│   └── ui/              # shadcn/ui components folder
│       └── shader-animation.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── pages/
    └── Home.jsx         # Updated to use shader animation
```

## 🎨 Component Location

The shader animation component is located at:
- **Path:** `src/components/ui/shader-animation.tsx`
- **Import:** `import { ShaderAnimation } from '@/components/ui/shader-animation'`

### Why `/components/ui`?

The `/components/ui` folder is the standard location for shadcn/ui components because:
1. **Consistency** - Follows shadcn/ui conventions
2. **Organization** - Separates UI primitives from business components
3. **Tooling** - shadcn CLI expects this structure
4. **Scalability** - Easy to add more shadcn components later

## 🚀 Usage

The shader animation is now integrated into the Home page hero section. It displays as a full-screen animated background with the hero text overlaid on top.

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `vite.config.ts` - Vite configuration with path aliases

## 📝 TypeScript Support

The project now supports TypeScript. You can:
- Use `.tsx` files for React components
- Use `.ts` files for utilities
- Import with `@/` path alias (e.g., `@/components/ui/...`)

## 🎯 Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. The shader animation will appear on the home page hero section

## 🐛 Troubleshooting

If you encounter issues:

1. **TypeScript errors:** Make sure all dependencies are installed
2. **Path alias errors:** Check `tsconfig.json` and `vite.config.ts`
3. **Three.js not found:** Run `npm install three @types/three`
4. **Tailwind not working:** Check `postcss.config.js` and `tailwind.config.js`

