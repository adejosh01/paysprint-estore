/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintLogo from "assets/svg/footer_logo.svg";
import fbIconWhite from "assets/svg/fb_icon_white.svg";
import igIconWhite from "assets/svg/ig_icon_white.svg";
import linkedinIconWhite from "assets/svg/linkedin_icon_white.svg";
import twitterIconWhite from "assets/svg/twitter_icon_white.svg";
import "./footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-about">
          <img src={paysprintLogo} alt="paysprint logo" />
          <p>
            PaySprint is the fastest and most affordable way to send and receive
            money invoice, pay invoice and getting paid at anytime!
          </p>
          <div className="socials">
            <a>
              <img src={twitterIconWhite} alt="" />
            </a>
            <a>
              <img src={igIconWhite} alt="" />
            </a>
            <a>
              <img src={fbIconWhite} alt="" />
            </a>
            <a>
              <img src={linkedinIconWhite} alt="" />
            </a>
          </div>
        </div>
        <div className="wrapper">
          <div className="footer-about-wrapped">
            <img src={paysprintLogo} alt="paysprint logo" />
            <p>
              PaySprint is the fastest and most affordable way to send and
              receive money invoice, pay invoice and getting paid at anytime!
            </p>
            <div className="socials">
              <a>
                <img src={twitterIconWhite} alt="" />
              </a>
              <a>
                <img src={igIconWhite} alt="" />
              </a>
              <a>
                <img src={fbIconWhite} alt="" />
              </a>
              <a>
                <img src={linkedinIconWhite} alt="" />
              </a>
            </div>
          </div>
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li>
                <a>Money Transfer</a>
              </li>
              <li>
                <a>Pay Invoice</a>
              </li>
              <li>
                <a>Wallet</a>
              </li>
              <li>
                <a>CBP</a>
              </li>
              <li>
                <a>Merchant Cash Advance</a>
              </li>
              <li>
                <a>Invoicing System</a>
              </li>
              <li>
                <a>Market Place</a>
              </li>
              <li>
                <a>Receive Payment</a>
              </li>
            </ul>
          </div>
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a>Community Forum</a>
              </li>
              <li>
                <a>Investor's Relation</a>
              </li>
              <li>
                <a>Search Country</a>
              </li>
            </ul>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>
                <a>Terms</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <em>
              PaySprint International, 10 George St. North, Brampton. ON.
              L6X1R2. Canada
            </em>
          </div>
          <a href="mailto:support@paysprint.zohodesk.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <em>support@paysprint.zohodesk.com</em>
          </a>
          <div className="fin">
            <div className="fin-1">
              <FontAwesomeIcon icon={faThumbTack} />
              <em>Canada: FINTRAC Reg No: M21469983</em>
            </div>
            <div className="fin-2">
              <FontAwesomeIcon icon={faThumbTack} />
              <em>USA: FINCEN Reg No: 31000189515339</em>
            </div>
          </div>
        </div>

        <div className="copy">
          <em>© 2019 - 2023 Copyright, All Right Reserved</em>
        </div>
      </div>
    </footer>
  );
};
