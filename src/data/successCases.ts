export interface SuccessCase {
  name: string;
  slug: string;
  externalUrl: string;
  internalUrl?: string;
  industry: string;
  country?: string;
  locationLabel?: string;
  description: string;
  image: string;
}

export const successCases: SuccessCase[] = [
  // Añade `internalUrl: "/casos-de-exito/slug/"` cuando exista el caso detallado.
  {
    name: "Housiders + HouseReel",
    slug: "housiders-housereel",
    externalUrl: "https://housereel.es",
    internalUrl: "/casos-de-exito/housiders-housereel/",
    industry: "PropTech",
    country: "España",
    locationLabel: "España",
    description:
      "App e infraestructura audiovisual que convierten fotos y videos inmobiliarios en contenido profesional y propiedades publicadas automáticamente.",
    image: "/portfolio/Housiders",
  },
  {
    name: "Avalora",
    slug: "avalora",
    externalUrl: "https://avalora.com",
    industry: "Tecnología",
    description:
      "Integradora tecnológica que desarrolla sistemas, infraestructuras, servicios y soluciones para empresas.",
    image: "/portfolio/Avalora",
  },
  {
    name: "Karina Rivera Mentora",
    slug: "karina-rivera-mentora",
    externalUrl: "https://karinariveramentora.com",
    industry: "Coaching & Educación",
    description:
      "Sitio de alto impacto para coach certificada con embudo de ventas, agenda integrada y membresías.",
    image: "/portfolio/Karina",
  },
  {
    name: "Explorex Group",
    slug: "explorex-group",
    externalUrl: "https://explorexgroup.com",
    industry: "Transporte",
    description:
      "Plataforma para un servicio de transporte turístico y viajes corporativos con vehículos modernos y conductores capacitados.",
    image: "/portfolio/Explorex",
  },
  {
    name: "Colectivo Traso",
    slug: "colectivo-traso",
    externalUrl: "https://colectivotraso.org",
    industry: "Organización Social",
    description:
      "Plataforma de captación de donantes y voluntarios para una organización sin fines de lucro.",
    image: "/portfolio/Colectivo",
  },
  {
    name: "Doral Cartagena",
    slug: "doral-cartagena",
    externalUrl: "https://doralcartagena.com",
    internalUrl: "/casos-de-exito/doral-cartagena/",
    industry: "Inmobiliaria",
    country: "Colombia",
    locationLabel: "Cartagena, Colombia",
    description:
      "Catálogo inmobiliario en WordPress y Elementor diseñado para presentar proyectos y captar oportunidades comerciales.",
    image: "/portfolio/Doral",
  },
  {
    name: "Mexicarga",
    slug: "mexicarga",
    externalUrl: "https://mexicarga.com",
    internalUrl: "/casos-de-exito/mexicarga/",
    industry: "Logística",
    country: "México",
    locationLabel: "México",
    description:
      "Experiencia digital para una empresa especializada en el envío y exportación de paquetería en México.",
    image: "/portfolio/mexicarga",
  },
];

export const getSuccessCaseHref = (item: SuccessCase) =>
  item.internalUrl || item.externalUrl;

export const isExternalSuccessCase = (item: SuccessCase) => !item.internalUrl;
