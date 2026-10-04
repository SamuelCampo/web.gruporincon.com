# Flujo mínimo del MVP — Empleo Guayana

## 1. Objetivo del producto

Lanzar una primera versión útil de **Empleo Guayana** que pueda publicarse rápidamente, validar interés real y crecer por etapas.

La visión futura es una red social local enfocada inicialmente en un estado de Venezuela. Este documento se limita al primer producto mencionado por el cliente y no intenta representar la operación final, que será más amplia y compleja.

## 2. Alcance confirmado en la conversación

El MVP debe permitir:

1. Registrarse o iniciar sesión con Google.
2. Responder un cuestionario inicial.
3. Generar un perfil de usuario con esas respuestas.
4. Consultar un feed con varias publicaciones nuevas al día.
5. Buscar publicaciones para encontrar contenido con rapidez.

Datos y autenticación se manejarán con **Supabase**.

## 3. Usuario principal

Persona de la región de Guayana interesada en descubrir oportunidades laborales y contenido relacionado con empleo local.

> El chat no confirma todavía si las empresas o reclutadores tendrán cuentas propias en el MVP. Por eso, el flujo se concentra en el usuario que busca oportunidades.

## 4. Flujo mínimo

```text
Inicio
  ↓
Registro o acceso con Google
  ↓
Cuestionario inicial
  ↓
Perfil generado
  ↓
Feed de publicaciones
  ├── Buscar publicaciones
  │     ↓
  │   Resultados filtrados
  │     ↓
  └── Abrir una publicación
        ↓
      Ver detalle
```

### Paso 1 — Inicio y acceso

- Presentar brevemente qué ofrece Empleo Guayana.
- Mostrar una acción principal: **Continuar con Google**.
- Si el usuario ya tiene cuenta, llevarlo directamente al feed.
- Si es su primer acceso, llevarlo al cuestionario.

### Paso 2 — Cuestionario inicial

Recoger únicamente información suficiente para crear un perfil básico y mejorar la relevancia de la experiencia.

Campos sugeridos para validar con el cliente:

- Nombre y apellido, obtenidos de Google cuando estén disponibles.
- Ciudad o municipio.
- Área o categoría laboral de interés.
- Nivel de experiencia.
- Modalidad preferida: presencial, remota o híbrida.
- Situación actual: buscando empleo, abierto a oportunidades u otra.

La interfaz debe mostrar progreso, permitir regresar al paso anterior y explicar que las respuestas se usarán para completar el perfil.

### Paso 3 — Perfil generado

- Mostrar un resumen sencillo de las respuestas.
- Permitir confirmar o editar los datos.
- Acción principal: **Ir al feed**.

En esta fase el perfil es funcional, no social: no se incluyen seguidores, mensajería, contactos, reacciones ni publicaciones creadas por usuarios.

### Paso 4 — Feed

- Mostrar publicaciones en orden de más recientes a más antiguas.
- Cada tarjeta debe incluir, cuando exista: título, organización, ubicación o modalidad, categoría, fecha y resumen.
- Incluir un campo de búsqueda visible en la parte superior.
- Permitir abrir el detalle de una publicación.
- Contemplar estados de carga, feed vacío y error.

### Paso 5 — Búsqueda

- Buscar por palabras presentes en el título, organización, categoría o ubicación.
- Mostrar la consulta activa y la cantidad de resultados.
- Permitir limpiar la búsqueda y volver al feed completo.
- Contemplar un estado sin resultados con una sugerencia para cambiar el término.

### Paso 6 — Detalle de publicación

- Mostrar toda la información disponible de la publicación.
- Incluir una acción para volver al feed o a los resultados de búsqueda.
- Si existe un enlace externo para postularse o conocer más, mostrarlo como acción principal.

> El mecanismo de postulación no está definido en el chat. Para el MVP se asume un enlace externo opcional, sin construir todavía un sistema interno de postulaciones.

## 5. Navegación mínima

En la experiencia autenticada:

- **Inicio:** feed y búsqueda.
- **Perfil:** consulta y edición de respuestas del cuestionario.
- **Cerrar sesión:** disponible desde el perfil o menú de cuenta.

## 6. Estados esenciales de interfaz

- Usuario nuevo y usuario recurrente.
- Cuestionario incompleto.
- Guardando perfil.
- Feed cargando, vacío o con error.
- Búsqueda con resultados y sin resultados.
- Publicación disponible o eliminada.
- Sesión expirada.

## 7. Fuera del alcance inicial

No se deben agregar al primer prototipo sin validación del cliente:

- Mensajería o chat.
- Seguidores, contactos o networking.
- Reacciones, comentarios o contenido creado por usuarios.
- Sistema interno de postulaciones.
- Cuentas y paneles para empresas o reclutadores.
- Suscripciones, pagos o planes.
- Notificaciones.
- Moderación avanzada.
- Recomendaciones automáticas o personalización algorítmica.
- Panel administrativo completo.

Las publicaciones sí necesitan una fuente de carga, pero la conversación no define su flujo. Para el prototipo puede representarse contenido de ejemplo administrado directamente en Supabase.

## 8. Preguntas que deben resolverse con el cliente

1. ¿Qué tipo exacto de publicaciones aparecerá en el feed: vacantes, noticias, cursos, consejos u otros?
2. ¿Qué preguntas son obligatorias para formar el perfil?
3. ¿El perfil será privado o visible para otras personas o empresas?
4. ¿Cómo se cargan y aprueban las publicaciones en la primera versión?
5. ¿Las postulaciones ocurren fuera de la plataforma o dentro de ella?
6. ¿Cuál es el estado o territorio exacto que cubrirá el lanzamiento?
7. ¿Existe un manual de marca, logo, paleta, tipografías y recursos gráficos disponibles?
8. ¿La primera versión será una web app responsive, una app móvil o ambas?

## 9. Prompt listo para Stitch

```text
Diseña una web app responsive, mobile-first, para “Empleo Guayana”, una plataforma local de oportunidades laborales que inicia como un MVP y en el futuro podrá evolucionar hacia una red social regional.

Objetivo del prototipo:
Permitir que una persona se registre con Google, complete un cuestionario para generar su perfil, consulte un feed de publicaciones laborales, busque contenido y vea el detalle de una publicación.

Construye las siguientes pantallas y conéctalas como un flujo navegable:

1. Bienvenida / acceso
- Breve propuesta de valor centrada en descubrir oportunidades laborales de la región.
- Botón principal “Continuar con Google”.
- Usa la marca “Empleo Guayana”.

2. Cuestionario inicial
- Flujo corto, dividido en pasos, con indicador de progreso.
- Campos: ciudad o municipio, área laboral de interés, nivel de experiencia, modalidad preferida y situación laboral actual.
- Botones “Atrás” y “Continuar”.
- Última acción: “Crear mi perfil”.

3. Resumen del perfil
- Presenta las respuestas en un formato claro y editable.
- Acción principal “Ir al feed”.

4. Feed principal
- Encabezado con saludo breve, avatar y buscador visible.
- Lista de publicaciones ordenadas desde la más reciente.
- Cada tarjeta incluye título, organización, ubicación o modalidad, categoría, fecha y resumen corto.
- Diseña ejemplos realistas relacionados con oportunidades de empleo en Guayana.
- Incluye navegación inferior en móvil con “Inicio” y “Perfil”.

5. Resultados de búsqueda
- Conserva el buscador con el término activo.
- Muestra cantidad de resultados y tarjetas coincidentes.
- Incluye una variante sin resultados y una acción para limpiar la búsqueda.

6. Detalle de publicación
- Título, organización, ubicación, modalidad, categoría, fecha, descripción completa y requisitos de ejemplo.
- Botón principal “Postularme” que representa un enlace externo.
- Acción clara para volver.

7. Perfil
- Datos básicos y respuestas del cuestionario.
- Acciones “Editar perfil” y “Cerrar sesión”.

Incluye también estados visuales para carga, error, feed vacío, búsqueda sin resultados, guardado de perfil y sesión expirada.

Dirección visual:
- Apariencia profesional, cercana y confiable.
- Prioriza legibilidad, navegación simple y acciones principales evidentes.
- Usa componentes consistentes, tarjetas limpias, buen contraste y áreas táctiles cómodas.
- Usa una paleta neutra temporal y deja el sistema preparado para aplicar el manual de marca oficial; no inventes colores, tipografías ni recursos de identidad.
- Evita que parezca una red social compleja: este primer diseño debe sentirse pequeño, claro y listo para lanzar.

Restricciones del MVP:
- No diseñes chat, seguidores, contactos, reacciones, comentarios, pagos, notificaciones, panel de empresa, panel administrativo completo ni postulaciones internas.
- No inventes funciones que no estén descritas.
- La autenticación y la base de datos se implementarán con Supabase; representa los estados de la interfaz, no la arquitectura técnica.

Entrega:
- Un flujo completo conectado entre pantallas.
- Versiones móvil y escritorio de las pantallas principales.
- Componentes reutilizables para botones, campos, tarjetas de publicación, navegación y estados vacíos.
```

## 10. Criterio de éxito del MVP

Una persona nueva puede entrar, crear su perfil y encontrar una publicación relevante sin ayuda. Una persona recurrente puede volver al feed y buscar una publicación en pocos pasos.
