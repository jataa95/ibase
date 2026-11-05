export const posts = [
  {
    slug: "the-base-layer",
    label: "Studio Notes",
    title: "The base layer",
    image: "/media/still-white-contour.jpg",
    excerpt: "Why every IBASE piece starts with the same question: what would you actually wear every day?",
    body: [
      "Every IBASE piece starts in the same place: the base. The clothes you reach for without thinking, the set you throw on to run an errand and end up wearing all day.",
      "We design from there outward. Silhouettes stay relaxed and generous. Fabrics are chosen to handle heat, movement and a long day out. Details — a curved panel, a line of piping, a raw edge — are where the character comes in.",
      "The result is a wardrobe that is easy to live in, and still says something when you walk into a room.",
    ],
  },
  {
    slug: "lines-that-move",
    label: "Considered Details",
    title: "Lines that move",
    image: "/media/rose-arc-set.jpg",
    excerpt: "Curves, piping and contrast panels — the graphic language running through the collection.",
    body: [
      "Look closely at any IBASE set and you will find a line doing work. Piping that arcs around the knee. A panel that sweeps from shoulder to hip. A stripe that follows the sleeve all the way to the cuff.",
      "These lines are drawn to follow the body as it moves, not to sit flat on a hanger. They catch the eye in motion, and they give simple pieces a shape you recognise from across the street.",
    ],
  },
  {
    slug: "unboxing-the-set",
    label: "Behind the Scenes",
    title: "Unboxing the set",
    image: "/media/still-panel-jacket.jpg",
    excerpt: "From the bag to the body: what arrives when you order an IBASE piece.",
    body: [
      "Every order is folded by hand and packed in an IBASE bag, ready to go straight from the door to the wardrobe.",
      "Open it, shake it out, put it on. That is the whole point.",
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
