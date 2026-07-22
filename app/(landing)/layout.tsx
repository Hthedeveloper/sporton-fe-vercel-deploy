import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./components/fragments/header/header";
import Footer from "./components/fragments/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SportOn Website",
  description:
    "Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
