import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Srinjoy Ganguly — open to freelance projects, full-time opportunities, and interesting collaborations.",
};

export default function ContactPage() {
  return <ContactSection />;
}
