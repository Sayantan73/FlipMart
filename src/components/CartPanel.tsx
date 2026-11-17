import type { CartItem } from '../data/storefront'

type CartPanelProps = {
  items: CartItem[]
  onChangeQuantity: (name: string, change: number) => void
  onRemove: (name: string) => void
}

export default function CartPanel({ items, onChangeQuantity, onRemove }: CartPanelProps) {
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)
  const subtotal = items.reduce((total, item) => {
    const price = Number(item.product.price.replace(/[^0-9.]/g, ''))
    return total + price * item.quantity
  }, 0)

  return (
    <section className="cart-panel" role="dialog" aria-label="Shopping cart">
      <div className="cart-panel-heading"><strong>Your bag</strong><span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span></div>
      {items.length === 0 ? (
        <p className="cart-empty">Your bag is waiting for something lovely.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(({ product, quantity }) => (
              <article className="cart-item" key={product.name}>
                <img src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=120&h=140&q=80`} alt="" />
                <div className="cart-item-info">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button onClick={() => onChangeQuantity(product.name, -1)} aria-label={`Decrease ${product.name} quantity`}>−</button>
                      <span>{quantity}</span>
                      <button onClick={() => onChangeQuantity(product.name, 1)} aria-label={`Increase ${product.name} quantity`}>+</button>
                    </div>
                    <button className="remove-item" onClick={() => onRemove(product.name)}>Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="cart-subtotal"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
          <button className="checkout-button" onClick={() => alert('Checkout is coming soon!')}>Continue to checkout</button>
        </>
      )}
    </section>
  )
}
