import type { Metadata } from "next";
import { JetBrains_Mono, Doto } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "700", "800"],
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mehriddin Nasimjonov | Full-Stack Developer",
  description: "Full-Stack Developer specializing in building exceptional digital experiences. Passionate about creating elegant solutions to complex problems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} ${doto.variable} antialiased`}>
        {/* Noise overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
