import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Video from "@/components/Video";
import { categories, products } from "@/lib/products";
import { posts } from "@/lib/journal";

export default function Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-16 h-[calc(100svh-36px)] min-h-[560px] overflow-hidden bg-night">
        <div className="absolute inset-0 grid md:grid-cols-3">
          <div className="relative hidden md:block">
            <Image src="/media/monochrome-track-set.jpg" alt="" fill priority sizes="33vw" className="object-cover" />
          </div>
          <div className="relative">
            <Video src="/media/lookbook-01.mp4" poster="/media/lookbook-01-poster.jpg" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="relative hidden md:block">
            <Image src="/media/contour-track-set.jpg" alt="" fill priority sizes="33vw" className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-6 px-4 pb-8 text-white md:flex-row md:items-end lg:px-[15px]">
          <h1 className="font-serif text-[13vw] uppercase leading-[0.9] md:text-[7vw]">
            Made in
            <br />
            Nigeria.
          </h1>
          <div className="max-w-xs text-[15px] md:text-right">
            <p className="mb-3 text-white/85">Tracksuits, sets and everyday separates, designed and made at home.</p>
            <Link href="/shop" className="link-underline">Shop the collection</Link>
          </div>
        </div>
      </section>

      {/* New Arrival */}
      <section className="px-4 pb-24 pt-24 lg:px-[15px] lg:pt-28">
        <Reveal as="h2" className="mb-6 font-serif text-3xl md:text-4xl">New Arrival</Reveal>
        <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="link-underline text-[15px]">View all products</Link>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24">
        <h2 className="mb-4 px-4 font-serif text-3xl md:text-4xl lg:px-[15px]">Categories</h2>
        <div className="grid md:grid-cols-2">
          {categories.map((c) => (
            <Link key={c.slug} href={`/shop?category=${c.slug}`} className="group relative block aspect-square overflow-hidden md:aspect-[1/1.05]">
              <Image src={c.image} alt={c.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-b border-white pb-1 font-serif text-5xl uppercase text-white md:text-6xl">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Collection feature */}
      <section className="pb-24">
        <Reveal as="h2" className="mb-6 px-4 font-serif text-5xl uppercase leading-[0.95] md:text-7xl lg:px-[15px]">
          SS26’
          <br />
          The Track Edit
        </Reveal>
        <div className="grid gap-2.5 md:grid-cols-2 md:pr-[15px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-night md:aspect-auto md:min-h-[90vh]">
            <Video src="/media/lookbook-02.mp4" poster="/media/lookbook-02-poster.jpg" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-4 text-[14px] text-white lg:p-[15px]">
              <p className="mb-4 text-white/90">
                Built around movement, the Track Edit brings together our signature sets — curved contrast panels, tape stripes and wide,
                easy legs — in black, white, navy and cream. Wear them as a set or break them up.
              </p>
              <Link href="/shop?category=tracksuits" className="link-underline">Explore the collection</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 px-4 md:grid-rows-[1fr_1fr] md:px-0">
            <Reveal className="relative aspect-[3/4] overflow-hidden md:aspect-auto">
              <Image src="/media/still-navy-track-back.jpg" alt="Piped Track Set in navy, back view" fill sizes="25vw" className="object-cover" />
            </Reveal>
            <div />
            <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden md:aspect-auto" delay={120}>
              <Image src="/media/rose-arc-set.jpg" alt="Rose Arc Sweatpants detail" fill sizes="50vw" className="object-cover object-[50%_72%]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journal teaser */}
      <section className="grid gap-10 px-4 pb-28 lg:grid-cols-4 lg:gap-2.5 lg:px-[15px]">
        <Reveal className="lg:col-span-1 lg:col-start-2 lg:pr-6">
          <h2 className="mb-4 font-serif text-3xl">More than a base.</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink/75">
            <p>
              Stories from the studio and the street — the people, places and details that shape how we design and how our clothes
              get worn.
            </p>
            <p>
              The IBASE Journal follows the pieces from sketch to the street, with an eye for the small things that make an
              everyday garment worth keeping.
            </p>
          </div>
          <Link href="/journal" className="link-underline mt-6 inline-block text-[15px]">Read the journal</Link>
        </Reveal>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:col-span-2">
          {posts.slice(0, 2).map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link href={`/journal/${post.slug}`} className="group relative block aspect-[2/3] overflow-hidden">
                <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <p className="mb-1 text-[11px] uppercase tracking-[0.12em]">{post.label}</p>
                  <h3 className="font-serif text-2xl leading-tight underline decoration-1 underline-offset-4">{post.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="relative h-[85vh] min-h-[520px] overflow-hidden bg-night">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {["/media/still-white-contour.jpg", "/media/still-navy-track.jpg", "/media/still-panel-jacket.jpg", "/media/still-black-contour-side.jpg"].map((src, i) => (
            <div key={src} className={`relative ${i > 1 ? "hidden md:block" : ""}`}>
              <Image src={src} alt="" fill sizes="25vw" className="object-cover grayscale" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <p className="absolute right-4 top-4 text-[11px] uppercase tracking-[0.2em] text-white lg:right-[15px]">Nigeria · @madebyibase</p>
        <h2 className="absolute bottom-6 left-4 font-serif text-5xl uppercase leading-[0.95] text-white md:text-7xl lg:left-[15px]">
          Made here,
          <br />
          worn everywhere.
        </h2>
      </section>
    </>
  );
}
