import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import captchaImage from "assets/images/captcha_image.png";
import mobileMapView from "assets/images/mobile_map_view.png";
import contactMap from "assets/svg/contact_map.svg";
import "./contact.styles.scss";

export const ContactPage = ({ title }) => {
  const [image, setImage] = useState(mobileMapView);

  const setCorrectImage = () => {
    if (window.outerWidth >= 1200) setImage(contactMap);
    else setImage(mobileMapView);
  };
  useEffect(() => {
    document.title = title;
    setCorrectImage();
    window.addEventListener("resize", setCorrectImage);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="contact-container">
      <img src={image} alt="paysprint location" />
      <div className="wrapper">
        <h1> Contact Us</h1>
        <em>We'd love to hear from you</em>
        <form>
          <div className="top">
            <label htmlFor="first-name" className="first-name">
              First name<span>*</span>
              <input type="text" placeholder="John" id="first-name" />
            </label>

            <label htmlFor="last-name" className="last-name">
              Last name<span>*</span>
              <input type="text" placeholder="Doe" id="last-name" />
            </label>

            <label htmlFor="email" className="mail">
              Email<span>*</span>
              <input
                type="email"
                placeholder="forexample@company.com"
                id="email"
              />
            </label>
            <label htmlFor="phone" className="phone">
              Phone number
              <div className="input-container">
                <select>
                  <option>NGR</option>
                </select>
                <input
                  type="tel"
                  placeholder="+(234) 123 456 7000"
                  id="phone"
                />
              </div>
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input type="text" id="subject" />
          </label>
          <label htmlFor="message">
            Message<span>*</span>
            <textarea rows="8" id="message" />
          </label>
          <div className="captcha">
            <img src={captchaImage} alt="captcha text" />
            <button>
              <FontAwesomeIcon icon={faRotateRight} />
              Reload
            </button>
          </div>
          <label>
            Enter the Captcha<span>*</span>
            <input type="text" />
          </label>
          <button> Send message</button>
        </form>
      </div>
      <div className="info">
        <div className="location">
          <div className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <em>Visit us</em>
          <em>PaySprint International</em>
          <em>10 George St. North,Brampton. ON. L6X1R2. Canada</em>
        </div>
        <div className="email">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <em>Send us an email</em>
          <em>Speak to our support team</em>
          <em>support@paysprint.zohodesk.com</em>
        </div>
      </div>
    </div>
  );
};
