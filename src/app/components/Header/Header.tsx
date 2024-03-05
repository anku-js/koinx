import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.jpg" className="company-logo" width="96" height="72"/>
        </div>
        <div className="navigation">
          <div className="nav-links">
            <a href="#">Crypto Taxes</a>
            <a href="#">Free Tools</a>
            <a href="#">Resource Center</a>
          </div>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}
