import { useState } from 'react'
import BenefitRow from '../components/BenefitRow'
import CollectionBanner from '../components/CollectionBanner'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import MensFashionFeature from '../components/MensFashionFeature'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import PremiumProducts from '../components/PremiumProducts'
import ProductSection from '../components/ProductSection'
import PromoNote from '../components/PromoNote'
import SearchResults from '../components/SearchResults'
import VendorSection from '../components/VendorSection'
import type { CartItem, Product } from '../data/storefront'
import { outfits, searchableProducts } from '../data/storefront'

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [searchText, setSearchText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function addToCart(product: Product) {
    setCartItems((items) => {
      const currentItem = items.find((item) => item.product.name === product.name)
      if (currentItem) {
        return items.map((item) => item.product.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...items, { product, quantity: 1 }]
    })
  }

  function changeCartQuantity(name: string, change: number) {
    setCartItems((items) => items
      .map((item) => item.product.name === name ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0))
  }

  function removeCartItem(name: string) {
    setCartItems((items) => items.filter((item) => item.product.name !== name))
  }

  const normalizedQuery = searchQuery.toLocaleLowerCase()
  const searchResults = searchableProducts.filter((product) =>
    product.name.toLocaleLowerCase().includes(normalizedQuery) ||
    product.category?.toLocaleLowerCase().includes(normalizedQuery),
  )

  return (
    <>
      <Navbar
        cartItems={cartItems}
        searchQuery={searchText}
        onSearchChange={setSearchText}
        onSearch={setSearchQuery}
        onChangeCartQuantity={changeCartQuantity}
        onRemoveCartItem={removeCartItem}
      />
      <main className="page-shell">
        <PromoNote />
        <HeroSlider />
        <BenefitRow />
        {searchQuery ? (
          <SearchResults
            query={searchQuery}
            products={searchResults}
            onAddToCart={addToCart}
            onClear={() => { setSearchText(''); setSearchQuery('') }}
          />
        ) : (
          <>
            <PremiumProducts onAddToCart={addToCart} />
            <CollectionBanner />
            <ProductSection id="fashion" title="Clothing and Girls Collections" link="Explore fashion" products={outfits} onAddToCart={addToCart} className="fashion-section" gridClassName="fashion-grid" />
            <MensFashionFeature onAddToCart={addToCart} />
          </>
        )}
        <VendorSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
