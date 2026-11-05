// Placeholder catalogue built from the launch lookbook. Swap prices, copy and
// imagery as the real range is confirmed.

export const categories = [
  { slug: "tracksuits", name: "Tracksuits", image: "/media/still-navy-track.jpg" },
  { slug: "separates", name: "Separates", image: "/media/raw-edge-crop.jpg" },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const products = [
  {
    slug: "contour-track-set-black",
    name: "Contour Track Set",
    colour: "Black / White",
    category: "tracksuits",
    isNew: true,
    images: ["/media/contour-track-set.jpg", "/media/still-black-contour-side.jpg"],
    description:
      "A two-piece track set cut from a smooth, lightweight shell. Curved contrast panels trace the body from shoulder to hem, finished with the IBASE box logo on chest and thigh.",
    details: ["Relaxed, boxy jacket with stand collar", "Full-length zip", "Elasticated cuffs and waistband", "Wide, straight-leg trouser"],
  },
  {
    slug: "monochrome-track-set",
    name: "Monochrome Track Set",
    colour: "White / Black",
    category: "tracksuits",
    isNew: true,
    images: ["/media/monochrome-track-set.jpg", "/media/still-monochrome-front.jpg", "/media/still-monochrome-side.jpg"],
    description:
      "Our signature set in reverse. A clean white base broken by a bold black chest band and matching knee panels, with tape stripes running down each sleeve.",
    details: ["Oversized jacket with dropped shoulder", "Mirrored IBASE logo", "Cuffed, wide trouser", "Woven shell, soft lining"],
  },
  {
    slug: "rose-arc-sweatpants",
    name: "Rose Arc Sweatpants",
    colour: "Rose",
    category: "separates",
    isNew: true,
    images: ["/media/rose-arc-set.jpg", "/media/rose-arc-detail.jpg"],
    description:
      "Heavyweight brushed fleece in a soft rose, shaped by black piping that arcs around the thigh and knee. Generously cut and meant to pool over the shoe.",
    details: ["Brushed-back cotton fleece", "Elasticated waist", "Contrast piping", "Side seam pockets"],
  },
  {
    slug: "raw-edge-crop-sweater",
    name: "Raw Edge Crop Sweater",
    colour: "Mocha",
    category: "separates",
    isNew: true,
    images: ["/media/raw-edge-crop.jpg", "/media/arc-panel-shorts.jpg"],
    description:
      "A cropped crewneck with exposed, raw-edge seams and extra-long sleeves. Wear it cropped, bunched or pulled down — it is built to be styled.",
    details: ["Cropped body", "Raw-edge exposed seams", "Extra-long ribbed sleeves", "Garment-dyed cotton"],
  },
  {
    slug: "arc-panel-shorts",
    name: "Arc Panel Shorts",
    colour: "Black / White",
    category: "separates",
    images: ["/media/arc-panel-shorts.jpg", "/media/raw-edge-crop.jpg"],
    description:
      "Below-the-knee jorts with a sweeping white piped arc that opens into a contrast side panel. Easy, loose and made to move.",
    details: ["Below-knee length", "Elasticated waist", "Contrast arc panel", "Side pockets"],
  },
  {
    slug: "contour-track-set-white",
    name: "Contour Track Set",
    colour: "White / Black",
    category: "tracksuits",
    images: ["/media/still-white-contour.jpg", "/media/still-white-contour-back.jpg"],
    description:
      "The Contour set in white, with black panels curving over the shoulder and through the leg. Clean from the front, graphic from behind.",
    details: ["Relaxed, boxy jacket", "Stand collar", "Wide, straight-leg trouser", "IBASE box logo"],
  },
  {
    slug: "piped-track-set-navy",
    name: "Piped Track Set",
    colour: "Navy",
    category: "tracksuits",
    images: ["/media/still-navy-track.jpg", "/media/still-navy-track-back.jpg"],
    description:
      "Deep navy with fine white piping that follows the seams from collar to hem. A quieter take on the IBASE track silhouette.",
    details: ["Contrast piping", "Full-length zip", "Elasticated cuffs", "Wide-leg trouser"],
  },
  {
    slug: "panel-track-jacket",
    name: "Panel Track Jacket",
    colour: "Black / Cream",
    category: "separates",
    images: ["/media/still-panel-jacket.jpg", "/media/still-panel-jacket-side.jpg"],
    description:
      "A cream yoke and chest band set against black, with tape stripes down the sleeve and a drawcord hem. Pair it with the Arc Panel Shorts or wear it on its own.",
    details: ["Cream yoke and chest band", "Drawcord hem", "Tape-stripe sleeves", "Oversized fit"],
  },
].map((p) => ({ sizes: SIZES, ...p }));

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProducts(category) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}
