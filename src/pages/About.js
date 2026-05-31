function About() {
  return (
    <div>
      <header>
        <nav>
          <h1>Power Supplements</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about" className="active">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="about-hero">
        <h1>About Us</h1>
        <p>Fuel your strength. Build your discipline. Become stronger every day.</p>
      </section>

      <section className="about-content">
        <div className="box">
          <h2>Who We Are</h2>
          <p>
            Power Supplements is a fitness-focused store dedicated to helping athletes,
            gym lovers, and beginners reach their full potential. We provide high-quality
            supplements that support muscle growth, recovery, and performance.
          </p>
        </div>

        <div className="box">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to make fitness supplements accessible, affordable,
            and trustworthy for everyone who wants to improve their lifestyle.
          </p>
        </div>

        <div className="box">
          <h2>Why Choose Us?</h2>
          <p>
            ✔ Premium quality products<br />
            ✔ Trusted brands<br />
            ✔ Fast delivery<br />
            ✔ Gym-focused support
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;