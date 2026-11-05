import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, getProducts } from "@/lib/products";

export const metadata = { title: "Shop" };

export default async function ShopPage({ searchParams }) {
  const { category } = await searchParams;
  const active = categories.find((c) => c.slug === category);
  const list = getProducts(active?.slug);

  const tabs = [{ slug: undefined, name: "All products" }, ...categories];

  return (
    <section className="px-4 pb-28 pt-12 lg:px-[15px]">
      <h1 className="font-serif text-5xl md:text-7xl">{active ? active.name : "All products"}</h1>
      <div className="mt-8 flex items-center justify-between border-b border-black/10 pb-3 text-[14px]">
        <nav className="flex gap-5">
          {tabs.map((t) => {
            const isActive = t.slug === active?.slug;
            return (
              <Link
                key={t.name}
                href={t.slug ? `/shop?category=${t.slug}` : "/shop"}
                className={isActive ? "text-ink" : "text-ink/45 hover:text-ink"}
                aria-current={isActive ? "page" : undefined}
              >
                {t.name}
              </Link>
            );
          })}
        </nav>
        <span className="text-ink/45">{list.length} items</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-2.5 gap-y-10 lg:grid-cols-4">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 4} />
        ))}
      </div>
    </section>
  );
}
