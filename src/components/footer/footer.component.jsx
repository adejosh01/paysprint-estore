/* eslint-disable jsx-a11y/anchor-is-valid */
// import paysprintLogo from "assets/svg/footer_logo.svg";
import paysprintNewLogo from "assets/ashopree/ashopree_logo_with_icon.png";
// import paysprintNewLogo from "assets/ashopree/edited_ashopree_logo1.jpg";
import fbIconWhite from "assets/svg/fb_icon_white.svg";
import igIconWhite from "assets/svg/ig_icon_white.svg";
import linkedinIconWhite from "assets/svg/linkedin_icon_white.svg";
import twitterIconWhite from "assets/svg/twitter_icon_white.svg";
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
              <li> <a href="#"> Affiliate Program </a> </li>
              <li> <a href="#"> Blog and Newsletter </a> </li>
              <li> <a href="/gallery"> Gallery and Media </a> </li>
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

  );
};

