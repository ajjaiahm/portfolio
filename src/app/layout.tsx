import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const roboto = Roboto({ 
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"], 
  variable: "--font-roboto" 
});

export const metadata: Metadata = {
  title: "Matada Ajjaiah | Full Stack Developer",
  description: "Portfolio of Matada Ajjaiah, Full Stack Developer experienced in MERN and Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} font-sans min-h-screen bg-background text-foreground selection:bg-primary/20`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
