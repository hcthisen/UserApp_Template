import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to the team behind this Supabase starter.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
