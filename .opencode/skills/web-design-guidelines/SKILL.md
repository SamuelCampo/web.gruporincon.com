---
name: web-design-guidelines
description: Use when establishing or enforcing web design standards, style guides, accessibility requirements, SEO best practices, performance budgets, and coding conventions for web projects.
---

# Web Design Guidelines

## Estándares de Calidad

### Performance Budget
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Tiempo de carga total**: < 3s en 3G
- **Tamaño bundle JS**: < 200KB gzip
- **Tamaño página total**: < 1.5MB

### SEO On-Page
- Cada página: H1 único, title único, meta description única
- Estructura headings jerárquica (H1 → H2 → H3, sin saltos)
- URLs amigables: kebab-case, descriptivas, cortas
- Open Graph y Twitter Cards en todas las páginas
- Schema markup (Organization, LocalBusiness, Service)
- Sitemap.xml y robots.txt
- Breadcrumbs visibles en páginas interiores

### Accesibilidad (WCAG 2.1 AA)
- Contraste mínimo 4.5:1 texto normal, 3:1 texto grande
- Navegación por teclado completa (Tab, Enter, Escape)
- Skip to content link al inicio
- Alt text descriptivo en todas las imágenes
- Formularios con label asociado (no placeholder como label)
- Focus visible en todos los elementos interactivos
- ARIA landmarks: banner, navigation, main, contentinfo

### Responsive Design
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px - 1535px
- Wide: 1536px+
- Breakpoints consistentes (no valores arbitrarios)
- Touch targets ≥ 44x44px en móvil

### Código y Mantenibilidad
- HTML semántico (header, nav, main, section, article, aside, footer)
- CSS con metodología (BEM, Utility-first con Tailwind)
- JS modular, sin dependencias pesadas innecesarias
- Comentarios solo para lógica compleja (código auto-documentado)
- Linting: ESLint + Prettier configurados

### Checklist de Lanzamiento
- [ ] SEO: meta tags, sitemap, robots.txt, redirects
- [ ] Performance: Lighthouse score > 90 en mobile y desktop
- [ ] Accesibilidad: axe DevTools sin errores críticos
- [ ] Responsive: probado en 320, 768, 1024, 1440px
- [ ] Analytics: Google Tag Manager / GA4 configurado
- [ ] Formularios: validación, envío, notificación
- [ ] Enlaces: sin broken links (herramienta: Dr. Link Check)
- [ ] HTTPS: certificado válido, redirección HTTP→HTTPS
- [ ] Cookies: banner de consentimiento si aplica
- [ ] Backup: base de datos y archivos respaldados
