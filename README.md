# Electron-Vite-ShadCN

A complete template to build beautiful desktop applications with Electron.


## Libraries and Tools

- **Core**: [Electron](https://www.electronjs.org), [Vite](https://vitejs.dev), [SWC](https://swc.rs)
- **DX**: [TypeScript](https://www.typescriptlang.org), [Prettier](https://prettier.io), [Zod](https://zod.dev), [React Query](https://react-query.tanstack.com)
- **UI**: [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com), [Shadcn UI](https://ui.shadcn.com), [i18next](https://www.i18next.com)
- **Testing**: [Jest](https://jestjs.io), [Playwright](https://playwright.dev), [React Testing Library](https://testing-library.com)
- **Packaging**: [Electron Forge](https://www.electronforge.io)

## Project Preferences

- `Context isolation enabled`
- `Custom title bar`
- `Outfit font as default`


## Directory Structure

```plaintext
src/
  assets/
    fonts/
  components/
    ui/
  helpers/
    ipc/
  layout/
  lib/
  pages/
  stories/
  style/
  tests/
```

## NPM Scripts

- `dev`: Run the app in dev mode
- `package`: Create platform-specific executable
- `make`: Build platform-specific distributables
- `test`: Run Jest and Playwright tests
