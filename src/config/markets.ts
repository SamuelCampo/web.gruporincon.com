/**
 * Configuración por mercado (dominio).
 *
 * Un solo repositorio se despliega como dos proyectos en Vercel:
 *   - gruporincon.com.co → SITE_MARKET=co (valor por defecto)
 *   - gruporincon.com.ve → SITE_MARKET=ve
 *
 * Todo lo que cambia entre países (teléfono, textos, moneda, pagos,
 * páginas exclusivas) sale de aquí. Si algo es igual en ambos países,
 * no va en este archivo.
 */

export type MarketId = "ve" | "co";

export interface Market {
  id: MarketId;
  /** Dominio canónico, sin barra final. */
  url: string;
  domain: string;
  hreflang: string;
  ogLocale: string;
  country: string;
  countryCode: string;
  /** Número de WhatsApp en formato internacional sin "+". */
  whatsapp: string;
  phone: string;
  currency: "USD" | "COP";
  budgetLabel: string;
  budgets: string[];
  /** Ciudades donde el mercado se trabaja activamente (para textos y schema). */
  cities: string[];
  address?: {
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  defaultDescription: string;
  homeDescription: string;
  keywords: string;
}

export const MARKETS: Record<MarketId, Market> = {
  ve: {
    id: "ve",
    url: "https://www.gruporincon.com.ve",
    domain: "gruporincon.com.ve",
    hreflang: "es-VE",
    ogLocale: "es_VE",
    country: "Venezuela",
    countryCode: "VE",
    whatsapp: "584262590251",
    phone: "+584262590251",
    currency: "USD",
    budgetLabel: "Presupuesto estimado (USD)",
    budgets: ["Menos de $500", "$500 a $1.500", "Más de $1.500"],
    cities: ["Caracas"],
    address: {
      addressLocality: "Caracas",
      addressRegion: "Miranda",
      postalCode: "1070",
      addressCountry: "VE",
    },
    defaultDescription:
      "Grupo Rincón — Agencia de desarrollo de software y páginas web en Caracas, Venezuela, para PYMEs que quieren vender más y operar mejor.",
    homeDescription:
      "Creamos páginas web, tiendas online y software a la medida para empresas en Caracas y toda Venezuela, conectados a WhatsApp. Cotiza tu proyecto.",
    keywords:
      "diseño de páginas web Caracas, empresa de diseño web Caracas, agencia de desarrollo web Caracas, desarrollo de software Venezuela, tiendas online Venezuela, Grupo Rincón",
  },
  co: {
    id: "co",
    url: "https://www.gruporincon.com.co",
    domain: "gruporincon.com.co",
    hreflang: "es-CO",
    ogLocale: "es_CO",
    country: "Colombia",
    countryCode: "CO",
    whatsapp: "573219646346",
    phone: "+573219646346",
    currency: "COP",
    budgetLabel: "Presupuesto estimado (COP)",
    budgets: ["Menos de $3M", "$3M a $7M", "Más de $7M"],
    cities: [],
    defaultDescription:
      "Grupo Rincón — Agencia de desarrollo de software, páginas web y soluciones digitales para PYMEs en Colombia.",
    homeDescription:
      "Creamos páginas web, tiendas online y software a la medida para empresas en Colombia, conectados a WhatsApp. Cotiza tu proyecto con Grupo Rincón.",
    keywords:
      "desarrollo de software Colombia, diseño de páginas web Colombia, tiendas online Colombia, desarrollo de apps Colombia, Grupo Rincón",
  },
};

/** Mercado que se está compilando. */
export const MARKET_ID: MarketId =
  import.meta.env.SITE_MARKET === "ve" ? "ve" : "co";

/** Datos del mercado actual. */
export const M: Market = MARKETS[MARKET_ID];

/** Datos del otro mercado (para enlazar al otro dominio). */
export const OTHER: Market = MARKETS[MARKET_ID === "ve" ? "co" : "ve"];

/** Mercado que se usa como x-default en hreflang. */
export const DEFAULT_MARKET: MarketId = "co";

export const isVE = MARKET_ID === "ve";
export const isCO = MARKET_ID === "co";

/** Elige un valor según el mercado actual. */
export function pick<T>(values: Record<MarketId, T>): T {
  return values[MARKET_ID];
}

/** Enlace de WhatsApp del mercado actual, con mensaje opcional. */
export function waLink(text?: string, market: Market = M): string {
  const base = `https://wa.me/${market.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** URL absoluta de una ruta en un mercado. */
export function marketUrl(path: string, market: Market = M): string {
  return new URL(path, market.url).toString();
}

// Las páginas exclusivas de un mercado (p. ej. las de Caracas) se definen en
// src/landings/data.ts con su campo `market` y se generan desde src/pages/[landing].astro.

/**
 * Secciones con contenido idéntico en ambos dominios. Se publican en los dos,
 * pero su canonical apunta siempre a este mercado para no duplicar.
 */
export const CANONICAL_ONLY: { prefix: string; market: MarketId }[] = [
  { prefix: "/blogs/", market: "co" },
];
