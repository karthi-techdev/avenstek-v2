// app/metadata.config.ts
import { Metadata } from "next";

const seoContent = {
  title: "Avenstek Solutions | Global Enterprise Software & Digital Transformation Experts",
  description: "Avenstek Solutions Pvt Ltd: A premier software development agency with 10+ years of excellence. We deliver bespoke Web, Mobile, AI/ML, and Cloud solutions designed to scale businesses. From UI/UX design to Cybersecurity, we bridge the gap between innovation and real-world efficiency.",
  keywords: [
    "Avenstek Solutions Pvt Ltd",
    "Custom Software Development Services",
    "Enterprise Mobile App Development",
    "Full Stack Web Development Agency",
    "AI & Machine Learning Consulting",
    "Digital Transformation Solutions",
    "Cloud Migration and DevOps Strategy",
    "Scalable Ecommerce Platforms",
    "Cybersecurity and Data Protection",
    "UI/UX Product Design Agency",
    "Dedicated Software Development Team India",
    "Offshore IT Solutions",
    "SaaS Product Development",
    "FinTech and Healthcare Software Solutions"
  ],
};

export const rootMetadata: Metadata = {
  title: {
    default: seoContent.title,
    template: `%s | Avenstek Solutions`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  metadataBase: new URL("https://avenstek.com"),
  alternates: {
    canonical: "https://avenstek.com",
  },
  openGraph: {
    title: "Avenstek Solutions | Innovating the Future of Business Technology",
    description: seoContent.description,
    url: "https://avenstek.com",
    siteName: "Avenstek Solutions Pvt Ltd",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Avenstek Solutions - Premier IT & Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenstek Solutions | Expert Software & IT Services",
    description: "Transforming complex business requirements into seamless, user-friendly digital applications for 10+ years.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};