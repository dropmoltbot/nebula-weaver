
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebula Weaver - Interactive Cosmic Experience",
  description: "A mesmerizing interactive particle simulation with custom GLSL shaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
