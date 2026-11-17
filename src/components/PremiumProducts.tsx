import { premiumProducts } from '../data/storefront'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function PremiumProducts({ onAddToCart }: { onAddToCart: (product: (typeof premiumProducts)[number]) => void }) {
  return (
    <section className="product-section premium-section" id="products">
      <SectionHeading title="Premium Products" link="Shop all products" href="#products" />
      <div className="premium-layout">
        <div className="product-grid premium-grid">
          {premiumProducts.map((product, index) => <ProductCard key={product.name} product={product} index={index} onAddToCart={onAddToCart} />)}
        </div>
        <aside className="flight-ad">
          <span className="flight-plane" aria-hidden="true">✈</span>
          <span className="flight-eyebrow">A LITTLE GETAWAY</span>
          <strong>FLIGHT<br />TICKET</strong>
          <span className="flight-discount">40% OFF</span>
          <a href="#fashion">BOOK NOW <span>↗</span></a>
        </aside>
      </div>
    </section>
  )
}
