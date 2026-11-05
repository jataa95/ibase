"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./CartContext";
import { formatPrice, site } from "@/lib/site";

function whatsappLink(items) {
  const lines = items.map((i) => `• ${i.name} (${i.colour}) — size ${i.size} × ${i.quantity}`);
  const text = ["Hi IBASE, I'd like to order:", ...lines].join("\n");
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function CartDrawer() {
  const { items, count, isOpen, close, updateQuantity } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Your bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-paper transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <h2 className="font-serif text-2xl">Your bag ({count})</h2>
          <button type="button" onClick={close} className="text-[15px] hover:opacity-60">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
            <p className="text-ink/70">Your bag is empty.</p>
            <Link href="/shop" onClick={close} className="link-underline text-[15px]">
              Explore products
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-black/10 overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link href={`/shop/${item.slug}`} onClick={close} className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden bg-mist">
                    <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col text-[14px]">
                    <div className="flex justify-between gap-2">
                      <Link href={`/shop/${item.slug}`} onClick={close}>{item.name}</Link>
                      <span>{formatPrice()}</span>
                    </div>
                    <p className="text-ink/60">{item.colour} · {item.size}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-black/15">
                        <button type="button" className="px-3 py-1" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Decrease quantity">−</button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button type="button" className="px-3 py-1" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button type="button" className="link-underline text-[13px] text-ink/60" onClick={() => updateQuantity(item.key, 0)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="border-t border-black/10 px-5 py-5">
          <div className="mb-4 flex justify-between text-[15px]">
            <span>Subtotal</span>
            <span>{formatPrice()}</span>
          </div>
          {site.whatsappNumber ? (
            <a
              href={items.length ? whatsappLink(items) : undefined}
              target="_blank"
              rel="noreferrer"
              className={`block w-full bg-ink py-4 text-center text-[14px] uppercase tracking-wider text-paper ${items.length ? "hover:bg-black" : "pointer-events-none opacity-40"}`}
            >
              Checkout on WhatsApp
            </a>
          ) : (
            <button type="button" disabled className="w-full bg-ink py-4 text-[14px] uppercase tracking-wider text-paper opacity-40">
              Checkout — coming soon
            </button>
          )}
          <p className="mt-3 text-center text-[12px] text-ink/50">Delivery calculated at checkout.</p>
        </div>
      </aside>
    </div>
  );
}
