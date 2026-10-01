import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * WhatsAppButton Component
 * Floating quick-contact CTA.
 * Strictly formatted with flat neutral/crimson styling (NO green badges/accents).
 * URL is marked as placeholder pending Phase 4 verification.
 */
export default function WhatsAppButton() {
  const whatsappUrl = siteConfig.contact?.whatsappUrl || "https://wa.me/";

  return (
    <aside
      aria-label="Direct message shortcut"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with Cling Infotech on WhatsApp"
        className="group flex items-center gap-2.5 bg-surface-2 hover:bg-surface-1 text-text-primary border border-border-hover hover:border-crimson rounded-full px-4 py-2.5 shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
      >
        <span className="w-2 h-2 rounded-full bg-crimson shrink-0" aria-hidden="true" />
        <MessageSquare className="w-4 h-4 text-crimson group-hover:scale-105 transition-transform" />
        <span className="text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
