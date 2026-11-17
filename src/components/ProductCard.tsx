import { useEffect, useRef, useState } from 'react'
import type { Product } from '../data/storefront'

export default function ProductCard({ product, index, onAddToCart }: { product: Product; index: number; onAddToCart: (product: Product) => void }) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)
  const animationTimeout = useRef<number | null>(null)

  useEffect(() => () => {
    if (animationTimeout.current !== null) window.clearTimeout(animationTimeout.current)
  }, [])

  function handleAddToCart() {
    onAddToCart(product)
    setAdded(true)
    if (animationTimeout.current !== null) window.clearTimeout(animationTimeout.current)
    animationTimeout.current = window.setTimeout(() => setAdded(false), 850)
  }

  return (
    <article className="product-card" style={{ animationDelay: `${index * 70}ms` }}>
      <a className="product-image" href="#products" aria-label={`View ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=560&h=620&q=85`} alt={product.name} loading="lazy" />
      </a>
      <button className={`favorite-button ${liked ? 'is-liked' : ''}`} onClick={() => setLiked(!liked)} aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}>
        <svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 2.1Z" /></svg>
      </button>
      <div className="product-info">
        <div className="product-rating"><span>★</span> {product.rating ?? '4.8'} <span className="rating-count">({index + 12})</span></div>
        <h3>{product.name}</h3>
        <div className="product-purchase-row">
          <div className="price-line"><strong>{product.price}</strong>{product.oldPrice && <del>{product.oldPrice}</del>}</div>
          <button className={`cart-add-button ${added ? 'is-added' : ''}`} onClick={handleAddToCart} aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}><span className="cart-add-symbol">{added ? '✓' : '+'}</span><span>{added ? 'Added' : 'Add'}</span></button>
        </div>
      </div>
    </article>
  )
}
