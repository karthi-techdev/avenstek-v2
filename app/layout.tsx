
import { Metadata } from "next";
import { headers } from "next/headers"; // Import headers
import ClientWrapper from "./ClientWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avenstek Solutions | Building Excellence Through Consistency in Innovation.",
  description: "Bridge the gap between innovation and reality with Avenstek Solutions. From bespoke UI/UX design to robust Cybersecurity and Generative AI, we build the software that drives business growth. Partner with a premier software development agency to scale your digital presence.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const headerList = await headers();
  const domain = headerList.get("host") || "";
  const fullPath = headerList.get("x-url") || ""; 

  const isAdmin = fullPath.includes("/admin");
  if (isAdmin) {

    return <>{children}</>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Avenstek Solutions Pvt Ltd",
    "url": "https://avenstek.com",
    "logo": "https://avenstek.com/_next/static/media/logo-avenstek.c99ae382.png",
    "description": "A beacon of innovation and reliability in the software development industry, delivering exceptional IT solutions for over 10 years.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://x.com/avenstek",
      "https://www.linkedin.com/company/avenstek",
      "https://www.instagram.com/avenstek/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "info@avenstek.com"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}