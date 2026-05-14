import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { Providers } from "@/src/components/Providers";
import { NonHomeBackground } from "@/src/components/NonHomeBackground";
import { MainWrapper } from "@/src/components/MainWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Join-ready.com",
    template: "%s | Join Ready",
  },
  description:
    "Join Ready helps future applicants understand military options by country and branch — before speaking with a recruiter. An independent educational resource.",
  keywords: ["military", "joining", "guide", "army", "navy", "air force", "preparation"],
  openGraph: {
    title: "Join Ready",
    description: "Understand your military options before making a commitment.",
    siteName: "Join Ready",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#070A08] text-[#F4F1E8] antialiased font-sans overflow-x-hidden">
        <Providers>
          <NonHomeBackground />
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
