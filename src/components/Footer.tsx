export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#"><span className="brand-mark">f<span>.</span></span><span>flipmart</span></a>
          <p>A little more joy in the everyday.<br />Thoughtful finds, fair prices, happy you.</p>
          {/* <div className="social-links"><a href="#footer" aria-label="Instagram">ig</a><a href="#footer" aria-label="Pinterest">p</a><a href="#footer" aria-label="TikTok">tk</a></div> */}
        </div>
        <div className="footer-column"><strong>Explore</strong><a href="#products">New arrivals</a><a href="#products">Bestsellers</a><a href="#fashion">Clothing</a><a href="#products">Home & living</a></div>
        <div className="footer-column"><strong>Here to help</strong><a href="#footer">Contact us</a><a href="#footer">Shipping & returns</a><a href="#footer">FAQs</a><a href="#footer">Track your order</a></div>
        <div className="footer-column"><strong>The fine print</strong><a href="#footer">Our story</a><a href="#vendor-signup">Become a vendor</a><a href="#footer">Privacy policy</a><a href="#footer">Terms of service</a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Flipmart. Made for the everyday.</span>
        <span>Made with a little ✳ extra care</span>
        <div className="payment-types"><span>VISA</span><span>mastercard</span><span>PayPal</span></div>
      </div>
    </footer>
  )
}
