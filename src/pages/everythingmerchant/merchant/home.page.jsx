import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

import { RatesMarquee } from "components/rates-marquee/rates_marquee";
import "./merchanthome.styles.scss";

import iphoneHome from "assets/images/iphone_home.png";
import companyFeatures from "assets/images/company_features.png";
import mobileApp from "assets/images/mobile_app.png";
import howBox1 from "assets/svg/how_box_1.svg";
import howBox2 from "assets/svg/how_box_2.svg";
import howBox3 from "assets/svg/how_box_3.svg";
import googlePlayIcon from "assets/svg/google_play_icon.svg";
import appleIcon from "assets/svg/apple_icon.svg";
import { welcome } from "components/usefulJsScripts/swalMessages";
import star from "assets/images/star.png";
import cardImage from "assets/images/merchant/longCardDetails.png";
import count1 from "assets/images/merchant/count1.png";
import count2 from "assets/images/merchant/count2.png";
import firstConnect from "assets/images/merchant/connect_img.png";
import secondConnect from "assets/images/merchant/connect_img2.png";
import thirdConnect from "assets/images/merchant/connect_img3.png";
import qrCode from "assets/images/merchant/ways2Receive.png";



export const MerchantHomePage = ({ title }) => {

  return (
    <div className="home-container">

      <RatesMarquee /> 

      <section className="hero">
        <div className="left">
          <h1>
            Experience Safe and Secure Transactions with <span>Ease</span>
          </h1>
          <p>
            Unlocking safe, secure, and seamless international transactions for
            a global economy.
          </p>
          <div className="buttons">
            <button>
              Get Started <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button>
              How Paysprint works <FontAwesomeIcon icon={faCirclePlay} />
            </button>
          </div>
        </div>
        <div className="right">
          <img src={iphoneHome} alt="mobile app view of paysprint" />
          <div className="text">
            <h3>Send and receive money from over 100 countries</h3>
            <p>No hidden fees</p>
          </div>
        </div>
        <button type="button" onClick={() => { welcome() }}>
          How Paysprint works <FontAwesomeIcon icon={faCirclePlay} />
        </button>
      </section>

      <section className="impact">
        <h3>Our Impact</h3>
        <div className="wrapper">
          <div className="impact-item">
            <h3>99%</h3>
            <em>Uptime</em>
          </div>
          <div className="impact-item">
            <h3>+148k</h3>
            <em>Transaction Value</em>
          </div>
          <div className="impact-item">
            <h3>+70</h3>
            <em>Number of Days</em>
          </div>
        </div>
      </section>

      <section className="how">
        <h3>How does it work?</h3>
        <em>We've Made PaySprint Simple and Easy for you.</em>
        <div className="content">
          <div className="box">
            <img src={howBox1} alt="getting started with paysprint" />
            <h5>Get started</h5>
            <em>Log in / Sign up for free.</em>
          </div>
          <div className="box">
            <img src={howBox2} alt="adding money to your paysprint walley" />
            <h5>Add money to wallet</h5>
            <em>We've prepared your wallet for you to add money.</em>
          </div>
          <div className="box">
            <img src={howBox3} alt="sending money with paysprint" />
            <h5>Send money</h5>
            <em>Send money, anytime, anywhere, for free!</em>
          </div>
        </div>
      </section>

      <section className="easyWays">
        <h3>
          Easy Ways to Receive Payments with <span>No fees</span>
        </h3>

        <div className="nextStuff">
            <img src={qrCode} alt="QR code" />

            <div className="imageDescription">
              <p> 1 </p> 
              <div className="afterImageDes">
              <span> QR Code</span>
              </div>
              <p> Display QR Code for Customers to scan and make payments with Debit/Credit Card or PaySprint Wallet. </p>

            </div>
        </div>
      </section>

      <section className="connect">
        <h3>
          Connect your bank account to have your payments <span>deposited directly</span>
        </h3>

         <div className="boxes">
          <div className="testimonial">
              <img src={firstConnect} alt="theConnectionImage1" />
              <p> Economise Payment Processing </p>
              <div className="name">
                Save up to 90% of the cost of accepting customer payments through swift and no-hassle transactions.
              </div>
          </div>

          <div className="testimonial">
              <img src={secondConnect} alt="theConnectionImage2" />
              <p> Improve cash </p>
              <div className="name">
                Accept payments from customers at no extra cost on any mobile device, online, or on your website.
              </div>
          </div>

          <div className="testimonial">
              <img src={thirdConnect} alt="theConnectionImage3" />
              <p> Drive more traffic</p>
              <div className="name">
                Use PaySprint Market Place to drive more customers to your business at no extra cost.
              </div>
          </div>
        </div>

      </section>

      <section className="e-commerce">
        <div className="boxes">

          <div className="box">
            <h3> E-commerce <span>solution</span> </h3>
            <p>
              Enable yourself to sell more online with easy-to-set-up tools and easy-to-use content management features.
            </p>
            <div className="buttons">
              <button>
                Learn more
              </button>
            </div>
          </div>

          <div className="box">
            <div className="imageDiv">
              <img src={count1} alt="currency and dummy figures" />
              <img src={count2} alt="currency and dummy figures" />
            </div>
          </div>
        </div>
      </section>

      <section className="cardImages">
          <img src={cardImage} alt="cardImage" />
      </section>

      <section className="testimonials">
        <div className="boxes">
          <div className="testimonial">
            <p>
                PaySprint is easy and inexpensive to use. I love the app.
            </p>
            <div className="name">
              <em>Taiwo A.</em>
              <div className="tests">Auditor, Accounting</div>
            </div>
            <div style={{ display: 'flex' }}>
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
            </div>
          </div>
          <div className="testimonial">
            <p>
                Great to work with, I really like invoicing, and easy to use app.
            </p>
            <div className="name">
              <em>Tara W.</em>
              <div className="tests">Real Estate</div>
            </div>
            <div style={{ display: 'flex' }}>
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
            </div>
          </div>
          <div className="testimonial">
            <p>
                Just getting started, but love it so far, Easy to use! I find PaySprint to be very competitive.
            </p>
            <div className="name">
              <em>Chantae T.</em>
              <div className="tests">Owner</div>
            </div>
            <div style={{ display: 'flex' }}>
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
                <img src={star} alt="a star icon" /><img src={star} alt="a star icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <h3>As featured on</h3>
        <img
          src={companyFeatures}
          alt="companies that have featured paysprint in their articles"
        />
      </section> 

      <section className="app">
        <div className="wrapper">
          <h3>
            <span>Experience</span>
            <span> hassle-free transactions</span>
            <span> with our mobile app </span>
          </h3>
          <a href="paysprint.cA">Learn more</a>
          <div className="buttons">
            <a href="https://play.google.com/store/apps/details?id=com.fursee.damilare.sprint_mobile">
              <img src={googlePlayIcon} alt="" />
              <span>Google Play</span>
            </a>
            <a href="https://apps.apple.com/gb/app/paysprint/id1567742130">
              <img src={appleIcon} alt="" />
              <span>App Store</span>
            </a>
          </div>
        </div>
        <img src={mobileApp} alt="paysprint's mobile app" />
      </section>


    </div>
  );
};
 

