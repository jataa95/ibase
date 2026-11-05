"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/site";

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [first, second] = product.images;

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-mist">
        <Link href={`/shop/${product.slug}`} aria-label={`${product.name}, ${product.colour}`} className="absolute inset-0">
          <Image
            src={first}
            alt={`${product.name} — ${product.colour}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className={`object-cover transition-[opacity,transform] duration-700 group-hover:scale-[1.03] ${second ? "group-hover:opacity-0" : ""}`}
          />
          {second && (
            <Image
              src={second}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </Link>
        {product.isNew && (
          <span className="pointer-events-none absolute left-3 top-3 bg-paper px-2 py-0.5 text-[13px]">New</span>
        )}
        {/* Quick add sizes */}
        <div className="absolute inset-x-3 bottom-3 hidden translate-y-2 bg-paper/95 p-2 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <p className="mb-1.5 text-[12px] text-ink/60">Quick add</p>
          <div className="grid grid-cols-6 gap-1">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => addItem(product, s)}
                className="border border-black/10 py-1.5 text-[12px] hover:bg-ink hover:text-paper"
                aria-label={`Add to bag — ${product.name}, size ${s}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2.5 text-[14px] leading-snug">
        <Link href={`/shop/${product.slug}`} className="hover:opacity-60">
          {product.name}
        </Link>
        <p className="text-ink/60">{product.colour}</p>
        <p className="text-ink/80">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
