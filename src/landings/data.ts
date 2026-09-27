/**
 * Datos de las landings exclusivas de un mercado: SEO, hero, casos, FAQs y CTA.
 * Las secciones visuales viven en cada componente (DisenoWebCaracas.astro, ...).
 *
 * Regla: aquí sólo va información verdadera y verificable. Precios, plazos,
 * métodos de pago o casos nuevos se añaden cuando estén confirmados.
 */
import type { MarketId } from "../config/markets";

export interface LandingData {
  slug: string;
  market: MarketId;
  title: string;
  description: string;
  breadcrumb: string;
  service: { name: string; serviceType: string };
  hero: { badge: string; h1: string; highlight: string; intro: string; waText: string };
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
        "Páginas web y tiendas online rápidas en el celular, pensadas para que cada visita termine en una conversación de venta.",
      waText: "Hola, quiero cotizar una página web para mi negocio en Caracas.",
    },
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
        "Sistemas web, portales y automatizaciones para empresas que necesitan ordenar clientes, cotizaciones e inventario.",
      waText: "Hola, quiero conversar sobre un desarrollo web a medida para mi empresa en Caracas.",
    },
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
