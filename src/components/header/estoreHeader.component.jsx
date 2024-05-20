/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintNewLogo from "assets/updatedAshopree/edited_ashopree_header_logo.jpg";
import moblieLogo from "assets/updatedAshopree/moblie_logo.png";
import hamburgerIcon from "assets/svg/hamburger.svg";
import "./estoreHeader.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faCartShopping, faMessage, faSearch, faUser, faXmark, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getConditionalClassName, handleClick } from "utils/utils";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hook/AuthProvider";


export const EstoreHeader = ({title}) => {
  const auth = useAuth();

  // console.log(auth);

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

  const [categories, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';

  const [value, setValue] = useState(''); // State variable to hold the search query
  const navigate  = useNavigate();


  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`) 
    .then(response => {
      setData(response.data.data);
    })

    .catch(error => {
      console.error('Error fetching data:', error);
    });

  }, [apiUrl, title]);

  // console.log(categories);

  return (
    <>
      <nav className="mobile-nav">
        <img src={moblieLogo} alt="" style={{ width: '25%' }} />  {/* Instead  of width: 150px*/}
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
                {auth.token ? ( <> <a href="/myshoppings" style={{ top: 'unset' }}> My aShopree </a> {" "} </> ) : ( <> Categories {" "} </> )}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
            </li>
            <ul className={getConditionalClassName( isSubMenuOpen, "submenu", "active" )}>
                {categories.length !== 0 ? (
                    Array.isArray(categories) && categories.map((item, index) => (
                        <li key={index}>
                          <a href={`/allcategories?categoryname=${item.category}`} key={index}> {item.category} </a>
                        </li>
                    ))
                ) : (
                    !Array.isArray(categories) && <a href="#"> Sorry, an error occurred</a>
                )}

                {categories.length === 0 && !Array.isArray(categories) && (
                    <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading... </p>
                )}
            </ul>
            <li>
              <NavLink to="/onlinestore" onClick={() => setIsMenuOpen(false)}>
                Online Store
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Plan & Pricing
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
            { auth.token ? ( 
              <li className="guest-link">
                <Link onClick={() => auth.logOut()}> Logout </Link>
              </li>
            ) : ( <>
              <li className="guest-link">
                <Link to="/register"> Register with PaySprint </Link>
              </li>
              <li className="guest-link">
                <Link to="/login"> Login with PaySprint </Link>
              </li>
              <li className="guest-link">
                <Link to="/merchant-register"> Create Merchant Account </Link>
              </li>
            </>)}
          </ul>
        </div>
      </nav>
      
      <nav className="desktop-nav" style={{ background: '#4F0B92' }}>
        <header className="mainEstore-header">
          <Link to="/">
            <img src={paysprintNewLogo} alt="Company's Icon" style={{ width: '300px' }} />
          </Link>
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <a>
                {auth.token ? ( <> <a href="/myshoppings" style={{ top: 'unset' }}> My aShopree </a> {" "} </> ) : ( <> Categories {" "} </> )}
                <button onClick={toggleIsSubmenuOpen}>
                  <FontAwesomeIcon
                    icon={isSubMenuOpen ? faAngleUp : faAngleDown}
                  />
                </button>
              </a>
              <ul className={getConditionalClassName( isSubMenuOpen, "submenu", "active" )}>
                {categories.length !== 0 ? (
                    Array.isArray(categories) && categories.map((item, index) => (
                        <li key={index}>
                        
                        <a href={`/allcategories?categoryname=${item.category}`} key={index}> {item.category} </a>
                        </li>
                    ))
                ) : (
                    !Array.isArray(categories) && <a href="#"> Sorry, an error occurred</a>
                )}

                {categories.length === 0 && !Array.isArray(categories) && (
                    <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading... </p>
                )}
              </ul>
            </li>
            <li>
              <NavLink to="/pricing"> Pricing </NavLink>
            </li>
            <li>
              <NavLink to="/onlinestore">Online Store</NavLink>
            </li>
          </ul>

          <div className="lastside">

            <form action={`/search?${value}`}>
              <div className="searching">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" name="query" placeholder="Search for a product" value={value} onChange={e => setValue(e.target.value)} />
              </div>
            </form>

            { auth.token ? (
                <>
                  <Link to="/mycart">
                    {(pathname === "/mycart") ? (
                      <div style={{ background: '#fff' }}>
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#4F0B92' }} />
                      </div>
                    ) : (
                      <div>
                        {/* <img src={cart} alt="thecartlogo" /> */}
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
                      </div>
                    )}
                  </Link>

                  <Link to="/messages">
                    {(pathname === "/messages") ? (
                      <div style={{ background: '#fff' }}>
                        <FontAwesomeIcon icon={faMessage} style={{ color: '#4F0B92' }} />
                      </div>
                    ) : (
                      <div>
                        {/* <img src={msglogo} alt="themsglogo" /> */}
                        <FontAwesomeIcon icon={faMessage} style={{ color: 'white' }} />
                      </div>
                    )}
                  </Link>
                </>
              ) : null
            }

          { auth.token ? (<>
              <div className="acctstuffs" > 
              {/* <img src={user} alt="theuserlogo" /> */}
                <FontAwesomeIcon icon={faUser} style={{ color: '#fff' }} />
                <p style={{ fontSize: '1.5rem', color: '#fff' }} onClick={toggleAccountMenu}> Account {" "} </p>
                <span style={{  marginLeft: '0.2rem' }} onClick={toggleAccountMenu}> 
                  <button> <FontAwesomeIcon icon={isAccountMenuOpen ? faAngleUp : faAngleDown} style={{ color: '#fff' }} /> </button>
                </span>

                
                <ul className={getConditionalClassName(isAccountMenuOpen, "account", "active")}>
                    <li className="guest-link">
                      <Link onClick={() => auth.logOut()}> Logout </Link>
                    </li>
                </ul>
              </div>
          </>) : (<>
                <div className="acctStuffs"> 
                  <button style={{ fontSize: '1.5rem', color: '#fff' }} onClick={ () => handleClick('/get-started', navigate) }> Get Started </button>

                  {/* <ul className={getConditionalClassName(isAccountMenuOpen, "account", "active")}>
                    <li className="guest-link">
                      <p> Please Login or <a href="/get-started"> Click here </a> to get started </p>
                    </li>
                  </ul> */}
                </div>
            </>
          )}

          </div>
        </header>
      </nav>
    </>
  );
};
