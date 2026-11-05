import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-serif text-6xl">Not found.</h1>
      <p className="text-ink/70">The page you're looking for doesn't exist.</p>
      <Link href="/shop" className="link-underline">Back to the shop</Link>
    </section>
  );
}
