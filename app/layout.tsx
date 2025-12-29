import "./globals.css";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>
           {children}
        </main>
      </body>
    </html>
  );
}
