import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St. Mary's Church Maharagama - Our Lady of the Assumption Parish",
  description: "Our Lady of the Assumption Parish, Maharagama, Sri Lanka.",
  authors: [{ name: "St. Mary's Church Maharagama" }],
  icons: {
    icon: '/logo2.png',
    apple: '/logo2.png',
  },
  openGraph: {
    title: "St. Mary's Church Maharagama",
    description: "Our Lady of the Assumption Parish, Maharagama, Sri Lanka.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
