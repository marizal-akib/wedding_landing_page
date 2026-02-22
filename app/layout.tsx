import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Italianno } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno-var",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel lawani | Cinematic Wedding Photography & Films",
  description:
    "Timeless, emotional wedding photography and videography in London. We craft cinematic stories that let you relive every emotion — the nerves, the laughter, the vows, the celebration.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg" },
    ],
  },
  keywords: [
    "wedding photography London",
    "wedding videography London",
    "cinematic wedding films",
    "London wedding photographer",
    "wedding coverage London",
  ],
  openGraph: {
    title: "Daniel lawani | Cinematic Wedding Photography & Films",
    description:
      "Timeless, emotional storytelling for couples who want more than just coverage — they want a legacy.",
    type: "website",
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
        className={`${bodoni.variable} ${inter.variable} ${italianno.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
