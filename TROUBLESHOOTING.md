# Troubleshooting Path Alias Issues

## Issue: Failed to resolve import "@/components/ui/shader-animation"

### Solution 1: Restart Dev Server (Recommended)

The path alias has been fixed in `vite.config.ts`. You need to restart your dev server:

1. Stop the current dev server (Ctrl+C)
2. Restart it:
   ```bash
   npm run dev
   ```

### Solution 2: Use Relative Import (Alternative)

If the alias still doesn't work after restarting, you can use a relative import instead.

In `src/pages/Home.jsx`, change:
```jsx
import { ShaderAnimation } from '@/components/ui/shader-animation'
```

To:
```jsx
import { ShaderAnimation } from '../components/ui/shader-animation'
```

### Solution 3: Verify File Exists

Make sure the file exists at:
```
src/components/ui/shader-animation.tsx
```

### Solution 4: Check Vite Config

The `vite.config.ts` should have:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Solution 5: Clear Cache

If issues persist, try clearing the Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

On Windows:
```powershell
Remove-Item -Recurse -Force node_modules\.vite
npm run dev
```

