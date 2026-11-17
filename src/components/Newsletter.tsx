import { useState } from 'react'
import ArrowIcon from './ArrowIcon'

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section className="newsletter">
      <div>
        <span className="section-kicker">THE FLIPMART LETTER</span>
        <h2>Good things, in your inbox.</h2>
        <p>Fresh finds, thoughtful edits, and a little treat for your first order.</p>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}>
        <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
        <input id="newsletter-email" type="email" placeholder="Your email address" required disabled={subscribed} />
        <button type="submit" disabled={subscribed}>{subscribed ? "You're on the list!" : 'Count me in'} {!subscribed && <ArrowIcon />}</button>
      </form>
      <span className="newsletter-sparkle">✳</span>
    </section>
  )
}
