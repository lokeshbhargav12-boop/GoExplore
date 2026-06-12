import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Explore | Northeast India Tour Packages | Shillong, Kaziranga, Arunachal",
  description: "Book affordable Northeast India tour packages. Visit Shillong, Kaziranga, Tawang, Sikkim with expert guides. 24/7 support. Call +91 91056 83331",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="pt-[72px] sm:pt-[88px]">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
