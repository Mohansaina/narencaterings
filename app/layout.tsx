import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://narencaterings.com"),
  title: "NAREN CATERINGS | Royal Wedding & Event Caterers | Vizag & Anakapalli",
  description:
    "మీ వివాహం అందరికీ గుర్తుండేలా చేసుకోవాలని వుందా? ఐతే మాకు ఒక అవకాశం ఇవ్వండి! Naren Caterings offers authentic royal Andhra wedding catering, traditional Arati Aaku feasts, and multi-cuisine banquets across Visakhapatnam, Anakapalli, and S.Rayavaram. Call 9133774043.",
  keywords: [
    "Naren Caterings",
    "Naren Catering Vizag",
    "Anakapalli Catering Services",
    "Penugollu S.Rayavaram Caterers",
    "Wedding Catering Visakhapatnam",
    "Arati Aaku Bhojanam",
    "Telugu Wedding Caterers",
    "Non Veg Catering Vizag",
    "Best Caterers in Andhra Pradesh",
    "9133774043",
  ],
  authors: [{ name: "Naren Caterings" }],
  openGraph: {
    title: "NAREN CATERINGS - Royal Wedding Caterers Vizag",
    description: "Authentic Andhra Wedding Feasts & Event Catering in Vizag & Anakapalli. Phone: 9133774043",
    url: "https://narencaterings.com",
    siteName: "Naren Caterings",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Naren Caterings Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-stone-900 bg-[#FAF7F2] selection:bg-[#72152B] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
