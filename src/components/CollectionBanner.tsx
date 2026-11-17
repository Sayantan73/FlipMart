import ArrowIcon from './ArrowIcon'

export default function CollectionBanner() {
  return (
    <section className="collection-banner">
      <div className="collection-photo"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&h=820&q=85" alt="A collection of colorful spring outfits" loading="lazy" /></div>
      <div className="collection-copy">
        <span className="section-kicker">A NEW SEASON, A NEW YOU</span>
        <h2>Wear what<br /><em>moves you.</em></h2>
        <p>Easy pieces. Interesting details. A wardrobe that feels like you, only on a really good day.</p>
        <a className="text-link" href="#fashion">Explore the collection <ArrowIcon /></a>
        <span className="collection-flower">✳</span>
      </div>
    </section>
  )
}
