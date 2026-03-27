import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} stapak. Built with React.
        </p>

        <div className="footer-links">
          <a href="#"></a>
          <a href="#"></a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;