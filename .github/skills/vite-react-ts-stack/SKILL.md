---
name: vite-react-ts-stack
description: "Use when: setting up or scaffolding a React app with Vite + TypeScript + React Compiler, pnpm as package manager, MUI latest, React Router DOM latest, Node v24.14.1 LTS via .nvmrc, and Docker-based GitHub deployment. Triggers: new React project setup, Vite config, pnpm install, MUI setup, routing setup, Dockerfile, GitHub Actions deploy, docker build push."
argument-hint: "Optional: feature to scaffold (e.g. 'auth flow', 'dashboard page', 'docker deploy')"
---

# Vite + React + TypeScript Stack

## Stack

| Tool            | Version / Notes                              |
| --------------- | -------------------------------------------- |
| Node.js         | v24.14.1 LTS (pinned via `.nvmrc`)           |
| Package Manager | pnpm (latest)                                |
| Bundler         | Vite (latest)                                |
| Framework       | React 19 + TypeScript                        |
| React Compiler  | Enabled via Vite plugin                      |
| UI Library      | MUI (Material UI) v7+                        |
| Routing         | React Router DOM v7+                         |
| Deployment      | Docker → GitHub Container Registry (ghcr.io) |
| CI/CD           | GitHub Actions                               |

---

## Procedure

### 1. Pin Node Version

Create `.nvmrc` at project root:

```
v24.14.1
```

Activate:

```bash
nvm use
# or: fnm use
```

---

### 2. Scaffold Project

```bash
pnpm create vite@latest my-app -- --template react-ts
cd my-app
pnpm install
```

---

### 3. Enable React Compiler

Install the Babel plugin and Vite plugin:

```bash
pnpm add -D babel-plugin-react-compiler@latest @vitejs/plugin-react@latest
```

Update `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
  ],
});
```

> React Compiler requires React 19+. Verify with `pnpm list react`.

---

### 4. Install MUI (latest)

```bash
pnpm add @mui/material@latest @mui/icons-material@latest @emotion/react@latest @emotion/styled@latest
```

Add Roboto font and viewport meta to `index.html`:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

Wrap `main.tsx` with `ThemeProvider`:

```tsx
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

---

### 5. Install React Router DOM (latest)

```bash
pnpm add react-router-dom@latest
```

Wrap app with `BrowserRouter` in `main.tsx`:

```tsx
import { BrowserRouter } from "react-router-dom";

// Inside render:
<BrowserRouter>
  <App />
</BrowserRouter>;
```

Define routes in `App.tsx`:

```tsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

---

### 6. Docker Setup

Key stages:

1. **builder** — installs deps and builds with `pnpm run build`
2. **runner** — serves `dist/` via nginx alpine

Build and test locally:

```bash
docker build -t my-app:latest .
docker run -p 8080:80 my-app:latest
```

---

### 7. GitHub Actions — Docker Deploy

**Branch strategy:**

- `main` → development (no auto-deploy)
- `depl` → triggers the Docker build & push pipeline

Steps:

1. Checks out code on `push` to `depl`
2. Sets up Node v24.14.1 with pnpm cache
3. Builds the Docker image
4. Pushes to `ghcr.io/<owner>/<repo>:latest`

To deploy: merge or push to `depl`. The `main` branch is never deployed directly.

Required repository secrets/variables:

- `GITHUB_TOKEN` — automatically provided by GitHub Actions

---

### 8. Verify & Quality Checks

- [ ] `.nvmrc` exists with `v24.14.1`
- [ ] `pnpm-lock.yaml` committed
- [ ] `vite.config.ts` has `babel-plugin-react-compiler`
- [ ] MUI `ThemeProvider` wraps the app
- [ ] `BrowserRouter` wraps routes
- [ ] Dockerfile multi-stage build passes locally
- [ ] GitHub Actions workflow triggers on `push` to `depl` (not `main`)
- [ ] `dist/` is in `.gitignore`

---

## References

- [Vite docs](https://vitejs.dev/)
- [React Compiler docs](https://react.dev/learn/react-compiler)
- [MUI v7 docs](https://mui.com/material-ui/getting-started/)
- [React Router v7 docs](https://reactrouter.com/home)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
