import { useEffect, useState } from "react";
import { business, products, reviews } from "./data/business";

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const paths = {
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    chevronLeft: <path d="m15 18-6-6 6-6"/>,
    chevronRight: <path d="m9 18 6-6-6-6"/>,
    facebook: <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>,
    check: <path d="m5 12 4 4L19 6"/>
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <img   src={`${import.meta.env.BASE_URL}images/logo.jfif`} alt="Watalappan & Co." />
          <span>Watalappan <small>&amp; Co.</small></span>
        </button>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("products")}>Menu</button>
          <button onClick={() => goTo("about")}>About</button>
          <button onClick={() => goTo("reviews")}>Reviews</button>
          <button className="nav-cta" onClick={() => goTo("contact")}>Order Now</button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const scrollToProducts = () =>
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-pattern" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">HOMEMADE • FRESH • MADE WITH LOVE</p>
          <h1>Authentic Sri Lankan <span>Watalappan</span> made for sweet moments.</h1>
          <p className="hero-text">
            Creamy, rich and gently spiced, our watalappan is made to bring
            the comforting taste of a Sri Lankan favourite to your table.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={scrollToProducts}>
              Explore Our Menu <Icon name="arrow" size={19} />
            </button>
            <a className="secondary-button" href={business.whatsappLink} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
          </div>
          <div className="hero-points">
            <span><Icon name="check" size={17} /> Homemade</span>
            <span><Icon name="check" size={17} /> Rich &amp; creamy</span>
            <span><Icon name="check" size={17} /> Perfect for sharing</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="logo-orbit">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-logo-card">
              <img   src={`${import.meta.env.BASE_URL}images/logo.jfif`} alt="Watalappan & Co."/>
            </div>
          </div>
          <div className="floating-card floating-card-top">
            <span>400g</span>
            <strong>Watalappan</strong>
          </div>
          <div className="floating-card floating-card-bottom">
            <span>Family size</span>
            <strong>1kg</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className={product.name === "Watalappan" ? "product-visual watalappan" : "product-visual caramel"}>
        <div className="dessert-plate">
          <div className="dessert">
            <div className="dessert-top" />
            <div className="dessert-shine" />
          </div>
          <div className="caramel-sauce" />
        </div>
        <span className="size-badge">{product.size}</span>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="price">{product.price}</span>
        </div>
        <p>{product.description}</p>
        <a className="order-link" href={business.whatsappLink} target="_blank" rel="noreferrer">
          Order this <Icon name="arrow" size={17} />
        </a>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">OUR MENU</p>
          <h2>Sweetness worth sharing.</h2>
          <p>Choose your favourite and message us to place an order.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => <ProductCard key={`${product.name}-${product.size}-${index}`} product={product} />)}
        </div>

        <div className="order-note">
          <div>
            <strong>Planning a party or special event?</strong>
            <span>Ask us about larger orders and availability.</span>
          </div>
          <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="primary-button">
            WhatsApp Us <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <div className="about-image-card">
            <img   src={`${import.meta.env.BASE_URL}images/logo.jfif`} alt="Watalappan & Co."/>
          </div>
          <div className="about-stamp">Made<br />with<br />love</div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT US</p>
          <h2>A Sri Lankan classic, made with care.</h2>
          <p>
            Watalappan &amp; Co. is all about sharing a beloved Sri Lankan dessert
            with family, friends and anyone who loves a good sweet treat.
          </p>
          <p>
            We focus on the creamy texture, warm spices and rich caramelised
            sweetness that make watalappan special. Our caramel puddings add
            another smooth and delicious option to the menu.
          </p>
          <div className="about-features">
            <div><span>01</span><strong>Freshly prepared</strong><small>Made with care for every order.</small></div>
            <div><span>02</span><strong>Great for sharing</strong><small>Ideal for family occasions and celebrations.</small></div>
            <div><span>03</span><strong>Simple ordering</strong><small>Message us directly through WhatsApp.</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const previous = () => setActive((active - 1 + reviews.length) % reviews.length);
  const next = () => setActive((active + 1) % reviews.length);

  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">CUSTOMER LOVE</p>
          <h2>What our customers say.</h2>
          <p>Add screenshots of your real Facebook or WhatsApp reviews here.</p>
        </div>

        <div className="review-carousel">
          <button className="carousel-button left" onClick={previous} aria-label="Previous review">
            <Icon name="chevronLeft" />
          </button>

          <div className="review-window">
            {reviews.map((review, index) => (
              <div
                key={review.image}
                className={`review-slide ${index === active ? "active" : ""}`}
                aria-hidden={index !== active}
              >
                <div className="review-photo">
                  <img src={review.image} alt={`${review.name} screenshot`} />
                </div>
                <div className="review-caption">
                  <span className="stars">★★★★★</span>
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button right" onClick={next} aria-label="Next review">
            <Icon name="chevronRight" />
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="social-section">
      <div className="container social-card">
        <div>
          <p className="eyebrow">FOLLOW ALONG</p>
          <h2>See more from Watalappan &amp; Co.</h2>
          <p>Follow our Facebook page for new updates, customer reviews and availability.</p>
        </div>
        <a href={business.facebook} target="_blank" rel="noreferrer" className="facebook-button">
          <Icon name="facebook" size={20} /> Visit Facebook Page
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Ready for something sweet?</h2>
          <p className="contact-lead">
            Send us a message with what you would like, the quantity and your preferred date.
          </p>
          <div className="contact-list">
            <a href={business.whatsappLink} target="_blank" rel="noreferrer">
              <span className="contact-icon">W</span>
              <div><small>WhatsApp</small><strong>{business.whatsappDisplay}</strong></div>
            </a>
            <a href={business.phoneLink}>
              <span className="contact-icon"><Icon name="phone" size={20} /></span>
              <div><small>Call us</small><strong>{business.phoneDisplay}</strong></div>
            </a>
            <a href={`mailto:${business.email}`}>
              <span className="contact-icon"><Icon name="mail" size={20} /></span>
              <div><small>Email</small><strong>{business.email}</strong></div>
            </a>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-box-logo">
            <img   src={`${import.meta.env.BASE_URL}images/logo.jfif`} alt="Watalappan & Co." />
            
          </div>
          <h3>Place your order</h3>
          <p>For the quickest response, message us on WhatsApp.</p>
          <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="primary-button full">
            Start a WhatsApp Chat <Icon name="arrow" size={18} />
          </a>
          <span className="contact-small">Please confirm availability before placing large or event orders.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img  src={`${import.meta.env.BASE_URL}images/logo.jfif`} alt="Watalappan & Co." />
          <div>
            <strong>Watalappan &amp; Co.</strong>
            <span>A little taste of Sri Lankan sweetness.</span>
          </div>
        </div>
        <div className="footer-socials">
          <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" size={19} /></a>
          <a href={business.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">W</a>
          <a href={`mailto:${business.email}`} aria-label="Email"><Icon name="mail" size={19} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Watalappan &amp; Co. All rights reserved.</span>
        <span>Made with <Icon name="heart" size={14} /> for dessert lovers.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Social />
        <Contact />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={business.whatsappLink} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp">
        W
      </a>
    </>
  );
}

export default App;