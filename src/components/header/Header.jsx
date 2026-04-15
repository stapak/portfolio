import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        
        <a href="#ProfilePage" className="no-decoration">
        <h2 className="header-logo">SACHIN</h2>
        </a>

        <nav className="header-nav">
          <a href="#UtilitiesPage">Utility-Prototypes</a>
        </nav>

        <nav className="header-nav">
          <a href="#ProjectsPage">Projects</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;