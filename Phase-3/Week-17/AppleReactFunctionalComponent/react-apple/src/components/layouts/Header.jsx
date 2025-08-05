import React, { useState } from 'react';
import logo from "../../assets/images/icons/logo-sm.png";
import search from "../../assets/images/icons/search-icon-sm.png";
import cart from "../../assets/images/icons/cart-sm.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button 
              className="navbar-toggler navbar-toggler-right" 
              type="button" 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} alt="Apple Logo" />
            </a>

            <div 
              className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">iPhone</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">iPad</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">Watch</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">TV</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">Music</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">Support</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} alt="Search" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} alt="Cart" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
