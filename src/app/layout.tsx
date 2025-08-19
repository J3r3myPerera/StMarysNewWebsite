import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St. Mary's Church Maharagama - Our Lady of the Assumption Parish",
  description: "A place of faith, community, and spiritual growth in Maharagama, Sri Lanka. Join us for Mass services, religious education, and community fellowship.",
  keywords: "St. Mary's Church, Maharagama, Catholic Church, Sri Lanka, Our Lady of the Assumption, Mass schedules, Parish",
  authors: [{ name: "St. Mary's Church Maharagama" }],
  openGraph: {
    title: "St. Mary's Church Maharagama",
    description: "A place of faith, community, and spiritual growth in Maharagama, Sri Lanka",
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
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
