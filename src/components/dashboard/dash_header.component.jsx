/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintLogo from "assets/svg/paysprint_logo.svg";
import hamburgerIcon from "assets/svg/hamburger.svg";
import "../header/header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getConditionalClassName } from "utils/utils";
import { Link, NavLink } from "react-router-dom";

export const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleIsSubmenuOpen = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <nav className="mobile-nav">
        <img src={paysprintLogo} alt="" />
        <div className="buttons">
          <Link to="/signup">Create Account</Link>
          <button onClick={() => setIsMenuOpen(true)}>
            <img src={hamburgerIcon} alt="" />
          </button>
        </div>
        <div className={getConditionalClassName(isMenuOpen, "menu", "active")}>
          <button onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ul>
            <li>
              <a>Sign In</a>
            </li>
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <a>
                Services{" "}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
            </li>
            <ul
              className={getConditionalClassName(
                isSubMenuOpen,
                "submenu",
                "active"
              )}
            >
              <li>
                <a>Market Place</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>Search Country</a>
              </li>
              <li>
                <a>Product</a>
              </li>
            </ul>
            <li>
              <NavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
      <nav className="desktop-nav" style={{ background: '#fff' }}>
        <header className="main-header">
          {/* <a>
            <img src={paysprintLogo} alt="" />
          </a>
          <ul>
            <li>
              <NavLink to="/">Overview</NavLink>
            </li>
            <li>
              <a>
                Services{" "}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
              <ul
                className={getConditionalClassName(
                  isSubMenuOpen,
                  "submenu",
                  "active"
                )}
              >
                <li>
                  <a>Market Place</a>
                </li>
                <li>
                  <a>Business</a>
                </li>
                <li>
                  <a>Search Country</a>
                </li>
                <li>
                  <a>Product</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Create Account</Link>
          </div> */}

          <p>Just here</p>
        </header>
      </nav>
    </>
  );
};
