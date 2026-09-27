/**
 * Contenido de las landings exclusivas de un mercado (MARKET_ONLY_PAGES).
 *
 * Regla: aquí sólo va información verdadera y verificable. Precios, plazos,
 * métodos de pago o casos nuevos se añaden cuando estén confirmados.
 */
import type { MarketId } from "../config/markets";

export interface LandingCard {
  title: string;
  text: string;
  /** Línea corta opcional, p. ej. un precio "desde". */
  meta?: string;
}

export interface LandingSection {
  eyebrow: string;
  title: string;
  intro?: string;
  cards?: LandingCard[];
  bullets?: string[];
  chips?: string[];
}

export interface LandingData {
  slug: string;
  market: MarketId;
  title: string;
  description: string;
  breadcrumb: string;
  service: { name: string; serviceType: string };
  hero: { badge: string; h1: string; highlight: string; intro: string; waText: string };
  sections: LandingSection[];
  casesTitle: string;
  casesIntro: string;
  caseSlugs: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
  cta: { title: string; text: string; waText: string };
}

export const LANDINGS: LandingData[] = [
  {
    slug: "diseno-paginas-web-caracas",
    market: "ve",
    title: "Diseño de Páginas Web en Caracas | Grupo Rincón",
    description:
      "Páginas web y tiendas online en Caracas conectadas a WhatsApp, con Pago Móvil y soporte local. Conoce los tipos de web, precios y proyectos. Cotiza hoy.",
    breadcrumb: "Diseño de páginas web en Caracas",
    service: { name: "Diseño de páginas web en Caracas", serviceType: "Diseño y desarrollo de páginas web" },
    hero: {
      badge: "Equipo de desarrollo en Caracas",
      h1: "Diseño de páginas web en Caracas que convierten visitas en",
      highlight: "clientes por WhatsApp",
      intro:
        "Somos un equipo de desarrollo de software con más de 10 años creando páginas web, tiendas online y sistemas para PYMEs. Diseñamos tu web para que cargue rápido en el celular, explique bien lo que vendes y lleve cada visita a una conversación de venta.",
      waText: "Hola, quiero cotizar una página web para mi negocio en Caracas.",
    },
    sections: [
      {
        eyebrow: "Tipos de página web",
        title: "¿Qué tipo de página web necesita tu negocio?",
        intro:
          "No todos los negocios necesitan lo mismo. Te recomendamos el formato según lo que quieres lograr, no según lo más caro.",
        cards: [
          {
            title: "Landing page",
            text: "Una sola página enfocada en un servicio o campaña, con botón de WhatsApp y formulario. Ideal para anuncios en Instagram o Google.",
            meta: "Desde US$400",
          },
          {
            title: "Web corporativa",
            text: "Varias páginas para presentar tu empresa, servicios, casos y contacto. Autogestionable en WordPress o de alto rendimiento en Astro.",
            meta: "Según alcance",
          },
          {
            title: "Tienda online",
            text: "Catálogo, carrito y medios de pago locales o internacionales con WooCommerce o desarrollo a medida.",
            meta: "Según alcance",
          },
          {
            title: "Web + sistema",
            text: "Tu web conectada a un cotizador, un CRM o tu inventario, para que los pedidos no se pierdan entre chats y hojas de cálculo.",
            meta: "Según alcance",
          },
        ],
      },
      {
        eyebrow: "Pensado para Venezuela",
        title: "Cobra y atiende a tus clientes como ya compran en Venezuela",
        intro:
          "Tu web tiene que funcionar con los medios de pago y los canales que tus clientes ya usan. La compatibilidad de cada medio se valida antes de empezar.",
        cards: [
          {
            title: "Pago Móvil y transferencias",
            text: "Registro de datos y comprobantes para validar cada pago de forma ordenada.",
          },
          {
            title: "Pagos internacionales",
            text: "PayPal, Stripe o Mercado Pago cuando la cuenta y el proyecto son compatibles.",
          },
          {
            title: "WhatsApp como canal de venta",
            text: "Botones con mensaje prellenado según la página o el producto, para saber qué te están pidiendo desde el primer mensaje.",
          },
          {
            title: "Rápida en datos móviles",
            text: "Imágenes optimizadas y código liviano para que tu web cargue bien aunque la señal no acompañe.",
          },
        ],
      },
      {
        eyebrow: "Por qué Grupo Rincón",
        title: "Un equipo de software, no sólo un diseñador",
        cards: [
          {
            title: "Web que vende, no un folleto",
            text: "Estructuramos cada página para captar contactos: mensajes claros, llamadas a la acción y seguimiento de conversiones.",
          },
          {
            title: "Crece contigo",
            text: "Si mañana necesitas un cotizador, un CRM o automatizar respuestas, lo desarrolla el mismo equipo que hizo tu web.",
          },
          {
            title: "Trato directo",
            text: "Hablas con quien diseña y programa tu proyecto, por WhatsApp y videollamada, en horario de Venezuela.",
          },
          {
            title: "Acompañamiento después del lanzamiento",
            text: "Planes de mantenimiento con respaldos, actualizaciones y soporte para que tu web siga segura y rápida.",
          },
        ],
      },
    ],
    casesTitle: "Proyectos que hemos entregado",
    casesIntro:
      "Hemos trabajado para empresas en Venezuela, Colombia, España y México. Estos son algunos de los proyectos publicados.",
    caseSlugs: ["doral-cartagena", "mexicarga", "housiders-housereel"],
    faqs: [
      {
        question: "¿Cuánto cuesta una página web en Caracas?",
        answer:
          "Una landing page parte desde US$400. Una web corporativa, una tienda online o una web conectada a un sistema se cotizan según el número de páginas, las integraciones (pagos, WhatsApp, inventario) y el contenido. Antes de empezar recibes una propuesta con el alcance y el precio.",
      },
      {
        question: "¿Cuánto tiempo toma hacer mi página web?",
        answer:
          "Depende del tipo de web y de que el contenido esté listo. En la propuesta incluimos un cronograma por etapas: consultoría, diseño, desarrollo, pruebas y lanzamiento.",
      },
      {
        question: "¿Puedo cobrar con Pago Móvil en mi tienda online?",
        answer:
          "Sí. Podemos preparar tu tienda para recibir Pago Móvil y transferencias bancarias con registro de comprobantes, además de pasarelas internacionales como PayPal o Stripe cuando tu cuenta lo permite. Validamos la compatibilidad de cada medio antes de comenzar.",
      },
      {
        question: "¿Trabajan con empresas fuera de Caracas?",
        answer:
          "Sí. Estamos en Caracas y trabajamos con empresas de toda Venezuela y de otros países por videollamada y WhatsApp.",
      },
      {
        question: "¿Puedo usar un dominio .com.ve?",
        answer:
          "Sí. Podemos trabajar con un dominio .com.ve registrado en NIC.ve o con un dominio internacional como .com, según lo que necesite tu marca.",
      },
      {
        question: "¿Podré actualizar yo mismo el contenido?",
        answer:
          "Si eliges WordPress, sí: te entregamos un sitio autogestionable para editar textos, imágenes y productos. Si prefieres no hacerlo, puedes contratar un plan de mantenimiento.",
      },
      {
        question: "¿Qué pasa después de publicar la web?",
        answer:
          "Ofrecemos planes de soporte y mantenimiento con respaldos, actualizaciones y monitoreo para que tu sitio siga funcionando bien.",
      },
    ],
    related: [
      { href: "/servicios/diseno-paginas-web-ecommerce/", label: "Páginas web y tiendas online" },
      { href: "/desarrollo-web-a-medida-caracas/", label: "Desarrollo web a medida en Caracas" },
      { href: "/servicios/soporte-mantenimiento-wordpress/", label: "Soporte y mantenimiento WordPress" },
    ],
    cta: {
      title: "¿Listo para tener una web que te traiga clientes?",
      text: "Cuéntanos qué vendes y a quién. Te respondemos por WhatsApp con una recomendación y los siguientes pasos.",
      waText: "Hola, quiero cotizar una página web para mi negocio en Caracas.",
    },
  },
  {
    slug: "desarrollo-web-a-medida-caracas",
    market: "ve",
    title: "Agencia de Desarrollo Web a Medida en Caracas | Grupo Rincón",
    description:
      "Sistemas web, portales y automatizaciones para empresas en Caracas: Laravel, integraciones con WhatsApp y soporte continuo. Agenda una consultoría.",
    breadcrumb: "Desarrollo web a medida en Caracas",
    service: { name: "Desarrollo web a medida en Caracas", serviceType: "Desarrollo de software y aplicaciones web a medida" },
    hero: {
      badge: "Agencia de desarrollo en Caracas",
      h1: "Agencia de desarrollo web a medida en",
      highlight: "Caracas",
      intro:
        "Creamos sistemas web, portales y automatizaciones para empresas que ya venden y necesitan ordenar su operación: menos Excel, menos tareas manuales y más visibilidad sobre clientes, cotizaciones e inventario.",
      waText: "Hola, quiero conversar sobre un desarrollo web a medida para mi empresa en Caracas.",
    },
    sections: [
      {
        eyebrow: "Qué desarrollamos",
        title: "Software web hecho para cómo trabaja tu empresa",
        cards: [
          {
            title: "Sistemas administrativos",
            text: "CRM, cotizaciones, inventario, cobranza o gestión de clientes, con roles y reportes según tu proceso.",
          },
          {
            title: "Portales y plataformas",
            text: "Portales para clientes, proveedores o equipos internos, con acceso seguro y datos en un solo lugar.",
          },
          {
            title: "Automatización e integraciones",
            text: "Conectamos tu web, WhatsApp, correo y formularios para que los datos lleguen solos al sistema correcto.",
          },
          {
            title: "Apps móviles conectadas",
            text: "Apps para iOS y Android que usan la misma base de datos que tu sistema web.",
          },
        ],
      },
      {
        eyebrow: "¿Es para ti?",
        title: "Cuándo tu empresa necesita un sistema y no sólo una página",
        bullets: [
          "Tus pedidos o cotizaciones viven entre chats de WhatsApp y hojas de Excel.",
          "Dependes de una persona para saber cómo va cada cliente o cada venta.",
          "Repites a mano las mismas tareas todos los días: copiar datos, enviar correos, actualizar precios.",
          "Tu herramienta actual ya no se adapta a tu proceso y pagas por funciones que no usas.",
        ],
      },
      {
        eyebrow: "Tecnología",
        title: "Tecnología probada, elegida para cada proyecto",
        intro:
          "Usamos herramientas modernas y mantenibles, y elegimos cada una según el problema, no por moda.",
        chips: ["Laravel", "Livewire", "Filament", "Python", "PostgreSQL", "AWS", "Astro", "React Native", "Flutter"],
      },
    ],
    casesTitle: "Proyectos a medida que hemos entregado",
    casesIntro:
      "Plataformas y apps desarrolladas para empresas en España y México, con el mismo equipo que atiende a empresas en Venezuela.",
    caseSlugs: ["job-and-go", "housiders-housereel", "mexicarga"],
    faqs: [
      {
        question: "¿Cuánto cuesta un desarrollo web a medida?",
        answer:
          "Depende de los módulos, las integraciones y la cantidad de usuarios. Recomendamos empezar con una primera versión que resuelva el problema principal y crecer por etapas. Antes de empezar recibes una propuesta con alcance y precio.",
      },
      {
        question: "¿Cómo empieza un proyecto?",
        answer:
          "Con una consultoría para entender tu proceso actual, dónde se pierde tiempo o dinero y qué debe resolver el sistema. Con eso definimos el alcance de la primera versión.",
      },
      {
        question: "¿Se puede integrar con lo que ya uso?",
        answer:
          "En la mayoría de los casos sí: WhatsApp, correo, formularios web, hojas de cálculo u otros sistemas con API. Lo revisamos en la consultoría inicial.",
      },
      {
        question: "¿Ofrecen soporte después del lanzamiento?",
        answer:
          "Sí. Acompañamos el sistema después de publicarlo con soporte, mejoras y mantenimiento para que evolucione con tu empresa.",
      },
      {
        question: "¿Trabajan con empresas fuera de Caracas?",
        answer:
          "Sí. Estamos en Caracas y trabajamos con empresas de toda Venezuela y de otros países por videollamada y WhatsApp.",
      },
    ],
    related: [
      { href: "/servicios/automatizacion-desarrollo/", label: "Software administrativo y automatización" },
      { href: "/servicios/desarrollo-apps-moviles/", label: "Desarrollo de apps móviles" },
      { href: "/diseno-paginas-web-caracas/", label: "Diseño de páginas web en Caracas" },
    ],
    cta: {
      title: "Cuéntanos qué proceso quieres ordenar",
      text: "Escríbenos por WhatsApp con el problema que tienes hoy y te proponemos cómo resolverlo por etapas.",
      waText: "Hola, quiero conversar sobre un desarrollo web a medida para mi empresa en Caracas.",
    },
  },
];
