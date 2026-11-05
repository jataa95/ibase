"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Shop",
    links: [{ href: "/shop", label: "All products" }, ...categories.map((c) => ({ href: `/shop?category=${c.slug}`, label: c.name }))],
  },
  {
    title: "Help",
    links: [
      { href: "/about#contact", label: "Contact" },
      { href: "/about#delivery", label: "Delivery & Returns" },
      { href: "/about#sizing", label: "Size Guide" },
    ],
  },
  {
    title: "IBASE",
    links: [
      { href: "/about", label: "About" },
      { href: "/journal", label: "Journal" },
    ],
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-night text-white">
      <div className="grid gap-12 px-4 pb-6 pt-20 lg:grid-cols-2 lg:px-[15px]">
        <div className="max-w-sm">
          <p className="mb-6 text-[15px] uppercase">Subscribe to our newsletter</p>
          {subscribed ? (
            <p className="border-b border-white/40 pb-3 text-[15px] text-white/80">Thank you — you're on the list.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
              className="flex items-center border-b border-white/40 pb-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-[15px] placeholder:text-white/50 focus:outline-none"
                aria-label="Email address"
              />
              <button type="submit" aria-label="Subscribe" className="text-xl">→</button>
            </form>
          )}
          <div className="mt-8 flex gap-12 text-[15px]">
            <div>
              <p className="mb-1 text-[12px] uppercase text-white/50">Country</p>
              <p>Nigeria</p>
            </div>
            <div>
              <p className="mb-1 text-[12px] uppercase text-white/50">Currency</p>
              <p>NGN ₦</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-6 text-[15px] uppercase">{col.title}</p>
              <ul className="space-y-2.5 text-[15px] text-white/90">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:opacity-60">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden px-4 lg:px-[15px]">
        <Logo className="-mb-[3vw] block select-none text-center text-[26vw] text-white/[0.06]" />
      </div>

      <div className="flex flex-col gap-4 border-t border-white/15 px-4 py-6 text-[12px] uppercase sm:flex-row sm:items-end sm:justify-between lg:px-[15px]">
        <div className="flex gap-3">
          <a href={site.tiktok} target="_blank" rel="noreferrer" className="hover:opacity-60">TikTok {site.tiktokHandle}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:opacity-60">Instagram</a>
        </div>
        <p>© IBASE {new Date().getFullYear()} · Made in Nigeria</p>
      </div>
    </footer>
  );
}
