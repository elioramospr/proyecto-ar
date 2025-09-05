# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Proyecto AR con React Three Fiber y WebXR

Este proyecto está creado con Vite y React, e integra @react-three/fiber y @react-three/xr para soporte de WebXR/AR.

## Instalación

```bash
npm install
```

## Dependencias principales

- @react-three/fiber
- @react-three/xr
- three

## Ejecución

```bash
npm run dev
```

## Uso

- Haz clic en el botón "Enter AR" para activar el modo AR.
- Haz clic en el cubo para cambiar su color entre azul y rojo.

## Estructura básica

- `src/App.jsx`: Ejemplo de Canvas, XR y cubo interactivo.

---

Para más información sobre WebXR y React Three Fiber, consulta la documentación oficial de cada librería.
