import "./onlinestore.scss";
import { useEffect, useState } from "react";
import arrowupright from "assets/icons/arrow-up-right.png";
import { Link, useNavigate } from "react-router-dom";
import { SideBarCategories } from "components/sidebarCategories/sidebarCategories";
import config from "../../config";
import axios from "axios";
import { handleClick } from "utils/utils";

export const OnlineStore = ({ title }) => {
  const [merchant, setMerchant] = useState([]);
  const apiUrl = config().baseUrl;
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/stores/online`)
      .then(response => {
        setMerchant(response.data.data);
        // console.log(response.data.data);
      }).catch(error => {
        console.error('Error fetching Trending Services data: ' + error.message);
      });

  }, [apiUrl, title]);


  return (
    <div className="estore-container">
        
        <section className="getallprods">
            <div className="allestoreprodsImage">
              <img src={"assets/images/estore/rectangle-480.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-490.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-500.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-510.png"} alt="allprods" />
            </div>
            
              <div className="describeProds">
                  <div className="b4Title">
                    <div className="title">
                      <h2> Online Store </h2>
                      <p> Check out products or services from our registered stores </p>
                    </div>
                    
                    <div className="searchItstore">
                        <input class="home" placeholder="Search for store" />
                        <button  className="searchbtnstore">
                          <svg style={{ marginLeft: '1.5rem' }} class="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                  </div>

              </div>
        </section>

       <section className="nextup">
          <SideBarCategories />

          <div className="maincontent">

              { merchant.length > 0 ? (
                  <>
                <div className="titleandsearch">
                  <p> We have found {merchant.length} stores for you </p>

                  <div>
                    <p>
                      Sort by: <span> <button type="button"> Newest </button> </span>
                    </p>
                  </div>
                </div>

                <div className="submain">

                  <div className="allItems">

                    {
                      merchant.map((item, index) => (
                        <div className="singlarity" key={index}>
                          <img src={item.businessLogo} alt={item.shopName} style={{ width: "180px", objectFit: "contain" }} />
                          <div>
                            <Link to={`/merchant-store/${item.merchantId}`}>
                              <h2> {item.shopName} </h2>
                            </Link>
                            <p> {item.headerTitle}</p>
                            <p> {item.headerSubtitle}</p>

                            <div>
                            {
                                item.advertTitle !== null ? <p> {item.advertTitle} </p> : null
                            }
                            </div>

                            <Link to={`/merchant-store/${item.merchantId}`}>
                              <button type="button" className="justforstore">
                                <span> Go to store  </span>
                                <img src={arrowupright} alt="arrowupright" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))
                    }

                    

                  </div>

                </div>
                  </>
                ) : (<p> No available store yet </p>)
              }
            
            <div className="submain">
              <div className="alertmsg">
                <div>
                  <p> Are you a store owner?, or do you want to list your products / services on Ashopree? </p>
                  <p> Let’s get you started. Create a merchant account today and own your Online Store </p>
                </div>

                <button type="button" onClick={ () => handleClick('/merchant-register', navigate) }>
                  Create Merchant account
                </button>
              </div>
            </div>

          </div>
       </section>

    </div>

  );

};
