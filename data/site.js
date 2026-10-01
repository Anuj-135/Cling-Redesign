/**
 * Verified Site Configuration & Global Metadata
 * Source: clinginfotech.com (live verified data).
 */

import { officesData } from "./offices";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Cling Infotech",
  legalName: "Cling Info Tech Works Private Limited",
  tagline: "Build Digital Products That Move Business Forward.",
  description:
    "Engineering dependable digital platforms, high-performance web and mobile apps, enterprise ERP solutions, and AI-driven intelligence.",
  foundedYear: 2019,
  cta: {
    label: "Let's Talk",
    href: "#contact",
  },
  contact: {
    email: "info@clinginfotech.com",
    phone: "+91 8264469132",
    whatsappUrl: "https://api.whatsapp.com/send?phone=8264469132&text=Hey%20I%20am%20trying%20to%20connect%20with%20you",
  },
  offices: officesData,
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/",
      verified: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/clinginfotechworks/",
      verified: true,
    },
  ],
  footerLinks: [
    {
      title: "Solutions",
      links: [
        { label: "Custom Web Apps", href: "#services" },
        { label: "Mobile Engineering", href: "#services" },
        { label: "Enterprise ERPs", href: "#services" },
        { label: "AI & Computer Vision", href: "#services" },
        { label: "3D Animation & Motion", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Cling", href: "#about" },
        { label: "Featured Work", href: "#work" },
        { label: "Our Evolution", href: "#about" },
        { label: "Leadership Team", href: "#about" },
        { label: "Contact & Offices", href: "#contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Start a Project", href: "#contact" },
        { label: "WhatsApp Direct", href: "https://api.whatsapp.com/send?phone=8264469132" },
        { label: "info@clinginfotech.com", href: "mailto:info@clinginfotech.com" },
        { label: "+91 8264469132", href: "tel:+918264469132" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms and Conditions", href: "#terms" },
    { label: "Cancellation & Refund", href: "#refund" },
  ],
};
