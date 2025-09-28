import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Irfan Sandy's personal website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
