
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";

import { siteConfig } from "@/config/site";
import { fontSans, fontKarantina } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx(
        "min-h-screen antialiased scroll-smooth overflow-x-hidden text-white bg-[radial-gradient(circle_at_center,_#9263B1_10%,_#512475_70%)] transition-colors duration-500 hover:bg-[#26123b]",
        fontKarantina.className)}><SmoothScroll>
       <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col ">
            <Navbar />
            <main className="container mx-auto max-w-7xl  px-2 ">
              {children}
            </main>

            {/* Footer */}

            <footer className="w-full flex flex-row items-center justify-center py-3">
              <div className="flex items-left">
                <h1>ISITE+</h1><br />
                <h2>Integrated Student in Information<br />Technology Education PLUS</h2>
              </div>
              <div className="text-sm text-center text-default-500">
                <p> VOLTEDGE ( iSITE+ ). All rights reserved © 2025. </p>
                <p>Built with Next.js and HeroUI.</p>
              </div>
            </footer>

          </div>
        </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
