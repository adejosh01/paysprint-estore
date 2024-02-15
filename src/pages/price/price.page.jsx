import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./price.styles.scss";
import { useEffect } from "react";

export const PricePage = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="price-container">
      <h1>Pricing</h1>
      <p>
        Choose the plan that fits your financial needs and budget - sign up now
        for hassle-free money management.
      </p>

      <div className="plans">
        <div className="plan">
          <div className="top">
            <h3>Freemium</h3>
            <em>Current plan</em>
          </div>
          <em>
            <span>#0.00</span>/month
          </em>
          <p>The budget friendly essentials to master your finances</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Money Transfer</em>
                <p>Local money transfer, wallet-to-wallet with no fee</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Pay Invoice</em>
                <p>
                  To Local Business on PaySprint (P2B) pay vendors and suppliers
                  that are on PaySprint at a click of button
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Shop Online</em>
                <p>Shop online and get cash rewards from seller on PaySprint</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Manage Tenancy</em>
                <p>
                  Pay rents and also request for repair-work order, right on the
                  mobile app
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Bill payments</em>
                <p>Pay for Airtime, Data and Utility bills on time</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="plan special">
          <div className="top">
            <h3>Basic</h3>
            <em>Most popular</em>
          </div>
          <em>
            <span>#25.00</span>/month
          </em>
          <p>Simplify transactions with our affordable plan.</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Money Transfer</em>
                <p>Local money transfer, wallet-to-wallet with no fee</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Cross border transactions</em>
                <p>Local money transfer, wallet-to-wallet. Fees apply</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Pay Invoice</em>
                <p>
                  To Local Business on PaySprint (P2B) pay vendors and suppliers
                  that are on PaySprint at a click of button
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Shop Online</em>
                <p>Shop online and get cash rewards from seller on PaySprint</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Manage Tenancy</em>
                <p>
                  Pay rents and also request for repair-work order, right on the
                  mobile app
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Bill payments</em>
                <p>Pay for Airtime, Data and Utility bills on time</p>
              </div>
            </li>
          </ul>
          <button>Get plan</button>
        </div>
        <div className="plan">
          <div className="top">
            <h3>Classic</h3>
          </div>
          <em>
            <span>#50.00</span>/month
          </em>
          <p>Simplify transactions with our affordable plan.</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Money Transfer</em>
                <p>Local money transfer, wallet-to-wallet with no fee</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Cross border transactions</em>
                <p>Local money transfer, wallet-to-wallet. Fees apply</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Pay Invoice</em>
                <p>
                  To Local Business on PaySprint (P2B) pay vendors and suppliers
                  that are on PaySprint at a click of button
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Shop Online</em>
                <p>Shop online and get cash rewards from seller on PaySprint</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Manage Tenancy</em>
                <p>
                  Pay rents and also request for repair-work order, right on the
                  mobile app
                </p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Bill payments</em>
                <p>Pay for Airtime, Data and Utility bills on time</p>
              </div>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <div className="text">
                <em>Access to foreign currency</em>
                <p>
                  Create and hold other currencies wallet and hedge against
                  flunctuation in exchange rates
                </p>
              </div>
            </li>
          </ul>
          <button>Get plan</button>
        </div>
      </div>
    </div>
  );
};
