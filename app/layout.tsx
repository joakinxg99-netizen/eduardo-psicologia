import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e para brasileiros no exterior.",
  openGraph: {
    title: "Eduardo Leal | Psicólogo Clínico",
    description:
      "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e para brasileiros no exterior.",
    type: "website",
    url: "https://eduardolealpsicologia.com.br",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Leal | Psicólogo Clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Leal | Psicólogo Clínico",
    description:
      "Atendimento psicológico presencial e online para adolescentes e adultos no Brasil e para brasileiros no exterior.",
    images: ["/social-preview.png"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
