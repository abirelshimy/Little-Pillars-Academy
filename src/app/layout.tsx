import type { Metadata } from "next";
import { Patrick_Hand, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jafar Little Pillars Academy | Islamic Preschool in Johns Creek, GA",
  description:
    "Jafar Little Pillars Academy is an Islamic preschool in Johns Creek, GA offering full-day childcare for children ages 9 months to 4 years in a nurturing, faith-based environment with Quran, Arabic, and STEAM-based learning.",
  keywords: [
    "Islamic preschool Johns Creek",
    "Muslim daycare Georgia",
    "faith-based childcare North Fulton",
    "Jafar Little Pillars",
    "Islamic early education",
    "Quran preschool Atlanta",
    "Arabic preschool Georgia",
  ],
  openGraph: {
    title: "Jafar Little Pillars Academy | Islamic Preschool",
    description:
      "A nurturing Islamic environment for children ages 9 months to 4 years. Quran, Arabic, English curriculum, and STEAM-based learning in Johns Creek, GA.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Jafar Little Pillars Academy",
              description:
                "Islamic preschool offering full-day childcare for children ages 9 months to 4 years.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "11005 Jones Bridge Rd #112",
                addressLocality: "Johns Creek",
                addressRegion: "GA",
                postalCode: "30022",
                addressCountry: "US",
              },
              telephone: ["(678) 779-1975", "(678) 662-8066"],
              email: "melshimy1@gmail.com",
              openingHours: "Mo-Fr 08:00-14:30",
              url: "https://www.masjidjafaratl.com/",
            }),
          }}
        />
      </head>
      <body
        className={`${patrickHand.variable} ${nunito.variable} font-body antialiased bg-cream-light text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
