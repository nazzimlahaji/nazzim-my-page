---
name: mui-theme
description: "Use when: setting up MUI (Material UI) theme, adding ThemeProvider, CssBaseline, customizing palette or typography, using sx prop, responsive breakpoints, Grid v2, Stack layout, Chip, Paper, icons from @mui/icons-material, or MUI gradient backgrounds in a React + TypeScript project. Triggers: MUI setup, theme customization, createTheme, ThemeProvider, sx prop, responsive layout, MUI components."
argument-hint: "Optional: specific MUI feature to scaffold (e.g. 'dark mode', 'custom palette', 'responsive grid')"
---

# MUI Theme Setup & Usage

## When to Use

- Setting up MUI in a new or existing Vite + React + TypeScript project
- Customizing palette, typography, or component defaults
- Building responsive layouts with MUI layout primitives
- Adding icons, chips, papers, or any MUI component

---

## Procedure

### 1. Install Packages

```bash
pnpm add @mui/material@latest @mui/icons-material@latest @emotion/react@latest @emotion/styled@latest
```

---

### 2. Update `index.html`

Replace the default viewport meta and add the Roboto font:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

> Note: `width=device-width` alone (without `initial-scale=1`) can cause layout issues on some mobile browsers. Always use both.

---

### 3. Configure Theme in `main.tsx`

```tsx
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0", // override primary colour
    },
    // mode: "dark",     // uncomment for dark mode
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

// Wrap render tree
<ThemeProvider theme={theme}>
  <CssBaseline /> {/* resets browser CSS + applies background/text colours */}
  <App />
</ThemeProvider>;
```

`CssBaseline` must always be inside `ThemeProvider` so it picks up theme values.

---

### 4. Remove Legacy CSS Imports

Once `CssBaseline` is active, remove `import './index.css'` from `main.tsx` unless you have genuinely global styles that MUI cannot handle (custom scrollbars, font-face fallbacks, etc.).

---

### 5. Responsive Layouts

**Stack** — one-dimensional flex container:

```tsx
<Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={2}
  flexWrap="wrap"
  gap={1}
>
  {items}
</Stack>
```

**Grid v2** — two-dimensional. Use the `size` prop (not `xs`/`md`):

```tsx
import { Grid } from "@mui/material";

<Grid container spacing={2}>
  <Grid size={{ xs: 12, sm: 6, md: 4 }}>…</Grid>
</Grid>;
```

> ⚠️ MUI v6+ ships Grid v2. The old `xs={12}` syntax still works but is deprecated. Prefer `size={{ xs: 12 }}`.

**Box** with `sx` responsive shorthand:

```tsx
<Box sx={{ py: { xs: 4, md: 8 }, px: 2 }}>…</Box>
```

---

### 6. The `sx` Prop

`sx` accepts the full MUI system, theme tokens, and responsive objects. Prefer it for one-off styles; extract to `styled()` or `sx` objects only when reused across 3+ places.

```tsx
// Access theme values in sx callback
<Box
  sx={{
    background: (t) =>
      `linear-gradient(135deg, ${t.palette.primary.dark} 0%, ${t.palette.primary.main} 100%)`,
    color: "primary.contrastText", // shorthand theme token
    borderRadius: 2, // = 8px (4px × 2)
  }}
/>
```

**Spacing scale**: MUI uses base-8. `spacing(1)` = 8 px, `p: 2` = 16 px, `py: 6` = 48 px.

---

### 7. Icons

Import named icons from `@mui/icons-material` — one icon per import for tree-shaking:

```tsx
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

<EmailIcon color="primary" fontSize="large" />;
```

Pass `sx={{ color: "white !important" }}` when the icon sits inside a coloured `Chip` and the default colour override doesn't cascade.

---

### 8. Colour-Overriding Icons Inside Chips

MUI Chip applies its own colour to child icons. To force a colour:

```tsx
<Chip
  icon={<EmailIcon sx={{ color: "white !important" }} />}
  label="email"
  sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white" }}
/>
```

---

### 9. Common Component Patterns

**Paper card with divider:**

```tsx
<Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
  …content…
  <Divider sx={{ my: 2 }} />
  …more content…
</Paper>
```

**Active nav link (no MUI NavLink):**

```tsx
<Button
  component={Link}
  to={path}
  sx={{
    fontWeight: location.pathname === path ? 700 : 400,
    borderBottom:
      location.pathname === path ? "2px solid" : "2px solid transparent",
    borderRadius: 0,
  }}
>
  {label}
</Button>
```

**Gradient hero section:**

```tsx
<Box
  sx={{
    background: (t) =>
      `linear-gradient(135deg, ${t.palette.primary.dark} 0%, ${t.palette.primary.main} 60%, ${t.palette.primary.light} 100%)`,
    color: "primary.contrastText",
    py: { xs: 8, md: 12 },
  }}
>
```

---

### 10. Dark Mode Toggle (optional)

```tsx
// Store preference in state or localStorage
const [mode, setMode] = useState<"light" | "dark">("light");

const theme = createTheme({ palette: { mode } });
```

---

## Quality Checklist

- [ ] `@emotion/react` and `@emotion/styled` installed (peer deps of MUI)
- [ ] `index.html` viewport uses `initial-scale=1, width=device-width`
- [ ] Roboto font loaded in `index.html`
- [ ] `ThemeProvider` wraps entire app
- [ ] `CssBaseline` is **inside** `ThemeProvider`
- [ ] Grid uses `size` prop (v2 API)
- [ ] No hardcoded hex colours in `sx` — use palette tokens where possible (`"primary.main"`, `"text.secondary"`)
- [ ] Icons imported individually (not barrel import) for tree-shaking
