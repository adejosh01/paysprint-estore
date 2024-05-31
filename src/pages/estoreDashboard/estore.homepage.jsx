import "./estore.homepage.scss";
import { useEffect, useState } from "react";
// import others from "assets/images/estore/topCategories/others.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getConditionalClassName, handleClick } from "utils/utils";
import { Card } from "antd";
import config from "../../config";
import starimage from "assets/images/star.png";


export const EstoreDashboard = ({ title }) => {
  const apiUrl = config().baseUrl;
  const [error, setError] = useState(null);
  const [hotDeals, setData] = useState([]);
  const [topProducts, setData2] = useState([]);
  const [trendingServices, setData3] = useState([]);
  const [registeredStores, setData4] = useState([]);
  const [categories, setData5] = useState([]);
  const [value, setValue] = useState(''); // State variable to hold the search query
  const navigate = useNavigate();

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

  const [isSubMenuOpen] = useState(false);

  return (
    <div className="estore-container">
         
        <section className="getallprods" style={{ padding: 'unset' }}>
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
                        <form action="/search">
                        
                            <div className={getConditionalClassName(isSubMenuOpen, "submenu", "active")} >
                                {categories.length !== 0 ? (
                                    Array.isArray(categories) ? (  
                                        <select name="category" defaultValue={'all'} required>
                                            <option value=""> Select Categories </option>
                                            {categories.map((item, index) => (
                                                <option key={index} value={item.category} name="category"> {item.category} </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <p>Sorry, an error occurred</p>
                                    )
                                ) : (
                                    <p> Loading Categories </p> 
                                )}
                            </div>
                            <input className="home" type="text" name="query" placeholder="Search for a product, service, or online store" value={value} onChange={e => setValue(e.target.value)} />
                            <button type="submit" className="searchbtn" onClick={ () => onsubmit}>
                                <svg style={{ marginLeft: '1.5rem' }} className="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                        </form>
                    </div>
                  </div>

              </div>
        </section>

        {hotDeals.length !== 0 && (
          <section className="topdeals">
            <p className="dealtitle"> Hottest Deals </p>

            <div className="items">
                {Array.isArray(hotDeals) ? (
                  hotDeals.map((item, index) => (
                    <Link to={`/productdetails/${item.productCode}`} key={index}>
                    <Card className="eachItem" hoverable style={{ width: '100%' }} cover={<img alt={item.productName} src={item.image} />} >
                      <div className="imgdescription">
                        <p className="nameofitem">{item.productName}</p>
                          <p className="priceofitem">{Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.myamount).toLocaleString('en-US') : item.currencySymbol + Number(item.amount).toLocaleString('en-US')}</p>
                          <p className="initialprice">{Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.mypreviousamount).toLocaleString('en-US') : item.currencySymbol + Number(item.previousAmount).toLocaleString('en-US')}</p>
                          <div className='ratings'>
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
              {/* <p className="secondtitle"> See all Products </p> */}
            </div>

            <div className="items">
                {Array.isArray(topProducts) ? (
                    topProducts.map((item, index) => (
                      <Link to={`/productdetails/${item.productCode}`} key={index}>
                      <div className="eachItem" key={index}>
                        <img className="prodImage" src={item.image} alt={item.productName} />
                        <div className="imgdescription">
                          <p className="nameofitem">{item.productName}</p>
                            <p className="priceofitem">{Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.myamount).toLocaleString('en-US') : item.currencySymbol + Number(item.amount).toLocaleString('en-US')}</p>
                          {/* <div>
                            <span>
                              <img src={starimage} alt="justtheIconOfAStar" />
                              <img src={starimage} alt="justtheIconOfAStar" />
                              <img src={starimage} alt="justtheIconOfAStar" />
                              <img src={starimage} alt="justtheIconOfAStar" />
                              <img src={starimage} alt="justtheIconOfAStar" />
                            </span>
                            <p className="initialprice"> 4.56 (132 reviews) </p>
                          </div> */}
                        </div>
                      </div>
                      </Link>
                    ))
                  ) : (
                    <div>Error: {error} </div>
                  )}
            </div>
          </section>
        )}

        {trendingServices.length !== 0 && (
          <section className="topdeals">
            <p className="dealtitle"> Trending Services </p>

            <div className="items">
              {Array.isArray(trendingServices) ? (
                  trendingServices.map((item, index) => (
                    <Link to={`/services/${item.merchantId}`} key={index}>
                    <div className="eachItem">
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

        {registeredStores.length !== 0 && (
          <section className="registered">
            <h3> Registered Stores </h3>

            <div className="otherImages">
              <div className="firstSection">
                  {Array.isArray(registeredStores) > 0 ? (
                    registeredStores.map((item, index) => (
                      <Link to={`/merchant-store/${item.merchantId}`}>
                        <Card className="eachItem" hoverable key={index}>
                          <img src={item.businessLogo} alt={item.shopName} />
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <div> Error: Sorry, Please check your network connection and try again </div>
                  )}
              </div>
            </div>

            <button type="button" onClick={ () => handleClick("/registered-stores", navigate)}>
              See all Registered Stores
            </button>

          </section>
        )}

        {/* {categories.length !== 0 && (
          <section className="topcategories">
            <h3> Top Categories</h3>

            <div className="imageitems">
              {Array.isArray(categories) > 0 ? (
              categories.slice(0, 8).map((item, index) => (
                  <Link to={`/allcategories?categoryname=${item.category}`} key={index}>
                  <div className="imgdescribtion" key={index}>
                    <img src={others} alt="thetextdescription" />
                      <p> {item.category} </p>
                  </div>
                  </Link>
                ))
              ) : (
                <div className="imgdescribtion">
                  <img src={others} alt="thetextdescription" />
                    <p> Home & Office</p>
                </div>
              )}
            </div>


            <div className="thebutton">
              <Link to={`/allcategories?categoryname=${categories[0].category}`}>
                <button type="button">
                  See all categories
                </button>
              </Link>
            </div>
          </section>
        )} */}

    </div>

  );

};
