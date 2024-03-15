/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintLogo from "assets/svg/paysprint_logo.svg";
import hamburgerIcon from "assets/svg/hamburger.svg";
import "./estoreHeader.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getConditionalClassName } from "utils/utils";
import { Link, NavLink } from "react-router-dom";
import cart from 'assets/images/cart.png';
import msglogo from 'assets/images/message-circle.png';
import user from 'assets/images/userIcon.png';
import search from 'assets/images/searchIcon.png';
import { useLocation } from "react-router-dom";
import passwordIcon from 'assets/icons/profile/passwordIcon.png';
import clip from 'assets/icons/profile/clipboard.png';
import share from 'assets/icons/profile/share.png';
import tag from 'assets/icons/profile/tag.png';
import logout from 'assets/icons/profile/logout.png';
import profileIcon from 'assets/icons/profile/profileIcon.png';



export const EstoreHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAcctMenuOpen] = useState(false);

  const toggleIsSubmenuOpen = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleAccountMenu = () => {
    setIsAcctMenuOpen(!isAccountMenuOpen);
  };

  const location = useLocation();
  const pathname = location.pathname;

  // console.log(pathname);

  return (
    <>
      <nav className="mobile-nav">
        <img src={paysprintLogo} alt="" />
        <div className="buttons">
          <Link to="/"> Home </Link>
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
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <a>
                Categories{" "}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
            </li>
            <ul className={getConditionalClassName( isSubMenuOpen, "submenu", "active" )}>
                <li>
                  <a>Accounting(18)</a>
                </li>
                <li>
                  <a>Art & Craft(10)</a>
                </li>
                <li>
                  <a>Automotive(23)</a>
                </li>
                <li>
                  <a> Chemicals(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Others(18) </a>
                </li>
            </ul>
            <li>
              <NavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>
                E-store
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
        <header className="mainEstore-header">
          <Link to="/">
            <img src={paysprintLogo} alt="Company's Icon" />
          </Link>
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <a>
                Categories{" "}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
              <ul className={getConditionalClassName( isSubMenuOpen, "submenu", "active" )}>
                <li>
                  <a>Accounting(18)</a>
                </li>
                <li>
                  <a>Art & Craft(10)</a>
                </li>
                <li>
                  <a>Automotive(23)</a>
                </li>
                <li>
                  <a> Chemicals(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Accounting(18) </a>
                </li>
                <li>
                  <a> Others(18) </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/estore">Online Store</NavLink>
            </li>
          </ul>

          <div className="lastside">

            <form action="/" method="POST">
              <div className="searching">
                <img src={search} alt="thesearch" />
                <input type="" placeholder="Search for a product" />
              </div>
            </form>

            <Link to="/mycart">
              { (pathname === "/mycart") ? (
                <div style={{ background: '#e7aa07' }}> 
                    <img src={cart} alt="thecartlogo" />
                </div>
              ) : (
                <div> 
                    <img src={cart} alt="thecartlogo" />
                </div>
              )}
            </Link>

            <Link to="/messages">
              { (pathname === "/messages") ? (
                <div style={{ background: '#e7aa07' }}> 
                    <img src={msglogo} alt="themsglogo" />
                </div>
              ) : (
                <div> 
                  <img src={msglogo} alt="themsglogo" />
                </div>
              )}
            </Link>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}> 
              <img src={user} alt="theuserlogo" />
                <p style={{ fontSize: '1.5rem', color: '#272343' }} onClick={toggleAccountMenu}> Account {" "} </p>
                <span style={{  marginLeft: '0.2rem' }} onClick={toggleAccountMenu}> 
                  <button> <FontAwesomeIcon icon={isAccountMenuOpen ? faAngleUp : faAngleDown} /> </button>
                </span>
                <ul className={getConditionalClassName( isAccountMenuOpen, "account", "active" )}>
                  <li>
                    <img src={passwordIcon} alt="User Icon" />
                    <Link to="#" > PS Account No: 20983 </Link>
                    <img src={clip} alt="Clipboard Icon" />
                  </li>
                  <li>
                    <img src={profileIcon} alt="User Icon" />
                    <Link to="#"> Profile </Link>
                  </li>
                  <li style={{ width: '70%' }}>
                    <img src={share} alt="User Icon" />
                    <Link to="#"> Share profile link </Link>
                  </li>
                  <li style={{ width: '24.4rem' }}>
                    <img src={tag} alt="User Icon" />
                    <Link to="#"> Check out Special Promo </Link>
                  </li>
                  <li>
                    <img src={logout} alt="User Icon" />
                    <Link to="#"> Log Out </Link>
                  </li>
                </ul>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};
