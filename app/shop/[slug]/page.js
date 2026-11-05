import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductPurchase from "@/components/ProductPurchase";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: `${product.name} — ${product.colour}`, description: product.description } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <>
      <section className="grid gap-8 pb-24 lg:grid-cols-[1fr_420px] lg:gap-0">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {product.images.map((src, i) => (
            <div key={src} className={`relative aspect-[3/4] bg-mist ${product.images.length === 1 ? "sm:col-span-2 sm:aspect-square" : ""}`}>
              <Image src={src} alt={`${product.name} — view ${i + 1}`} fill priority={i === 0} sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="px-4 lg:px-8">
          <div className="lg:sticky lg:top-24">
            <ProductPurchase product={product} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-4 pb-28 lg:px-[15px]">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl">You may also like</h2>
          <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
