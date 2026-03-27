import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        <h2 className="header-logo">SACHIN</h2>

        <nav className="header-nav">
          <a href="#ProjectsPage">Projects</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;