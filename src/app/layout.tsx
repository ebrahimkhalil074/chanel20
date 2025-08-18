import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./provider";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";

import Banner from "@/src/components/Banner/Banner";
import { Navbar } from "@/src/components/navbar";
import Footer from "@/src/components/Footer";

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
    <html suppressHydrationWarning lang="bn">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            {/* Top Banner */}
            <Banner />

            {/* Sticky Navbar with Marquee */}
            <div className="sticky top-0 z-50 bg-background  ">
              <Navbar />
            
            </div>

            {/* Page Content */}
            <main className="flex-grow container mx-auto ">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
