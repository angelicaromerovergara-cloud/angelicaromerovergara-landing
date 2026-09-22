// Helpers para construir bloques JSON-LD a partir de los mismos datos
// que ya se muestran en pantalla (breadcrumb visual, FAQ visible), para
// que el schema nunca se desincronice del contenido real de la página.

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceSchema({ name, description, url, providerName, providerUrl }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: providerName,
      url: providerUrl,
    },
    areaServed: { "@type": "Country", name: "Chile" },
  };
}

export function personSchema({ name, jobTitle, url, image, sameAs, alumniOf }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url,
    image,
    sameAs,
    alumniOf,
  };
}
