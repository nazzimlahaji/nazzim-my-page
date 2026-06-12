# AGENTS.md

Project guidance for AI agents working in this repo. `CLAUDE.md` imports this file.

## What this is

`nazzim-my-page` — a personal developer page. **Web** SPA, not native.

| Stack | Version |
| ----- | ------- |
| Node | 24.14.1 (`.nvmrc`) |
| Package manager | pnpm |
| Bundler | Vite 8 + React Compiler |
| Framework | React 19 + TypeScript (strict) |
| UI | MUI v7 (`@mui/material`) |
| Routing | React Router DOM v7 |
| Deploy | Docker → Firebase Hosting (GitHub Actions) |

## Skill discovery (check before any non-trivial task)

Project playbooks live in `.github/skills/*/SKILL.md`. **List that directory and read the matching skill before scaffolding or designing.**

| Skill | Use for |
| ----- | ------- |
| [`vite-react-ts-stack`](.github/skills/vite-react-ts-stack/SKILL.md) | Setup, Vite/React Compiler config, routing, Docker, CI/CD |
| [`mui-theme`](.github/skills/mui-theme/SKILL.md) | MUI theme, palette/typography, `sx`, responsive layout, icons |
| [`ui-ux-pro-max`](.github/skills/ui-ux-pro-max/SKILL.md) | **Any UI/UX or visual decision** — design systems, color, type, spacing, layout, a11y, dark mode, animation, charts |

**Rule:** for anything that changes how a feature *looks, feels, moves, or is interacted with*, consult `ui-ux-pro-max` first. It's an offline Python search over a local design database — run from the repo root:

```bash
python3 .github/skills/ui-ux-pro-max/scripts/search.py "<product> <keywords>" --design-system
python3 .github/skills/ui-ux-pro-max/scripts/search.py "<keywords>" --stack react
```

This is a **web/React** project: use `--stack react` (never `react-native`) and map results onto MUI theme tokens.

## Agents

`.github/agents/*.agent.md`:

- [`React TS Conventions Agent`](.github/agents/react-ts-conventions.agent.md) — writes/reviews/scaffolds React + TS + MUI code and drives UI/UX decisions through the skills above. Read it for naming, directory layout, strict-TS rules, security, accessibility, and scope limits.

## Conventions (summary — agent file is authoritative)

- Strict TypeScript, no `any`. `Props` interface per component. Shared types in `src/types/`.
- Naming: Components `PascalCase.tsx`, hooks `useCamelCase.ts`, utils `camelCase.ts`, API `camelCaseApi.ts`.
- MUI for all UI — no reinvented primitives. Theme tokens over raw hex.
- Immutable updates only. Files ≤ 800 lines, functions ≤ 50 lines, nesting ≤ 4.

## Security & boundaries

- **No hardcoded secrets.** Use `import.meta.env.VITE_*` — and note those values ship to the client, so never place server secrets there.
- Validate all external data (API, params, forms, `localStorage`). No `dangerouslySetInnerHTML` with unsanitized input. `rel="noopener noreferrer"` on `target="_blank"` links.
- Don't add packages, delete files, or modify CI/CD, `Dockerfile`, or `firebase.json` without explicit approval.
- Backend, DB, infra, auth, crypto, payments → out of scope; escalate for review.
- Treat `.github/skills/` as read-only references unless explicitly updating a skill.

## Commands

```bash
pnpm dev       # dev server
pnpm build     # tsc -b && vite build
pnpm lint      # eslint
pnpm preview   # preview production build
```
