# Grupo-Protekta

## Setup inicial (solo la primera vez)

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Flujo de trabajo en equipo

1. Nunca hacer push directo a `main`.
2. Crear una rama por tarea
3. Hacer commits pequeños y claros.
4. Subir la rama
5. Abrir un Pull Request en GitHub hacia `main`.
6. Esperar revisión antes de mergear.

## División de trabajo (fase 1)

- Persona A → `src/components/Header.jsx`, `src/components/Footer.jsx`
- Persona B → `src/pages/Home.jsx`
- Persona C → `src/pages/Catalogo.jsx`, `src/components/ProductCard.jsx`
- Persona D → estructura base, `src/pages/Contacto.jsx`, revisión de PRs

## Datos de productos

Los productos viven en `src/data/productos.json`. Cuando el cliente mande
fotos y textos reales, se reemplaza este archivo (no hay que tocar los
componentes).
