/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintLogo from "assets/svg/footer_logo.svg";
import paysprintNewLogo from "assets/ashopree/ashopree_logo-with_icon.png";
import fbIconWhite from "assets/svg/fb_icon_white.svg";
import igIconWhite from "assets/svg/ig_icon_white.svg";
import linkedinIconWhite from "assets/svg/linkedin_icon_white.svg";
import twitterIconWhite from "assets/svg/twitter_icon_white.svg";
import "./footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const EstoreFooter = () => {
  return (

    <footer>

        <div className="logoSection">
          <img src={paysprintNewLogo} alt="" />
        </div>

        <div className="allFooterDetails">
          <div className="singleFooterItems">
            <h5> About Us </h5>
            <ul>
              <li> <a href="#"> Referral Partner </a> </li>
              <li> <a href="#"> Affiliate Program </a> </li>
              <li> <a href="#"> Blog and Newsletter </a> </li>
              <li> <a href="#"> Gallery and Media </a> </li>
            </ul>
          </div>
          
          <div className="singleFooterItemsForProducts">
            <h5> Products </h5>
            <div>
              <ul>
                <li> <a href="/estore"> My Online Store </a> </li>
                <li> <a href="#"> My Store Front </a> </li>
                <li> <a href="#"> My Social Setting </a> </li>
                <li> <a href="#"> My Payment Hub </a> </li>
              </ul>
              <ul>
                <li> <a href="#"> My Digital Centre </a> </li>
                <li> <a href="#"> My Financing Partners </a> </li>
                <li> <a href="#"> Get Delivery Assist </a> </li>
                <li> <a href="#"> Get Super eStore </a> </li>
              </ul>
            </div>
          </div>

          <div className="singleFooterItems">
            <h5> Support </h5>
            <ul>
              <li> <a href="#"> Global Support </a> </li>
              <li> <a href="#"> Merchant Support </a> </li>
              <li> <a href="#"> Ashopree Community </a> </li>
            </ul>
          </div>

          <div className="singleFooterItems">
            <h5> Legal </h5>
            <ul>
              <li> <a href="#"> Terms </a> </li>
              <li> <a href="#"> Privacy Policy </a> </li>
            </ul>
          </div>

          <div className="singleFooterItems">
            <h5> Connect with us </h5>
            <ul>
              <li> <a href="/contact"> Contact Us </a> </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}> 
                <a href="#"> <img src={twitterIconWhite} alt="Twitte'sr Icon" /> </a> 
                <a href="#"> <img src={igIconWhite} alt="Instagram's Icon" /> </a> 
                <a href="#"> <img src={fbIconWhite} alt="Facebook's Icon" /> </a> 
                <a href="#"> <img src={linkedinIconWhite} alt="LinkedIn's Icon" /> </a> 
              </li>
            </ul>
          </div>
        </div>
    </footer>

    // <footer>
    //   <div className="container">
    //     <div className="footer-about">
    //       <img src={paysprintLogo} alt="paysprint logo" />
    //       <p>
    //         PaySprint is the fastest and most affordable way to send and receive
    //         money invoice, pay invoice and getting paid at anytime!
    //       </p>
    //       <div className="socials">
    //         <a>
    //           <img src={twitterIconWhite} alt="" />
    //         </a>
    //         <a>
    //           <img src={igIconWhite} alt="" />
    //         </a>
    //         <a>
    //           <img src={fbIconWhite} alt="" />
    //         </a>
    //         <a>
    //           <img src={linkedinIconWhite} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="wrapper">
    //       <div className="footer-about-wrapped">
    //         <img src={paysprintLogo} alt="paysprint logo" />
    //         <p>
    //           PaySprint is the fastest and most affordable way to send and
    //           receive money invoice, pay invoice and getting paid at anytime!
    //         </p>
    //         <div className="socials">
    //           <a>
    //             <img src={twitterIconWhite} alt="" />
    //           </a>
    //           <a>
    //             <img src={igIconWhite} alt="" />
    //           </a>
    //           <a>
    //             <img src={fbIconWhite} alt="" />
    //           </a>
    //           <a>
    //             <img src={linkedinIconWhite} alt="" />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="services">
    //         <h3>Services</h3>
    //         <ul>
    //           <li>
    //             <a>Money Transfer</a>
    //           </li>
    //           <li>
    //             <a>Pay Invoice</a>
    //           </li>
    //           <li>
    //             <a>Wallet</a>
    //           </li>
    //           <li>
    //             <a>CBP</a>
    //           </li>
    //           <li>
    //             <a>Merchant Cash Advance</a>
    //           </li>
    //           <li>
    //             <a>Invoicing System</a>
    //           </li>
    //           <li>
    //             <a>Market Place</a>
    //           </li>
    //           <li>
    //             <a>Receive Payment</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="company">
    //         <h3>Company</h3>
    //         <ul>
    //           <li>
    //             <Link to="/about">About Us</Link>
    //           </li>
    //           <li>
    //             <a>Blog</a>
    //           </li>
    //           <li>
    //             <Link to="/contact">Contact</Link>
    //           </li>
    //           <li>
    //             <a>Community Forum</a>
    //           </li>
    //           <li>
    //             <a>Investor's Relation</a>
    //           </li>
    //           <li>
    //             <a>Search Country</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="legal">
    //         <h3>Legal</h3>
    //         <ul>
    //           <li>
    //             <a>Terms</a>
    //           </li>
    //           <li>
    //             <a>Privacy Policy</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="bottom">
    //       <div className="location">
    //         <FontAwesomeIcon icon={faLocationDot} />
    //         <em>
    //           PaySprint International, 10 George St. North, Brampton. ON.
    //           L6X1R2. Canada
    //         </em>
    //       </div>
    //       <a href="mailto:support@paysprint.zohodesk.com">
    //         <FontAwesomeIcon icon={faEnvelope} />
    //         <em>support@paysprint.zohodesk.com</em>
    //       </a>
    //       <div className="fin">
    //         <div className="fin-1">
    //           <FontAwesomeIcon icon={faThumbTack} />
    //           <em>Canada: FINTRAC Reg No: M21469983</em>
    //         </div>
    //         <div className="fin-2">
    //           <FontAwesomeIcon icon={faThumbTack} />
    //           <em>USA: FINCEN Reg No: 31000189515339</em>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="copy">
    //       <em>© 2019 - 2023 Copyright, All Right Reserved</em>
    //     </div>
    //   </div>
    // </footer>
  );
};

