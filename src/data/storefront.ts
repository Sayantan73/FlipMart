export type Product = {
  name: string
  image: string
  price: string
  oldPrice?: string
  badge?: string
  rating?: string
  category?: string
}

export type CartItem = {
  product: Product
  quantity: number
}

export const premiumProducts: Product[] = [
  { name: 'Everyday inkjet printer', image: 'photo-1498049794561-7780e7231661', price: '$89.00', oldPrice: '$99.00' },
  { name: 'Marius mirrorless camera', image: 'photo-1516035069371-29a1b244cc32', price: '$155.00', oldPrice: '$199.00' },
  { name: 'Rorbi 4K television', image: 'photo-1593359677879-a4bb92f829d1', price: '$79.00' },
  { name: 'Morbi pendant lamp', image: 'photo-1507473885765-e6ed057f782c', price: '$45.00', oldPrice: '$55.00' },
  { name: 'Fusce wireless controller', image: 'photo-1606144042614-b2417e99c4e3', price: '$99.00', oldPrice: '$100.00' },
]

export const outfits: Product[] = [
  { name: 'The sunshine linen set', image: 'photo-1539109136881-3be0616acf4b', price: '$86.00', oldPrice: '$110.00' },
  { name: 'Soft days knit dress', image: 'photo-1529139574466-a303027c1d8b', price: '$72.00' },
  { name: 'The weekend edit', image: 'photo-1483985988355-763728e1935b', price: '$98.00', oldPrice: '$125.00' },
  { name: 'City lights mini', image: 'photo-1515886657613-9f3515b0c78f', price: '$64.00' },
  { name: 'Modern muse blazer', image: 'photo-1534528741775-53994a69daeb', price: '$118.00', oldPrice: '$150.00' },
  { name: 'Golden hour co-ord', image: 'photo-1524504388940-b1c1722653e1', price: '$79.00' },
]

export const mensFashion: Product[] = [
  { name: 'The modern weekend suit', image: 'photo-1617137968427-85924c800a22', price: '$189.00', oldPrice: '$240.00' },
  { name: 'Everyday tailored layers', image: 'photo-1618354691373-d851c5c3a990', price: '$125.00' },
]

export const searchableProducts: Product[] = [
  ...premiumProducts.map((product) => ({ ...product, category: 'electronics premium' })),
  ...outfits.map((product) => ({ ...product, category: 'clothing girls fashion' })),
  ...mensFashion.map((product) => ({ ...product, category: "men's fashion clothing" })),
]

export const slides: { eyebrow: string; title: string; emphasis: string; copy: string; button: string; image: string; color: string }[] = [
  { eyebrow: 'THE ACCESSORY EDIT', title: 'A little more', emphasis: 'extraordinary.', copy: 'The bags you’ll carry everywhere. Find your new favorite, up to 40% off.', button: 'Shop the collection', image: 'photo-1584917865442-de89df76afd3', color: 'sand' },
  { eyebrow: 'THE EVERYDAY ICONS', title: 'Made for your', emphasis: 'every day.', copy: 'Good design, better prices. Meet the pieces worth making room for.', button: 'Explore bestsellers', image: 'photo-1548036328-c9fa89d128fa', color: 'rose' },
  { eyebrow: 'A FRESH POINT OF VIEW', title: 'Your next', emphasis: 'favorite thing.', copy: 'A little something new, from the brands you love. Up to 50% off.', button: 'Discover the edit', image: 'photo-1590874103328-eac38a683ce7', color: 'blue' },
]
