import { mensFashion } from '../data/storefront'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

type MensFashionFeatureProps = {
  onAddToCart: (product: (typeof mensFashion)[number]) => void
}

export default function MensFashionFeature({ onAddToCart }: MensFashionFeatureProps) {
  return (
    <section className="mens-feature" id="mens-fashion">
      <div className="mens-products">
        <SectionHeading title="Men's Fashion" link="Shop men's" href="#mens-fashion" />
        <div className="product-grid mens-grid">
          {mensFashion.map((product, index) => <ProductCard key={product.name} product={product} index={index} onAddToCart={onAddToCart} />)}
        </div>
      </div>
      <a className="mens-editorial" href="#mens-fashion">
        <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&h=720&q=85" alt="A modern men's fashion look" loading="lazy" />
        <span className="mens-editorial-copy"><strong>Top Selling Products</strong><small>Trending now: must-have styles for every occasion</small><span>Discover the edit ↗</span></span>
      </a>
    </section>
  )
}
