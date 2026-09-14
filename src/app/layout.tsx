import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bara Ahmad — Backend & Applied AI Engineer",
  description:
    "Brooklyn-based engineer building intelligent, data-intensive systems from experimentation to production. Backend, data pipelines, applied AI, agentic automation, autonomous-vehicle perception.",
  metadataBase: new URL("https://baraahmad.dev"),
  openGraph: {
    title: "Bara Ahmad — Backend & Applied AI Engineer",
    description: "Backend, data pipelines, applied AI, agentic automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
