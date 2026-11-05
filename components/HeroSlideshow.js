"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/media/monochrome-track-set.jpg", name: "Monochrome Track Set", href: "/shop/monochrome-track-set" },
  { src: "/media/rose-arc-set.jpg", name: "Rose Arc Sweatpants", href: "/shop/rose-arc-sweatpants" },
  { src: "/media/contour-track-set.jpg", name: "Contour Track Set", href: "/shop/contour-track-set-black" },
  { src: "/media/raw-edge-crop.jpg", name: "Raw Edge Crop Sweater", href: "/shop/raw-edge-crop-sweater" },
  { src: "/media/arc-panel-shorts.jpg", name: "Arc Panel Shorts", href: "/shop/arc-panel-shorts" },
];

const INTERVAL = 6000; // ms each slide stays up
const PANELS = [0, 1, 2]; // desktop shows three panels, phones show the first

function Panel({ offset, index, previous, className }) {
  const n = slides.length;
  const current = (index + offset) % n;
  const prev = previous === null ? null : (previous + offset) % n;

  return (
    <div className={`hero-panel relative overflow-hidden ${className}`} style={{ "--delay": `${offset * 140}ms` }}>
      {slides.map((s, j) => {
        const state = j === current ? "is-active" : j === prev ? "is-prev" : "";
        return (
          <div key={s.src} className={`hero-slide ${state}`} aria-hidden={j !== current}>
            <Image
              src={s.src}
              alt={j === current ? s.name : ""}
              fill
              priority={j === offset}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="hero-slide-img object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        setPrevious(i);
        return (i + 1) % slides.length;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0 grid md:grid-cols-3">
        {PANELS.map((offset) => (
          <Panel
            key={offset}
            offset={offset}
            index={index}
            previous={previous}
            className={offset === 0 ? "" : "hidden md:block"}
          />
        ))}
      </div>

      {/* Progress */}
      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-4 text-[12px] text-white lg:inset-x-[15px]">
        <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <div className="flex flex-1 gap-1.5">
          {slides.map((s, j) => (
            <span key={s.src} className="relative h-px flex-1 overflow-hidden bg-white/25">
              <span
                key={j === index ? `on-${index}` : `off-${j}`}
                className={`absolute inset-0 origin-left bg-white ${j === index ? "hero-progress" : j < index ? "scale-x-100" : "scale-x-0"}`}
                style={j === index ? { animationDuration: `${INTERVAL}ms` } : undefined}
              />
            </span>
          ))}
        </div>
        <span className="tabular-nums text-white/60">{String(slides.length).padStart(2, "0")}</span>
        <Link href={slides[index].href} className="hidden min-w-[180px] text-right hover:opacity-70 md:block">
          {slides[index].name}
        </Link>
      </div>
    </>
  );
}
