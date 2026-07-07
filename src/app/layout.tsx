import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalpanaaaa Software Solutions - Enterprise Automation & Engineering",
  description: "Bespoke engineering partner providing full-lifecycle IT automation and software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
