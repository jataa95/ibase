import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/journal";

export const metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <section className="px-4 pb-28 pt-12 lg:px-[15px]">
      <h1 className="font-serif text-5xl md:text-7xl">Journal</h1>
      <p className="mt-4 max-w-md text-[15px] text-ink/70">Stories, people and places from the IBASE studio and the street.</p>
      <div className="mt-10 grid gap-x-2.5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/journal/${post.slug}`} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Image src={post.image} alt="" fill priority={i < 3} sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]" />
            </div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-ink/50">{post.label}</p>
            <h2 className="mt-1 font-serif text-3xl leading-tight">{post.title}</h2>
            <p className="mt-2 max-w-sm text-[14px] text-ink/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
