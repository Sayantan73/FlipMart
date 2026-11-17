import type { Product } from '../data/storefront'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

type ProductSectionProps = {
  id: string
  title: string
  link: string
  products: Product[]
  onAddToCart: (product: Product) => void
  className?: string
  gridClassName?: string
}

export default function ProductSection({ id, title, link, products, onAddToCart, className = '', gridClassName = '' }: ProductSectionProps) {
  return (
    <section className={`product-section ${className}`} id={id}>
      <SectionHeading title={title} link={link} href={`#${id}`} />
      <div className={`product-grid ${gridClassName}`}>
        {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} onAddToCart={onAddToCart} />)}
      </div>
    </section>
  )
}
