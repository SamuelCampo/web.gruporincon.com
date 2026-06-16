---
name: frontend-design
description: Use when designing or implementing frontend interfaces, layouts, components, or styling for web projects. Covers HTML, CSS, responsive design, CSS frameworks, component architecture, and frontend best practices.
---

# Frontend Design

## Principios Generales
- Diseño mobile-first, desktop después
- Componentes atómicos reutilizables
- Accesibilidad (WCAG AA mínimo)
- Performance: Core Web Vitals óptimos
- Navegación intuitiva (regla de los 3 clics)

## Stack Recomendado
- **Framework principal**: Astro + React para islas interactivas
- **Estilos**: Tailwind CSS con diseño system tokenizado
- **Tipografía**: Sistema modular scale (1.25 ratio)
- **Grid**: CSS Grid + Flexbox (evitar frameworks de grid)
- **Assets**: Imágenes en WebP/AVIF, lazy loading nativo

## Anatomía de Componente
```
Componente
├── Estructura semántica (header, main, section, footer)
├── Estados: default, hover, active, focus, disabled, loading, empty, error
├── Responsive: mobile (<640px), tablet (640-1024px), desktop (>1024px)
└── Accesibilidad: roles ARIA, focus visible, contraste 4.5:1
```

## Patrones de Layout
- **Hero**: Full-width con gradient overlay, CTA claro arriba del fold
- **Secciones**: Alternar fondos claro/oscuro para jerarquía visual
- **Tarjetas**: Misma altura, grid auto-fill, sombra sutil + hover elevate
- **Testimonios**: Slider nativo CSS con scroll snap
- **Footer**: Multi-columna con enlaces agrupados por categoría
