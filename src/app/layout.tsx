/* eslint-disable prettier/prettier */
import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import Banner from "../components/Banner/Banner";
import Marque from "../components/Marque";  

import { Providers } from "./provider";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";
import { Navbar } from "@/src/components/navbar";

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
  const newsItems = [
    {title: "দেশজুড়ে বইমেলা শুরু হচ্ছে আগামী সপ্তাহে "},
     {title:"ভারতের সঙ্গে নতুন বাণিজ্য চুক্তি স্বাক্ষরিত"},
     {title:"ঢাকায় আজ বৃষ্টি হতে পারে"},
     {title: "বিশ্বকাপে বাংলাদেশের পরবর্তী খেলা শুক্রবার"},
     {title:"ই-কমার্স নীতিমালা চূড়ান্ত করেছে সরকার"}
   ];

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="container mx-auto relative flex flex-col min-h-screen">
            <Banner />
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 bg-background shadow">
              <Navbar />
              <Marque title='সর্বশেষ সংবাদ' data={newsItems} />
            </div>
            <main className="flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3 border-2 ">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
