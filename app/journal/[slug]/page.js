import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/journal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="grid gap-10 px-4 pb-28 pt-12 lg:grid-cols-2 lg:px-[15px]">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:aspect-auto">
        <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="max-w-xl lg:pt-10">
        <p className="text-[11px] uppercase tracking-[0.12em] text-ink/50">{post.label}</p>
        <h1 className="mt-2 font-serif text-5xl leading-tight md:text-6xl">{post.title}</h1>
        <p className="mt-6 text-[18px] leading-relaxed">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink/80">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link href="/journal" className="link-underline mt-12 inline-block text-[15px]">Back to the journal</Link>
      </div>
    </article>
  );
}
