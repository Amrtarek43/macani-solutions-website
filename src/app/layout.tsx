import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Macani Solutions - IT Consulting & Technology Services | Florida, Dubai, Riyadh",
  description:
    "Innovative startup providing IT consulting, managed services, and technology solutions in Florida, Dubai, and Riyadh.",
  keywords:
    "IT consulting, managed services, technology startup, Florida, Dubai, Riyadh, Macani Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} font-inter bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

