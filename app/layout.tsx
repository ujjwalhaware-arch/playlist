import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Playlist — Mood Radio & Nostalgia Vault",
  description: "A gorgeous, interactive glassmorphism music player with mood-curated playlists: Karwaan, Rockstar, Metro vibes, Sufi classics, Romance, Indie, and Pop hits.",
  keywords: ["Music Player", "Karwaan", "Rockstar", "Aashiqui 2", "Life in a Metro", "Indie Music", "Sufi Songs", "Mood Radio", "Prateek Kuhad", "Arijit Singh", "Mohit Chauhan", "KK"],
  openGraph: {
    title: "My Playlist — Mood Radio & Nostalgia Vault",
    description: "Stream handpicked tracks organized by mood on a sleek glassmorphic music player.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth select-none antialiased">
      <body className="h-full bg-black text-white overflow-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
