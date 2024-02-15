import { MONEY_FORMS } from "./money-form.utils";
import "./money-form.styles.scss";

import transferIcon from "assets/svg/transfer.svg";
import { useState } from "react";
import axios from "axios";
import { getConditionalClassName, to2DecimalPlaces } from "utils/utils";
import { Loader } from "components/loader/loader.component";

export const MoneyForm = ({ countries, type }) => {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  let [fromCountryValue, fromCountryCurrency] = fromCountry.split(",");
  let [toCountryValue, toCountryCurrency] = toCountry.split(",");

  const getConversion = async (e) => {
    if (!amount || !fromCountry || !toCountry) return;
    setLoading(true);
    e.preventDefault();
    try {
      let url = `https://paysprint.ca/api/v1/conversionrate/${fromCountryCurrency}/${toCountryCurrency}`;

      // ?fromCountry=${fromCountryValue}&toCountry=${toCountryValue}

      let resp = await axios.get(url, {
        params: {
          fromCountry: fromCountryValue,
          toCountry: toCountryValue,
        },
        headers: {
          Authorization: `Bearer ${process.env.CONVERSION_RATE_KEY}`,
        },
      });
      setLoading(false);
      setRate(resp.data);
      setShowAnswer(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <>
      <form className="money-form">
        <div className="info">
          <label>
            {type === MONEY_FORMS.send && "Send From"}

            {type === MONEY_FORMS.receive && "Receive From"}

            <select
              onChange={(e) => {
                setShowAnswer(false);
                setFromCountry(e.target.value);
              }}
              value={fromCountry}
            >
              {countries.map((country, idx) => (
                <option
                  key={idx}
                  value={`${country.name},${country.currencyCode}`}
                >{`${country.name} (${country.code})`}</option>
              ))}
            </select>
          </label>
          <label>
            {type === MONEY_FORMS.send && "Send To"}

            {type === MONEY_FORMS.receive && "Receive In"}
            <select
              onChange={(e) => {
                setShowAnswer(false);
                setToCountry(e.target.value);
              }}
              value={toCountry}
            >
              {countries.map((country, idx) => (
                <option
                  key={idx}
                  value={`${country.name},${country.currencyCode}`}
                >{`${country.name} (${country.code})`}</option>
              ))}
            </select>
          </label>
          <label>
            Amount
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={fromCountry ? fromCountry.split(",")[1] : ""}
            />
          </label>
        </div>
        <div
          className={getConditionalClassName(showAnswer, "answer", "active")}
        >
          <div className="from">
            <em>
              {type === MONEY_FORMS.send && "You"}{" "}
              {type === MONEY_FORMS.receive && "They"} send
            </em>
            <div>
              <h4>{to2DecimalPlaces(amount)}</h4>
              {rate && (
                <em>
                  1 {fromCountryCurrency} = {to2DecimalPlaces(rate)}{" "}
                  {toCountryCurrency}
                </em>
              )}
            </div>
          </div>
          <div className="transfer">
            <img src={transferIcon} alt="transfer icon" />
          </div>
          <div className="to">
            <em>
              {type === MONEY_FORMS.send && "They"}{" "}
              {type === MONEY_FORMS.receive && "You"} receive
            </em>
            <div>
              <h4>{to2DecimalPlaces(rate * amount)}</h4>
              <em>
                1 {toCountryCurrency} = {to2DecimalPlaces(1 / Number(rate))}{" "}
                {fromCountryCurrency}
              </em>
            </div>
          </div>
        </div>
        <button onClick={getConversion}>
          {loading ? <Loader /> : "Proceed"}
        </button>
      </form>
    </>
  );
};
