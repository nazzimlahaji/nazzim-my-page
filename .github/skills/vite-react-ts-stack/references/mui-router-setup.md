# MUI v7 + React Router v7 Setup Reference

## MUI v7 — Quick Setup

### Installation
```bash
pnpm add @mui/material@latest @mui/icons-material@latest @emotion/react@latest @emotion/styled@latest
```

### Theme Configuration (`src/theme.ts`)
```ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default theme
```

### Wrapping the App (`src/main.tsx`)
```tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

### Dark Mode Toggle Pattern
```ts
import { useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

const [mode, setMode] = useState<'light' | 'dark'>('light')
const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])
```

---

## React Router DOM v7 — Quick Setup

### Installation
```bash
pnpm add react-router-dom@latest
```

### Router Structure (`src/main.tsx`)
```tsx
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
  <App />
</BrowserRouter>
```

### Routes (`src/App.tsx`)
```tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
```

### Layout with Outlet (`src/components/Layout.tsx`)
```tsx
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}
```

### Navigation with MUI
```tsx
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'

<Button component={RouterLink} to="/about">About</Button>
```

### Protected Route Pattern
```tsx
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
```

---

## pnpm Scripts Reference

Add to `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}
```
