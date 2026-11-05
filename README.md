# IBASE — website

Storefront for **IBASE**, a Nigerian clothing label. Layout inspired by an editorial, image-first fashion shop: announcement bar, centred wordmark, full-bleed lookbook hero, new-arrival grid with quick add, category tiles, a collection feature, journal and a dark footer.

Built with Next.js 16 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

| What | File |
| --- | --- |
| Products, prices, sizes, copy | `lib/products.js` |
| Journal posts | `lib/journal.js` |
| Socials, WhatsApp checkout number, free-delivery threshold | `lib/site.js` |
| Photos and lookbook videos | `public/media/` |

## Checkout

There is no payment provider yet. The bag works (sizes, quantities, saved in the browser). Put the brand's WhatsApp number in `lib/site.js` → `whatsappNumber` and the checkout button sends the order to WhatsApp. Leave it empty and the button shows "Checkout — coming soon".
