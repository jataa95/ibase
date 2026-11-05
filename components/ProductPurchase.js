"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import { categories } from "@/lib/products";
import { formatPrice } from "@/lib/site";

function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details open={defaultOpen} className="group border-b border-black/10 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] uppercase tracking-wider">
        {title}
        <span className="transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="pt-3 text-[14px] leading-relaxed text-ink/75">{children}</div>
    </details>
  );
}

export default function ProductPurchase({ product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(null);
  const [error, setError] = useState(false);
  const category = categories.find((c) => c.slug === product.category);

  const add = () => {
    if (!size) return setError(true);
    addItem(product, size);
  };

  return (
    <div>
      <p className="mb-2 text-[13px] text-ink/50">
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        {" / "}
        <Link href={`/shop?category=${product.category}`} className="hover:text-ink">{category?.name}</Link>
      </p>
      <h1 className="font-serif text-4xl leading-tight md:text-5xl">{product.name}</h1>
      <p className="mt-1 text-[15px] text-ink/60">{product.colour}</p>
      <p className="mt-4 text-[17px]">{formatPrice(product.price)}</p>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-[13px]">
          <span>Size{size ? `: ${size}` : ""}</span>
          <Link href="/about#sizing" className="link-underline text-ink/60">Size guide</Link>
        </div>
        <div className="grid grid-cols-6 gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSize(s);
                setError(false);
              }}
              className={`border py-3 text-[13px] transition-colors ${size === s ? "border-ink bg-ink text-paper" : "border-black/15 hover:border-ink"}`}
              aria-pressed={size === s}
            >
              {s}
            </button>
          ))}
        </div>
        {error && <p className="mt-2 text-[13px] text-red-700">Please select a size.</p>}
      </div>

      <button type="button" onClick={add} className="mt-4 w-full bg-ink py-4 text-[14px] uppercase tracking-wider text-paper hover:bg-black">
        Add to bag
      </button>

      <p className="mt-8 text-[15px] leading-relaxed text-ink/80">{product.description}</p>

      <div className="mt-6 border-t border-black/10">
        <Accordion title="Details" defaultOpen>
          <ul className="list-disc space-y-1 pl-4">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion title="Fit">
          Relaxed and oversized by design. Take your usual size for the intended fit, or size down for a closer cut.
        </Accordion>
        <Accordion title="Delivery & Returns">
          We deliver across Nigeria. Unworn items with tags attached can be returned within 7 days of delivery.
        </Accordion>
      </div>
    </div>
  );
}
