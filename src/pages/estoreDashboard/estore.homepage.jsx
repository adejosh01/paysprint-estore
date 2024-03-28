import "./estore.homepage.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import office from "assets/images/estore/topCategories/Office.png";
import electronic from "assets/images/estore/topCategories/Electronics.png";
import desktops from "assets/images/estore/topCategories/desktop.png";
import groceries from "assets/images/estore/topCategories/groceries.png";
import health from "assets/images/estore/topCategories/healthcare.png";
import travels from "assets/images/estore/topCategories/travels.png";
import fashion from "assets/images/estore/topCategories/fashion.png";
import others from "assets/images/estore/topCategories/others.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { getConditionalClassName } from "utils/utils";
import { Card } from "antd";


export const EstoreDashboard = ({ title }) => {
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';
  const [error, setError] = useState(null);
  const [hotDeals, setData] = useState([]);
  const [topProducts, setData2] = useState([]);
  const [trendingServices, setData3] = useState([]);
  const [registeredStores, setData4] = useState([]);
  const [categories, setData5] = useState([]);

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`) 
    .then(response => {
      setData5(response.data.data);
    }).catch(error => {
      setError('Error fetching Hot-deals product data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/product/hot-deals`) 
    .then(response => {
      setData(response.data.data);
    }).catch(error => {
      setError('Error fetching Hot-deals product data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/product/top`) 
    .then(response => {
      if (response.data && response.data.data) {
        setData2(response.data.data);
        setError(null); 
      } else {
        setError('No data returned for the Top Products');
      }

    }).catch(error => {
      setError('Error fetching Top Products data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/services/trending`) 
    .then(response => {
      setData3(response.data.data);
    }).catch(error => {
      setError('Error fetching Trending Services data: ' + error.message);
    });

    axios.get(`${apiUrl}/ashopree/stores/registered`) 
    .then(response => {
      setData4(response.data.data);
    }).catch(error => {
      setError('Error fetching Trending Services data: ' + error.message);
    });

}, [apiUrl, title]);

  hotDeals.map((item, index) => (
    console.log(item.productCode)
  ))
// console.log(hotDeals.productCode);  210720

  const [isSubMenuOpen] = useState(false);

  return (
    <div className="estore-container">
         
        <section className="getallprods">
            <div className="allprodsImage">
              <img src={"assets/images/estore/rectangle-480.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-490.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-500.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-510.png"} alt="allprods" />
            </div>
            
              <div className="describeProds">
                  <div className="b4Title">
                    <div className="title">
                      <h2> Get all products and services you need </h2> 
                      <p> Buy products and order for services from our registered vendors at cheap prices </p>
                    </div>
                    
                    <div className="searchIt">   
                        <form action={`${apiUrl}/ashopree/product/search/?search=Men%20Shoes&pageNumber=10`} method="post">
                            <div className={getConditionalClassName(isSubMenuOpen, "submenu", "active")} >
                                {categories.length !== 0 ? (
                                    Array.isArray(categories) ? (  
                                        <select name="category" defaultValue={'default'}>
                                            <option value="default" disabled> Categories </option>
                                            {categories.map((item, index) => (
                                                <option key={index} value={item.category} name="category">{item.category}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <p>Sorry, an error occurred</p>
                                    )
                                ) : (
                                    <p> Loading Categories </p> 
                                )}
                            </div>
                            <input className="home" name="searchQuery" type="text" placeholder="Search for a product, service, or online store" />
                            <button type="submit" className="searchbtn" name="submit" onClick={ () => onsubmit}>
                                <svg style={{ marginLeft: '1.5rem' }} className="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                        </form>
                    </div>

                  </div>

                  <div class="buttons">
                    <button type="button">
                      <p>Apparels</p>
                    </button>
                    <button type="button">
                      <p>Consultancy</p>
                    </button>
                    <button type="button">
                      <p>Professional Service</p>
                    </button>
                    <button type="button">
                      <p>Electronic Devices</p>
                    </button>
                    <button type="button">
                      <p>Professional Service</p>
                    </button>
                  </div>
              </div>

        </section>

        {hotDeals.length !== 0 && (
          <section className="topdeals">
            <p className="dealtitle"> Hottest Deals </p>

            {/* <div className="items">
                {Array.isArray(hotDeals) ? (
                  hotDeals.map((item, index) => (
                  <Link to={`/productdetails/${item.productCode}`} key={index}>
                    <div className="eachItem" key={index}>
                      <img src={item.image} alt="eachImage" />
                      <div className="imgdescription">
                        <p className="nameofitem">{item.productName}</p>
                        <p className="priceofitem">{item.currencySymbol + item.amount}</p>
                        <p className="initialprice">{item.currencySymbol + item.previousAmount}</p>
                      </div>
                    </div>
                  </Link>
                  ))
                ) : (
                  <div>Error: Sorry, Please check your network connection and try again</div>
                )}
            </div> */}

            <div className="items">
                {Array.isArray(hotDeals) ? (
                  hotDeals.map((item, index) => (
                  <Link to={`/productdetails/${item.productCode}`} key={index}>
                    <Card className="eachItem" hoverable style={{ width: '100%' }} cover={<img alt="itemImage" src={item.image} />} >
                      <div className="imgdescription">
                        <p className="nameofitem">{item.productName}</p>
                        <p className="priceofitem">{item.currencySymbol + item.amount}</p>
                        <p className="initialprice">{item.currencySymbol + item.previousAmount}</p>
                      </div>
                    </Card>
                  </Link>
                  ))
                ) : (
                  <div>Error: Sorry, Please check your network connection and try again</div>
                )}
            </div>

            
          </section>
        )}

        {topProducts.length !== 0 && (
          <section className="topproducts">
            <div className="producttitle">
              <p className="realtitle"> Top Products </p>
              <p className="secondtitle"> See all Products </p>
            </div>

            <div className="items">
                {Array.isArray(topProducts) ? (
                    topProducts.map((item, index) => (
                      <div className="eachItem" key={index}>
                        <img className="prodImage" src={item.image} alt="eachImage" />
                        <div className="imgdescription">
                          <p className="nameofitem">{item.productName}</p>
                          <p className="priceofitem">#{item.amount}</p>
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
                    ))
                  ) : (
                    <div>Error: {error} </div>
                  )}
            </div>
          </section>
        )}

        {registeredStores.length !== 0 && (
          <section className="registered">
            <h3> Registered Stores </h3>

            {/* <div className="otherImages">
              <div className="firstSection">
                  {Array.isArray(registeredStores) > 0 ? (
                    registeredStores.map((item, index) => (
                      <div key={index}>
                        <img src={item.businessLogo} alt="eachImage" />
                      </div>
                    ))
                  ) : (
                    <div>Error: Sorry, Please check your network connection and try again</div>
                  )}
              </div>
            </div> */}

            <div className="otherImages">
              <div className="firstSection">
                  {Array.isArray(registeredStores) > 0 ? (
                    registeredStores.map((item, index) => (
                      <Card className="eachItem" hoverable style={{ width: 240 }} key={index}>
                        <img src={item.businessLogo} alt="eachImage" />
                      </Card>
                    ))
                  ) : (
                    <div>Error: Sorry, Please check your network connection and try again</div>
                  )}
              </div>
            </div>

          </section>
        )}

        {categories.length !== 0 && (
          <section className="topcategories">
            <h3> Top Categories</h3>

            <div className="imageitems">
              {Array.isArray(categories) > 0 ? (
                categories.map((item, index) => (
                  <div className="imgdescribtion" key={index}>
                    {/* <img src={office} alt="thetextdescription" /> */}
                    {index % 7 === 0 && <img src={office} alt="thetextdescription" />}
                    {index % 7 === 1 && <img src={electronic} alt="thetextdescription" />}
                    {index % 7 === 2 && <img src={desktops} alt="thetextdescription" />}
                    {index % 7 === 3 && <img src={groceries} alt="thetextdescription" />}
                    {index % 7 === 4 && <img src={health} alt="thetextdescription" />}
                    {index % 7 === 5 && <img src={travels} alt="thetextdescription" />}
                    {index % 7 === 6 && <img src={fashion} alt="thetextdescription" />}
                      <p> {item.category} </p>
                  </div>
                ))
              ) : (
                <div className="imgdescribtion">
                  <img src={others} alt="thetextdescription" />
                    <p> Home & Office</p>
                </div>
              )}
            </div>

            {/* <div className="imageitems">
              <div className="imgdescribtion">
                <img src={office} alt="thetextdescription" />
                <p> Home & Office</p>
              </div>
              <div className="imgdescribtion">
                <img src={electronic} alt="thetextdescription" />
                <p> Electronis gadgets </p>
              </div>
              <div className="imgdescribtion">
                <img src={desktops} alt="thetextdescription" />
                <p> Computers</p>
              </div>
              <div className="imgdescribtion">
                <img src={groceries} alt="thetextdescription" />
                <p> Groceries </p>
              </div>
              <div className="imgdescribtion">
                <img src={health} alt="thetextdescription" />
                <p> Health & Wellbeing</p>
              </div>
              <div className="imgdescribtion">
                <img src={travels} alt="thetextdescription" />
                <p> Travel & Hotel </p>
              </div>
              <div className="imgdescribtion">
                <img src={fashion} alt="thetextdescription" />
                <p> Fashion </p>
              </div>
              <div className="imgdescribtion">
                <img src={others} alt="thetextdescription" />
                <p> Others </p>
              </div>
            </div> */}

            <div className="thebutton">
              <Link to="/allcategories">
                <button type="button">
                  See all categories
                </button>
              </Link>
            </div>
          </section>
        )}

        {trendingServices.length !== 0 && (
          <section className="topdeals">
            <p className="dealtitle"> Trending Services </p>

            <div className="items">
              {Array.isArray(trendingServices) ? (
                  trendingServices.map((item, index) => (
                  <Link to="/services">
                    <div className="eachItem" key={index}>
                      <img src={item.businessLogo} alt="eachImage" />
                      <div className="imgdescription">
                        <p className="nameofitem">{item.businessName}</p>
                      </div>
                    </div>
                    </Link>
                  ))
                ) : (
                  <div>Error: Sorry, Please check your network connection and try again</div>
                )}
            </div>
          </section>
        )}

    </div>

  );

};
