import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCirclePlay,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { RatesMarquee } from "components/rates-marquee/rates_marquee";
import { getConditionalClassName } from "utils/utils";
import "./home.styles.scss";

import iphoneHome from "assets/images/iphone_home.png";
import companyFeatures from "assets/images/company_features.png";
import mobileApp from "assets/images/mobile_app.png";
// import transactionCountries from "assets/images/transaction_countries.png";
import featuresSvg from "assets/svg/features.svg";
import howBox1 from "assets/svg/how_box_1.svg";
import howBox2 from "assets/svg/how_box_2.svg";
import howBox3 from "assets/svg/how_box_3.svg";
import googlePlayIcon from "assets/svg/google_play_icon.svg";
import appleIcon from "assets/svg/apple_icon.svg";
import axios from "axios";
import { MoneyForm } from "components/money-form/money-form.component";
import { NeedsTabPlaceholder } from "components/needs-tab-placeholder/needs-tab-placeholder.component";
import { MONEY_FORMS } from "components/money-form/money-form.utils";
import TotalCountries from "components/countries/CountriesDetails";
import { welcome } from "components/usefulJsScripts/swalMessages";


const NeedsTabs = {
  SEND_MONEY: 0,
  RECEIVE_MONEY: 1,
  HOLD_FX_WALLET: 2,
  GET_FX_OFFER: 3,
  CROSS_BORDER_INVOICE: 4,
};

export const HomePage = ({ title }) => {
  const [activeNeedsTab, setActiveNeedsTab] = useState(NeedsTabs.SEND_MONEY);
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      let resp = await axios.get("https://paysprint.ca/api/v1/sync/countries");
      // console.log(resp.data);
      setCountries(resp.data.data);

    } catch (e) {
      console.log(e);
    }
  };

  const showNeedsContent = () => {
    switch (activeNeedsTab) {
      case NeedsTabs.SEND_MONEY:
        return <MoneyForm countries={countries} type={MONEY_FORMS.send} />;
      case NeedsTabs.RECEIVE_MONEY:
        return <MoneyForm countries={countries} type={MONEY_FORMS.receive} />;
      case NeedsTabs.HOLD_FX_WALLET:
        return (
          <NeedsTabPlaceholder text="Holding currencies when rates are low is a smart way to hedge against adverse rates. With PaySprint FX, you can create multiple currency wallets when the rates are low to save on exchange rate when the rates are high" />
        );

      case NeedsTabs.GET_FX_OFFER:
        return (
          <NeedsTabPlaceholder text="Buy and Sell Foreign Currencies at your own desired rate and make huge Profit." />
        );
      case NeedsTabs.CROSS_BORDER_INVOICE:
        return (
          <NeedsTabPlaceholder text="Do you need to pay invoices in other currencies other than your local currency? No problem! Pay invoices directly from your FX wallet and take advantage of great exchange rates." />
        );
      default:
        return <></>;
    }
  };

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <section className="needs">
        <h3>what do you need?</h3>
        <em>
          Experience Seamless Financial management with PaySprint's Safe and
          Secure Transactions.
        </em>
        <div className="tabs">
          <button
            className={getConditionalClassName(
              activeNeedsTab === NeedsTabs.SEND_MONEY,
              "",
              "active"
            )}
            onClick={() => setActiveNeedsTab(NeedsTabs.SEND_MONEY)}
          >
            Send Money
          </button>
          <button
            className={getConditionalClassName(
              activeNeedsTab === NeedsTabs.RECEIVE_MONEY,
              "",
              "active"
            )}
            onClick={() => setActiveNeedsTab(NeedsTabs.RECEIVE_MONEY)}
          >
            Receive Money
          </button>
          <button
            className={getConditionalClassName(
              activeNeedsTab === NeedsTabs.HOLD_FX_WALLET,
              "",
              "active"
            )}
            onClick={() => setActiveNeedsTab(NeedsTabs.HOLD_FX_WALLET)}
          >
            Hold Fx Wallet
          </button>
          <button
            className={getConditionalClassName(
              activeNeedsTab === NeedsTabs.GET_FX_OFFER,
              "",
              "active"
            )}
            onClick={() => setActiveNeedsTab(NeedsTabs.GET_FX_OFFER)}
          >
            Get Fx Offer
          </button>
          <button
            className={getConditionalClassName(
              activeNeedsTab === NeedsTabs.CROSS_BORDER_INVOICE,
              "",
              "active"
            )}
            onClick={() => setActiveNeedsTab(NeedsTabs.CROSS_BORDER_INVOICE)}
          >
            Cross Border Invoice
          </button>
        </div>
        <div className="content">{showNeedsContent()}</div>
      </section>

      <section className="features">
        <h3>Unique features</h3>
        <em>
          Revolutionize your finances with Paysprint’s Unique Features and Personalized Solutions
        </em>
        <div className="content">
          <img src={featuresSvg} alt="" />

          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              unlimited transactions
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Send money Locally/abroad
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              multi level Security authentication
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Pay Invoice at the Click of a Button
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Add Money to Wallet from Debit/Credit card
            </li>
          </ul>
        </div>
      </section>

      <section className="security">
        <h3>Secure Environment</h3>
        <em>
          Complete Transactions with confidence in PaySprint, where your
          Financial Safety is our top priority.
        </em>
        <div className="boxes">
          <div className="box">
            <h5>Full Encryption</h5>
            <p>
              Experience unparalleled security with PaySprint’s full encryption
              feature, keeping your financial data safe and sound.
            </p>
          </div>
          <div className="box">
            <h5>Identity Verification</h5>
            <p>
              Securely verify your identity and protect your transactions with
              our state-of-the-art verification feature.
            </p>
          </div>
          <div className="box">
            <h5>Multi-Level Authentication</h5>
            <p>
              Fortify your security with our multi-level authentication,
              ensuring safe and seamless access
            </p>
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

      <section className="transactions">
        <h3>Transactions from Nigeria to <TotalCountries /> other countries</h3>
        <div className="flags">
          {countries.map((country, idx) => (
            <div key={idx} className="flag">
              <img src={country.logo} alt={`${country.name} flag`} title={country.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h3>Testimonials</h3>
        <em>Don’t just take our word for it</em>
        <div className="boxes">
          <div className="testimonial">
            <p>
              Paysprint is great and very easy to use. I can send and receive
              payments instantly without any problems and the best part is that
              i can make transactions from anywhere in the world. its really a
              great App.
            </p>
            <div className="name">
              <div className="initials">T</div>
              <em>Taiwo .A</em>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Really good App. Wallet is so easy to use and good USDT/ETH rates
              too.
            </p>
            <div className="name">
              <div className="initials">D</div>
              <em>David .O</em>
            </div>
          </div>
          <div className="testimonial">
            <p>This is really a great App for money transfers and Invoices.</p>
            <div className="name">
              <div className="initials">I</div>
              <em>I. Ahmed</em>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 

