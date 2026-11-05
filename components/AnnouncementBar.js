import Link from "next/link";
import { formatPrice, site } from "@/lib/site";

const messages = [
  { text: `Free delivery within Nigeria on orders above ${formatPrice(site.freeDeliveryThreshold)}` },
  { text: "Stories, people and places.", link: { href: "/journal", label: "Read the journal" } },
  { text: "Tracksuits, sets & separates.", link: { href: "/shop", label: "Shop the collection" } },
];

function Message({ m }) {
  return (
    <span className="whitespace-nowrap">
      {m.text}
      {m.link && (
        <>
          {" "}
          <Link href={m.link.href} className="link-underline">
            {m.link.label}
          </Link>
        </>
      )}
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 h-9 overflow-hidden border-b border-black/10 bg-paper text-[13px] text-ink/80">
      {/* Desktop: three fixed columns */}
      <div className="hidden h-full items-center justify-between px-4 md:flex lg:px-[15px]">
        {messages.map((m, i) => (
          <div key={i} className={i === 0 ? "flex-1 text-center" : i === 1 ? "flex-1 text-center" : "flex-1 text-right"}>
            <Message m={m} />
          </div>
        ))}
      </div>
      {/* Mobile: scrolling ticker */}
      <div className="flex h-full items-center md:hidden">
        <div className="animate-marquee flex w-max gap-12 pl-12">
          {[...messages, ...messages].map((m, i) => (
            <Message key={i} m={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
