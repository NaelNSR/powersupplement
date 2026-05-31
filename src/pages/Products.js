function Products() {
  return (
    <div className="products-page">   {/* ← added className here */}
      <header>
        <nav>
          <h1>Power Supplements</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products" className="active">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="products-section">
        <h2>Our Products</h2>

        <div className="product-container">
          <div className="product-card">
            <img src="/images/WheyProtein.png" alt="Whey Protein" />
            <h3>Whey Protein</h3>
            <p className="price">$50</p>
          </div>

          <div className="product-card">
            <img src="/images/Creatine.png" alt="Creatine" />
            <h3>Creatine</h3>
            <p className="price">$30</p>
          </div>

          <div className="product-card">
            <img src="/images/PreWorkout.png" alt="Pre Workout" />
            <h3>Pre Workout</h3>
            <p className="price">$35</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;