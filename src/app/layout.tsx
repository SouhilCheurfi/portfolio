import type { Metadata } from "next";
import { DM_Sans, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ChildrenComponent from "@/components/ChildrenComponent";
import CallButton from "@/components/CallButton";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo-2",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Souhil's personal portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${exo2.className} ${dm_sans.variable} text-foreground antialiased flex flex-col items-center h-screen gap-4 pt-4 bg-background`}
      >
        <div className="w-full max-w-6xl flex flex-row items-center justify-center relative">
          <Navbar />
          <CallButton />
        </div>
        <div className="w-full h-full flex flex-col gap-4 items-center">
          <ChildrenComponent children={children} />
        </div>
      </body>
    </html>
  );
}
