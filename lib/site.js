export const site = {
  name: "IBASE",
  tagline: "Made in Nigeria. Built for the everyday.",
  tiktok: "https://www.tiktok.com/@madebyibase",
  tiktokHandle: "@madebyibase",
  instagram: "https://www.instagram.com/madebyibase",
  // International format without "+" or spaces, e.g. "2348012345678".
  // When set, the bag's checkout button sends the order to this WhatsApp number.
  whatsappNumber: "",
  freeDeliveryThreshold: 150000,
};

export function formatPrice(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
