import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardolealpsicologia.com.br"),
  title: "Eduardo Leal | Psicólogo Clínico",
  description:
    "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e brasileiros no exterior.",
  keywords: [
    "psicólogo clínico",
    "Gestalt-terapia",
    "psicoterapia online",
    "saúde mental",
    "ansiedade",
    "autoestima",
    "brasileiros no exterior",
  ],
  alternates: {
    canonical: "https://eduardolealpsicologia.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Eduardo Leal | Psicólogo Clínico",
    description:
      "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e brasileiros no exterior.",
    url: "https://eduardolealpsicologia.com.br",
    siteName: "Eduardo Leal Psicologia",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1080,
        height: 1080,
        alt: "Eduardo Leal | Psicólogo Clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Leal | Psicólogo Clínico",
    description:
      "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e brasileiros no exterior.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
