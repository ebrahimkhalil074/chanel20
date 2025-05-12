
import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import Banner from "../components/Banner/Banner";
import Marque from "../components/Marque";  

import { Providers } from "./provider";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";
import { Navbar } from "@/src/components/navbar";
import Footer from "../components/Footer";

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
           
             <Footer />
          
          </div>
        </Providers>
      </body>
    </html>
  );
}
