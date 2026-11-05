import Image from "next/image";
import Video from "@/components/Video";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = { title: "About" };

const sizes = [
  ["XS", "86–91", "71–76"],
  ["S", "91–97", "76–81"],
  ["M", "97–102", "81–86"],
  ["L", "102–107", "86–91"],
  ["XL", "107–112", "91–97"],
  ["XXL", "112–117", "97–102"],
];

export default function AboutPage() {
  return (
    <>
      <section className="grid gap-10 px-4 pb-24 pt-12 lg:grid-cols-2 lg:px-[15px]">
        <div>
          <h1 className="font-serif text-6xl uppercase leading-[0.9] md:text-8xl">
            The base
            <br />
            of it all.
          </h1>
          <div className="mt-10 max-w-md space-y-4 text-[16px] leading-relaxed text-ink/80">
            <p>
              IBASE is a Nigerian clothing label built on one idea: everything starts with a strong base. We make tracksuits, sets
              and separates that are easy to live in and impossible to miss.
            </p>
            <p>
              Our pieces are relaxed, generous and drawn with lines that move — curved contrast panels, piping that follows the body,
              raw edges left on purpose. Designed and made in Nigeria, for wherever the day takes you.
            </p>
          </div>
        </div>
        <div className="relative aspect-[9/14] overflow-hidden bg-night lg:aspect-auto lg:min-h-[85vh]">
          <Video src="/media/lookbook-01.mp4" poster="/media/lookbook-01-poster.jpg" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2.5 px-4 pb-24 md:grid-cols-4 lg:px-[15px]">
        {["/media/raw-edge-crop.jpg", "/media/still-monochrome-front.jpg", "/media/rose-arc-set.jpg", "/media/still-panel-jacket-side.jpg"].map((src, i) => (
          <Reveal key={src} delay={i * 80} className="relative aspect-[3/4] overflow-hidden">
            <Image src={src} alt="" fill sizes="25vw" className="object-cover" />
          </Reveal>
        ))}
      </section>

      <section className="divide-y divide-black/10 border-y border-black/10">
        <div id="sizing" className="grid scroll-mt-24 gap-6 px-4 py-14 lg:grid-cols-2 lg:px-[15px]">
          <h2 className="font-serif text-4xl">Size guide</h2>
          <div>
            <p className="mb-4 text-[15px] text-ink/70">Body measurements in centimetres. Our fits are oversized by design.</p>
            <table className="w-full text-left text-[14px]">
              <thead className="text-ink/50">
                <tr className="border-b border-black/10">
                  <th className="py-2 font-normal">Size</th>
                  <th className="py-2 font-normal">Chest</th>
                  <th className="py-2 font-normal">Waist</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map(([s, chest, waist]) => (
                  <tr key={s} className="border-b border-black/5">
                    <td className="py-2">{s}</td>
                    <td className="py-2">{chest}</td>
                    <td className="py-2">{waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div id="delivery" className="grid scroll-mt-24 gap-6 px-4 py-14 lg:grid-cols-2 lg:px-[15px]">
          <h2 className="font-serif text-4xl">Delivery & returns</h2>
          <div className="max-w-lg space-y-3 text-[15px] leading-relaxed text-ink/80">
            <p>We deliver nationwide across Nigeria. Orders are packed by hand and dispatched once payment is confirmed.</p>
            <p>Unworn items with tags attached can be returned within 7 days of delivery. Get in touch and we'll guide you through it.</p>
          </div>
        </div>
        <div id="contact" className="grid scroll-mt-24 gap-6 px-4 py-14 lg:grid-cols-2 lg:px-[15px]">
          <h2 className="font-serif text-4xl">Contact</h2>
          <div className="space-y-2 text-[15px]">
            <p className="text-ink/80">For orders, sizing and collaborations, message us on social.</p>
            <p>
              <a href={site.tiktok} target="_blank" rel="noreferrer" className="link-underline">TikTok {site.tiktokHandle}</a>
            </p>
            <p>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline">Instagram</a>
            </p>
          </div>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
