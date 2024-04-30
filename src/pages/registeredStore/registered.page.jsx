import "./registered.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import axios from "axios";
import config from "../../config";
import { SideBarCategories } from "components/sidebarCategories/sidebarCategories";

export const RegisteredStore = ({ title }) => {
  const [registeredStores, setRegisteredStore] = useState([]);
  const apiUrl = config().baseUrl;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('categoryname');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/stores/all`) 
    .then(response => {
      setRegisteredStore(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });


  }, [apiUrl, title, category]);

  // console.log(registeredStores);



  return (
    <div className="estore-container">

        <section className="titleHead">
          <div className="title">
            <h1> Registered Stores </h1>
          </div>
        </section>
  
        <section className="allcats">
          <SideBarCategories />

          <div className="maincontent">
            <div className="homeandoffice">
              <div className="producttitle">
                  <p className="realtitle"> {category} </p>
                  <p className="secondtitle"> See all </p>
              </div>

              <div className="items">

              {
                registeredStores.status === 200 ? (
                  registeredStores.data.length > 0 ? (
                    <>
                      {registeredStores.data.map((item, index) => (
                        <>
                          <div className="eachItem" key={index}>
                            <img src={item.businessLogo} alt={item.shopName} />
                            <div className="imgdescription">
                              <p className="nameofitem"> {item.shopName} </p>
                              {/* <p className="priceofitem"> {item.currencySymbol + '' + Number(item.amount).toFixed()} </p> */}
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
                        </>
                      ))}
                    </>
                  ) : (
                    <p style={{ width: '135%' }}>
                      No product found for this store. Please select another category
                    </p>
                  )
                ) : (
                  <p>Loading ...</p>
                )
              }

              </div>
            </div>

          {/* <BottomNav /> */}
          </div>
       </section>
       
    </div>

  );

};
