import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Listing } from "./listing";
import "./rates_marquee.styles.scss";

export const RatesMarquee = () => {
  const [rates, setRates] = useState([]);

  const getRates = async () => {
    try {
      let resp = await axios.get("https://paysprint.ca/api/v1/fxrates");
      if (resp.data.status === 200 && resp.data.message === "Success") {
        setRates(resp.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  if (rates.length) {
    return (
      <Marquee pauseOnHover={true} className="rates-marquee" speed={50}>
        {rates.map((rate, idx) => (
          <Listing key={idx} trend={rate.status} rate={rate} />
        ))}
      </Marquee>
    );
  }
};
