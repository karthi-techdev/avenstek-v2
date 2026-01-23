
import { Metadata } from "next";
import { headers } from "next/headers";
import ClientWrapper from "./ClientWrapper"; // Ensure this component exists or is correct
import "./globals.css";
import VisitorTracker from "./components/VisitorTracker";
import { ToastProvider } from "./components/Toast";
import { ModalProvider } from "./components/ConfirmModal";

export const metadata: Metadata = {
  title: "Avenstek Solutions | Building Excellence Through Consistency in Innovation.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const headerList = await headers();
  const domain = headerList.get("host") || "";
  const fullPath = headerList.get("x-url") || "";

  // Check if current path is admin to avoid wrapping with public site wrapper if needed
  const isAdmin = fullPath.includes("/admin");
  if (isAdmin) {
    // Admin layout handles its own structure, but we need HTML/Body if this is RootLayout
    // Usually Admin pages are nested, so if this is ROOT, we must render html/body
    // If the admin pages have their own layout that doesn't use this RootLayout (e.g. they use a (admin) route group), then this check is valid. 
    // Assuming current structure uses ONE RootLayout for everything.
    // If isAdmin, we might skip ClientWrapper (header/footer) but still need html/body.
    return (
      <html lang="en">
        <body>
          <ToastProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </ToastProvider>
        </body>
      </html>
    );
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
        <ToastProvider>
          <ModalProvider>
            <VisitorTracker />
            <ClientWrapper>{children}</ClientWrapper>
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}