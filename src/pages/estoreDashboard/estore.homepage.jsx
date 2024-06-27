import "./estore.homepage.scss";
import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getConditionalClassName, handleClick } from "utils/utils";
import { Card } from "antd";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import config from "../../config";
import starimage from "assets/images/star.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";


export const EstoreDashboard = ({ title }) => {
  const apiUrl = config().baseUrl;
  const [error, setError] = useState(null);
  const [hotDeals, setHotDeals] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [trendingServices, setTrendingServices] = useState([]);
  const [registeredStores, setRegisteredStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(''); // State variable to hold the search query
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state


  const fetchData = useCallback(async () => {
    try {
      const cache = sessionStorage.getItem('dashboardData');
      if (cache) {
        const data = JSON.parse(cache);
        setCategories(data.categories);
        setHotDeals(data.hotDeals);
        setTopProducts(data.topProducts);
        setTrendingServices(data.trendingServices);
        setRegisteredStores(data.registeredStores);
        setLoading(false);
        return;
      }


      const [categoryResponse, hotDealsResponse, topProductsResponse, trendingServicesResponse, registeredStoresResponse] = await Promise.all([
        axios.get(`${apiUrl}/ashopree/product/category`),
        axios.get(`${apiUrl}/ashopree/product/hot-deals`),
        axios.get(`${apiUrl}/ashopree/product/top`),
        axios.get(`${apiUrl}/ashopree/services/trending`),
        axios.get(`${apiUrl}/ashopree/stores/registered`)
      ]);


      const data = {
        categories: categoryResponse.data.data,
        hotDeals: hotDealsResponse.data.data,
        topProducts: topProductsResponse.data.data,
        trendingServices: trendingServicesResponse.data.data,
        registeredStores: registeredStoresResponse.data.data
      };


      sessionStorage.setItem('dashboardData', JSON.stringify(data));


      setCategories(data.categories);
      setHotDeals(data.hotDeals);
      setTopProducts(data.topProducts);
      setTrendingServices(data.trendingServices);
      setRegisteredStores(data.registeredStores);


      setLoading(false); // Data fetched, set loading to false
    } catch (error) {
      setError('Error fetching data: ' + error.message);
      setLoading(false); // In case of error, set loading to false
    }
  }, [apiUrl]);


  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    fetchData();
  }, [fetchData, title]);


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


        <div className="describeProds ">
          <div className="b4Title ">
            <div className="titleD slide-in active">
              <h3> Get all products and services you need </h3>
              <p className="pTitle"> Buy products and order for services from our registered vendors at cheap prices </p>
            </div>


            <div className="searchIt">
              <form action="/search">
                <div className={getConditionalClassName(isSubMenuOpen, "submenu", "active")}>
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
                <button type="submit" className="searchbtn" onClick={() => onsubmit}>
                  <svg style={{ marginLeft: '1.5rem' }} className="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {loading ? (
        <section className="topdeals">
          <p className="dealtitle"> Hottest Deals </p>
          <div className="items">
            {Array(4).fill().map((_, index) => (
              <div key={index}>
                <Card className="eachItem" hoverable style={{ width: '100%' }} cover={<Skeleton height={200} />}>
                  <Skeleton count={2} />
                </Card>
              </div>
            ))}
          </div>
        </section>
      ) : (
        hotDeals.length !== 0 && (
          <section className="topdeals">
            <p className="dealtitle"> Hottest Deals </p>
            <div className="items">
              {Array.isArray(hotDeals) ? (
                hotDeals.map((item, index) => (
                  <div key={index}>
                    <Card className="eachItem" hoverable style={{ width: '100%' }} cover={<img alt={item.productName} src={item.image} onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)} />}>
                      <div className="banner">
                        <div> <p> Semi - Annual </p> <p> Savings </p> </div>
                        <p> 20% off discount </p>
                      </div>
                      <div className="imgdescription">
                        <p className="nameofitem" onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)}> {item.productName} </p>
                        <div>
                          <p className="priceofitem"> {Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.myamount).toLocaleString('en-US') : item.currencySymbol + Number(item.amount).toLocaleString('en-US')} </p>
                          <p className="initialprice"> {Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.mypreviousamount).toLocaleString('en-US') : item.currencySymbol + Number(item.previousAmount).toLocaleString('en-US')} </p>
                          <button type="button"> <FontAwesomeIcon icon={faCartPlus} /> </button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))
              ) : (
                <div> Error: {error} </div>
              )}
            </div>
          </section>
        )
      )}


      {loading ? (
        <section className="topproducts">
          <div className="producttitle">
            <p className="realtitle"> Top Products </p>
          </div>
          <div className="items">
            {Array(4).fill().map((_, index) => (
              <div key={index}>
                <div className="eachItem" key={index}>
                  <Skeleton height={200} />
                  <div className="imgdescription">
                    <Skeleton count={2} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        topProducts.length !== 0 && (
          <section className="topproducts">
            <div className="producttitle">
              <p className="realtitle"> Top Products </p>
            </div>
            <div className="items">
              {topProducts.map((item, index) => (
                <div key={index}>
                  <Card className="eachItem" hoverable style={{ width: '100%' }}>
                  <img src={item.image} alt={item.productName} onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)} />
                  <div className="imgdescription">
                    <p className="nameofitem" onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)}> {item.productName} </p>
                    <div>
                      <p className="priceofitem"> {Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.myamount).toLocaleString('en-US') : item.currencySymbol + Number(item.amount).toLocaleString('en-US')} </p>
                      <p className="initialprice"> {Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion.mycurrencysymbol + Number(item.myCountryConversion.mypreviousamount).toLocaleString('en-US') : item.currencySymbol + Number(item.previousAmount).toLocaleString('en-US')} </p>
                      <button type="button"> <FontAwesomeIcon icon={faCartPlus} /> </button>
                    </div>
                  </div>
                  </Card>
                 
                </div>
              ))}
            </div>
          </section>
        )
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
                  <Link to={`/merchant-store/${item.merchantId}`} key={index}>
                    <Card className="eachItem" hoverable>
                      <img src={item.businessLogo} alt={item.shopName} />
                    </Card>
                  </Link>
                ))
              ) : (
                <div> Error: Sorry, Please check your network connection and try again </div>
              )}
            </div>
          </div>


          <button type="button" onClick={() => handleClick("/registered-stores", navigate)}>
            See all Registered Stores
          </button>
        </section>
      )}
    </div>
  );
};



