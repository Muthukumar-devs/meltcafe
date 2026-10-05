import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0907",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Melt Café & Roastery | Chennai's Artisanal Chocolaterie & Melts",
  description: "Experience Chennai's premier artisanal café in Nungambakkam & Besant Nagar. Featuring molten Valrhona desserts, gourmet sourdough melts, single-origin Yercaud coffees, and our signature Madras Molten Affogato.",
  keywords: [
    "Melt Cafe Chennai",
    "Nungambakkam cafe",
    "Besant Nagar cafe",
    "Chennai artisanal coffee",
    "Molten chocolate dome Chennai",
    "Gourmet sourdough melts",
    "Madras Molten Affogato",
    "KNK road cafes"
  ],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Melt Café & Roastery | Chennai",
    description: "Where warm flavours melt into unforgettable moments. Artisanal roastery and molten desserts in Nungambakkam & Besant Nagar.",
    images: [{ url: "/images/hero-cafe.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0d0907] text-[#fdfaf6] antialiased selection:bg-amber-600 selection:text-white font-body">
        {children}
      </body>
    </html>
  );
}
