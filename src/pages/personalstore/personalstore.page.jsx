import "./personalstore.styles.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import config from "../../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { handleClick } from "utils/utils";

export const Personalstore = ({ title }) => {
  const apiUrl = config().baseUrl;
  const [merchantStore, setMerchantStore] = useState([]);
  const queryString = window.location.pathname;
  const urlId = queryString.split("/");
  const merchantId = urlId[2];
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/stores/specific/${merchantId}`)
      .then(response => {
        setMerchantStore(response.data.data);
      }).catch(error => {
        console.error(error);
      });

  }, [apiUrl, title, merchantId]);


  return (
    <div className="estore-container">

      {
        merchantStore.length > 0 ? (
          <>
            <section className="getpersonalStore" style={{ backgroundImage: `url(${merchantStore[0].storeDetail?.headerContent})` }}>
              <div className="describeProds">
                  <div className="b4Everything">

                    <div className="titleOnly">
                      <h2> Welcome to </h2>
                    </div>

                    <div className="headerStuffs">
                      <img src={merchantStore[0].storeDetail?.businessLogo} alt={merchantStore[0].storeDetail?.headerTitle} />
                      <p>{merchantStore[0].storeDetail?.headerTitle} </p>
                    </div>

                    <div className="btnandtext">
                      <p> {merchantStore[0].storeDetail?.headerSubtitle} </p>
                      <button type="button" onClick={() => handleClick('/messages', navigate)} >
                        Connect Now
                      </button>
                    </div>
                  
                  </div>
              </div>
        </section>

          </>
        ) : (
          <p>Loading...</p>
        )
      }

        <section className="ourproducts">
          <div className="producttitle">
            <p className="realtitle"> Our Products </p>
            <p className="secondtitle"> See all Products </p>
          </div>
        <div className="items">
          {
            merchantStore.length > 0 ? 
            (
            <>
              { merchantStore[0].products.length > 0 ? (
                      merchantStore[0].products.map((item, index) => (
                        <Link to={`/productdetails/${item.productCode}`} key={index}>
                          <div className="eachItem">
                            <img src={item.image} alt={item.productName} />
                            <div className="imgdescription">
                              <p className="nameofitem"> {item.productName} </p>
                              <p className="priceofitem"> {merchantStore[0].currencySymbol + '' + Number(item.amount).toFixed(2)} </p>
                              <div>
                                <span>
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="initialprice"> 4.56 (132 reviews) </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p>No Products available yet ...</p>
                    )
              }
            </>
          ) : (
            <p>Loading ...</p>
          )
          }

        </div>

        </section>

    </div>

  );

};
