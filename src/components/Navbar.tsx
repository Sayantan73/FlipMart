import { useState } from 'react'
import type { CartItem } from '../data/storefront'
import CartPanel from './CartPanel'

const categories = [
  { name: 'Accessories', image: 'photo-1523170335258-f5ed11844a49' },
  { name: 'Audio', image: 'photo-1505740420928-5e560c06d30e' },
  { name: 'Beauty', image: 'photo-1596462502278-27bfdc403348' },
  { name: 'Best Deals', image: 'photo-1542291026-7eec264c27ff' },
  { name: 'Best Seller', image: 'photo-1523275335684-37898b6baf30' },
  { name: 'Cameras', image: 'photo-1516035069371-29a1b244cc32' },
  { name: 'Chair', image: 'photo-1503602642458-232111445657' },
  { name: 'Clothing', image: 'photo-1529139574466-a303027c1d8b' },
  { name: 'Computer & Laptop', image: 'photo-1496181133206-80ce9b88a853' },
  { name: 'Electronics', image: 'photo-1498049794561-7780e7231661' },
]

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
}

function HeartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8A4.6 4.6 0 0 1 12 6.7a4.6 4.6 0 0 1 8.8 2.1Z" /></svg>
}

function BagIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>
}

type NavbarProps = {
  cartItems: CartItem[]
  searchQuery: string
  onSearchChange: (query: string) => void
  onSearch: (query: string) => void
  onChangeCartQuantity: (name: string, change: number) => void
  onRemoveCartItem: (name: string) => void
}

export default function Navbar({ cartItems, searchQuery, onSearchChange, onSearch, onChangeCartQuantity, onRemoveCartItem }: NavbarProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <span>Free shipping on orders over $50</span>
          <div className="utility-links"><a href="#footer">Track order</a><span>·</span><a href="#footer">Help & support</a></div>
        </div>
      </div>
      <div className="main-header">
        <a className="brand" href="#" aria-label="Flipmart home">
          <span className="brand-mark">f<span>.</span></span><span>flipmart</span>
        </a>
        <form className={`search-box ${mobileSearchOpen ? 'is-open' : ''}`} onSubmit={(event) => {
          event.preventDefault()
          const query = searchQuery.trim()
          onSearch(query)
          setMobileSearchOpen(false)
          if (query) {
            window.requestAnimationFrame(() => document.getElementById('products')?.scrollIntoView({
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            }))
          }
        }}>
          <SearchIcon />
          <input aria-label="Search products" placeholder="Search by product or category" value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} />
          <button type="submit">Search</button>
        </form>
        <div className="header-actions">
          <a className="seller-link" href="#vendor-signup">Become a Vendor</a>
          <button className="icon-button mobile-search" aria-label="Search" aria-expanded={mobileSearchOpen} onClick={() => setMobileSearchOpen(!mobileSearchOpen)}><SearchIcon /></button>
          <a className="icon-button" href="#products" aria-label="Wishlist"><HeartIcon /></a>
          <a className="account-link" href="#footer"><span className="avatar">J</span><span>Account</span></a>
          <button className="icon-button bag-button" type="button" aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`} aria-expanded={cartOpen} onClick={() => setCartOpen(!cartOpen)}><BagIcon />{cartCount > 0 && <i>{cartCount}</i>}</button>
        </div>
        {cartOpen && <CartPanel items={cartItems} onChangeQuantity={onChangeCartQuantity} onRemove={onRemoveCartItem} />}
      </div>
      <nav className="category-nav" aria-label="Shop categories">
        {categories.map((category) => (
          <a className="category-link" href="#products" key={category.name}>
            <span className="category-thumb"><img src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=120&h=100&q=80`} alt="" /></span>
            <span>{category.name}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}
