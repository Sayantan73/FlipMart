import { useEffect, useState } from 'react'
import { slides } from '../data/storefront'
import ArrowIcon from './ArrowIcon'

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500)
    return () => window.clearInterval(timer)
  }, [])

  const slide = slides[active]

  return (
    <section className={`hero-slider hero-${slide.color}`} aria-label="Featured collections">
      <div className="hero-copy" key={`copy-${active}`}>
        <span className="hero-eyebrow"><span />{slide.eyebrow}</span>
        <h1>{slide.title}<br /><em>{slide.emphasis}</em></h1>
        <p>{slide.copy}</p>
        <a className="hero-cta" href="#products">{slide.button}<ArrowIcon /></a>
        <div className="hero-controls">
          <button onClick={() => setActive((active + slides.length - 1) % slides.length)} aria-label="Previous slide"><ArrowIcon direction="left" /></button>
          <div className="slide-dots">{slides.map((item, index) => <button key={item.eyebrow} className={active === index ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
          <button onClick={() => setActive((active + 1) % slides.length)} aria-label="Next slide"><ArrowIcon /></button>
        </div>
      </div>
      <div className="hero-art" key={`art-${active}`}>
        <div className="hero-image-wrap"><img src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=1300&h=920&q=90`} alt="Featured collection" /></div>
        <div className="hero-image-note"><span>THE NEW</span><strong>IT BAG</strong><small>SPRING / SUMMER 26</small></div>
        <span className="hero-sparkle sparkle-one">✳</span><span className="hero-sparkle sparkle-two">✳</span>
      </div>
      <div className="hero-index"><strong>0{active + 1}</strong><span />0{slides.length}</div>
    </section>
  )
}
