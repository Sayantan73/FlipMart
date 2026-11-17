import type { Product } from '../data/storefront'
import ProductCard from './ProductCard'

type SearchResultsProps = {
  query: string
  products: Product[]
  onAddToCart: (product: Product) => void
  onClear: () => void
}

export default function SearchResults({ query, products, onAddToCart, onClear }: SearchResultsProps) {
  return (
    <section className="product-section search-results" id="products" aria-live="polite">
      <div className="section-heading">
        <div><span className="section-kicker">YOUR SEARCH</span><h2>Search results</h2></div>
        <span className="search-result-count">{products.length} {products.length === 1 ? 'item' : 'items'} for “{query}”</span>
      </div>
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} onAddToCart={onAddToCart} />)}
        </div>
      ) : (
        <div className="search-empty">
          <strong>No products found for “{query}”</strong>
          <p>Try a different product name or category.</p>
          <button type="button" onClick={onClear}>Clear search</button>
        </div>
      )}
      {products.length > 0 && <button className="clear-search" type="button" onClick={onClear}>Clear search</button>}
    </section>
  )
}
