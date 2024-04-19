/* eslint-disable jsx-a11y/anchor-is-valid */
import paysprintNewLogo from "assets/updatedAshopree/footer_logo.png";
import fbIconWhite from "assets/svg/fb_icon_white.svg";
import igIconWhite from "assets/svg/ig_icon_white.svg";
import linkedinIconWhite from "assets/svg/linkedin_icon_white.svg";
import twitterIconWhite from "assets/icons/twitterNewIcon.png";
// import twitterIconWhite from "assets/svg/twitter_icon_white.svg";
import "./footer.styles.scss";

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
              <li> <a href="referral-partner"> Referral Partner </a> </li>
              <li> <a href="/contact"> Affiliate Program </a> </li>
              <li> <a href="https://paysprint.ca/blog"> Blog and Newsletter </a> </li>
              <li> <a href="#" style={{ cursor: 'not-allowed' }} title="This Feature Coming Soon"> Gallery and Media </a> </li>
            </ul>
          </div>
          
          <div className="singleFooterItemsForProducts">
            <h5> Products </h5>
            <div>
              <ul>
                <li> <a href="/onlinestore"> My Online Store </a> </li>
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
              <li> <a href="/contact"> Global Support </a> </li>
              <li> <a href="/askquestions"> Merchant Support </a> </li>
              <li> <a href="/community"> aShopree Community </a> </li>
              <li> <a href="#"> Create Merchant Account </a> </li>
            </ul>
          </div>

          <div className="singleFooterItems">
            <h5> Legal </h5>
            <ul>
              <li> <a href="/terms-of-use"> Terms </a> </li>
              <li> <a href="#"> Privacy Policy </a> </li>
            </ul>
          </div>

          <div className="singleFooterItems">
            <h5> Connect with us </h5>
            <ul>
              <li> <a href="/contact"> Contact Us </a> </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}> 
                <a href="https://twitter.com/ashopree"> <img src={twitterIconWhite} alt="Twitte'sr Icon" /> </a> 
                <a href="https://www.instagram.com/ashopree"> <img src={igIconWhite} alt="Instagram's Icon" /> </a> 
                <a href="#"> <img src={fbIconWhite} alt="Facebook's Icon" /> </a> 
                <a href="#"> <img src={linkedinIconWhite} alt="LinkedIn's Icon" /> </a> 
              </li>
            </ul>
          </div>
        </div>
    </footer>

  );
};

