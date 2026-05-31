function Home() {
  return (
    <div>
      <header>
        <nav>
          <h1>Power Supplements</h1>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Fuel Your Strength</h2>
          <p>Premium supplements for better performance and recovery.</p>
          <a href="/products" className="btn">Shop Now</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Power Supplements. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;