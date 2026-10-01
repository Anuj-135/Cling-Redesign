import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Cling Infotech — Modern Technology Solutions",
  description:
    "Engineering dependable digital platforms, enterprise software, and mission-critical cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-text-secondary font-sans selection:bg-crimson selection:text-white">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
