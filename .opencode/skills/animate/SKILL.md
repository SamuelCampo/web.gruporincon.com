---
name: animate
description: Use when adding animations, transitions, micro-interactions, motion design, or scroll-based effects to web interfaces. Covers CSS animations, JavaScript animation libraries, SVG animation, scroll-triggered effects, and performance considerations.
---

# Animate

## Principios de Motion Design
- **Duración**: 200-500ms (micro-interacciones), 500-1000ms (transiciones de página)
- **Easing**: ease-out para entradas, ease-in-out para estados, cubic-bezier personalizado para rebotes
- **Stagger**: 50-100ms entre elementos animados en secuencia
- **Propiedades**: animar solo transform y opacity (compositor-friendly)
- **will-change**: usar con moderación, solo en elementos animados

## Stack Recomendado
- **Animaciones CSS**: Transiciones, keyframes, animation
- **Scroll**: Intersection Observer API nativa + CSS classes
- **Micro-interacciones**: CSS transitions con hover/focus/active
- **SVG animado**: CSS stroke-dasharray/dashoffset + animejs (si necesario)
- **Page transitions**: View Transitions API (navegación SPA/MPA)
- **Loader/Skeleton**: CSS only (pulsing, shimmer), sin JS

## Patrón de Implementación

### Scroll Reveal (SIN librerías externas)
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Micro-interacciones (CTA)
```css
.cta {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.cta:active {
  transform: translateY(0);
}
```

### Loading Skeleton
```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Cuándo NO animar
- Usuarios con prefers-reduced-motion: reducir o eliminar animaciones
- Elementos que ya están en viewport al cargar
- Contenido crítico (CTA, formularios) - no retrasar su visibilidad
- Animaciones que causan CLS (reserva espacio antes de animar)
- Más de 3 animaciones simultáneas en una misma vista
