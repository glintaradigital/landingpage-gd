export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glintara Digital",
    url: "https://glintaradigital.com",
    logo: "https://glintaradigital.com/logo.png",
    description: "Leading technology agency specializing in web development, mobile apps, and digital solutions.",
    sameAs: [
      "https://www.facebook.com/glintaradigital",
      "https://www.instagram.com/glintaradigital",
      "https://twitter.com/glintaradigital",
      "https://www.linkedin.com/company/glintara-digital",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+62-812-345-678",
      email: "hello@glintaradigital.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Indonesia",
      addressCountry: "ID",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "Branding & Design",
      "Technology Solutions",
    ],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "Branding",
      "Content Strategy",
      "Video Production",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
