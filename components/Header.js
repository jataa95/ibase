"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useCart } from "./CartContext";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight * 0.75);
      setHidden(y > 200 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const overHero = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`sticky top-0 z-40 h-16 transition-[transform,background-color,color] duration-500 ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${overHero ? "bg-transparent text-white" : "bg-paper text-ink"}`}
      >
        <div className="grid h-full grid-cols-3 items-center px-4 lg:px-[15px]">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="text-[15px] md:hidden"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <Link href="/" className="justify-self-center" aria-label="IBASE home">
            <Logo className="text-[28px] md:text-[32px]" />
          </Link>
          <nav className="flex items-center justify-end gap-6 text-[15px]">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hidden hover:opacity-60 md:inline">
                {n.label}
              </Link>
            ))}
            <button type="button" onClick={open} className="hover:opacity-60">
              Bag{count > 0 ? ` (${count})` : ""}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-between bg-paper px-4 pb-8 pt-32 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-ink/50">Shop</p>
            <ul className="space-y-1 font-serif text-4xl">
              <li><Link href="/shop">All products</Link></li>
              {categories.map((c) => (
                <li key={c.slug}><Link href={`/shop?category=${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <ul className="space-y-1 font-serif text-4xl">
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className="flex gap-4 text-xs uppercase tracking-wider">
          <a href={site.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </>
  );
}
