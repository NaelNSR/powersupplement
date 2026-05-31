function Contact() {
  return (
    <div>
      <header>
        <nav>
          <h1>Power Supplements</h1>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact" className="active">Contact</a></li>
          </ul>
        </nav>
      </header>

      <h2 className="page-title">Contact Us</h2>

      <div className="text-box">
        <p>Email: support@powersupplements.com</p>
        <p>Phone: +961 XXX XXX</p>
        <p>Location: Lebanon</p>
      </div>
    </div>
  );
}

export default Contact;