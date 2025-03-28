import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadex Test",
  description: "Create for Cadex Task",
  openGraph: {
    title: "Cadex Test",
    description: "Create for Cadex Task",
    url: "URL страницы",
  },
  twitter: {
    card: "summary",
    title: "Cadex Test",
    description: "Create for Cadex Task"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
