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
  metadataBase: new URL("https://clinginfotech.com"),
  title: {
    default: "Cling Infotech — Modern Technology Solutions",
    template: "%s | Cling Infotech",
  },
  description:
    "Engineering dependable digital platforms, high-performance web and mobile applications, enterprise ERP solutions, and AI-driven intelligence.",
  keywords: [
    "Enterprise Software Engineering",
    "Custom Web Applications",
    "Mobile App Development",
    "Enterprise ERP Systems",
    "AI Surveillance Intelligence",
    "3D Visual Computing",
    "Cling Infotech",
  ],
  authors: [{ name: "Cling Infotech" }],
  creator: "Cling Infotech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clinginfotech.com",
    title: "Cling Infotech — Modern Technology Solutions",
    description:
      "Engineering dependable digital platforms, high-performance web and mobile applications, enterprise ERP solutions, and AI-driven intelligence.",
    siteName: "Cling Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cling Infotech — Modern Technology Solutions",
    description:
      "Engineering dependable digital platforms, high-performance web and mobile applications, enterprise ERP solutions, and AI-driven intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
