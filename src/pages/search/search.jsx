import "./search.scss";
import { useEffect, useState } from "react";
import arrowupright from "assets/icons/arrow-up-right.png";
import { BottomNav } from "components/bottom-navs";
import { Link } from "react-router-dom";
import axios from "axios";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";
import { stripHtmlTags } from 'utils/utils';
import config from "../../config";
import { SideBarCategories } from "components/sidebarCategories/sidebarCategories";
import Skeleton from 'react-loading-skeleton';

export const Search = ({ title }) => {
  const [searchItem, setSearchItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = config().baseUrl;
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('query');
  const category = urlParams.get('category');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    const fetchSearchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/ashopree/product/search?search=${query}&category=${category}`);
        setSearchItem(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchSearchData();
  }, [apiUrl, title, category, query]);

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
              <h2> Your Searched Items </h2>
              <p> Check out products or services from our registered stores </p>
            </div>
            <button type="button" className="home-button" onClick={() => handleClick('/', navigate)}>
              Return Home
            </button>
          </div>
        </div>
      </section>

      <section className="nextupforsearch">
        <SideBarCategories />

        <div className="maincontent">
          <div className="titleandsearch">
            {loading ? (
              <Skeleton height={30} width={200} />
            ) : (
              <p> We have found {searchItem.data?.length} products for you </p>
            )}
          </div>

          <div className="submain">
            <div className="allItems">
              {loading ? (
                <Skeleton count={5} height={300} />
              ) : (
                <>
                  {searchItem.data?.length > 0 ? (
                    Array.isArray(searchItem.data) && searchItem.data?.map((item, index) => (
                      <div className="singlarity" key={index}>
                        <img style={{ width: "100%", height: "inherit", borderRadius: "5px" }} src={item.image} alt={item.productName} />
                        <div>
                          <Link to={`/productdetails/${item.productCode}`}>
                            <h2> {item.productName} </h2>
                          </Link>
                          <p> {stripHtmlTags(item.description)} </p>
                          <div>
                            <p> {item.category} </p>
                          </div>
                          <Link to={`/productdetails/${item.productCode}`}>
                            <button type="button" className="justforstore">
                              <span> View product  </span>
                              <img src={arrowupright} alt="arrowupright" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (<p style={{ textAlign: 'center', fontSize: '2rem' }}> No result found for {query} </p>)}
                </>
              )}
            </div>

            {searchItem.next_page_url != null ? <BottomNav /> : null }

            <div className="alertmsg">
              <div>
                <p> Are you a store owner?, or do you want to list your products / services on Paysprint market place? </p>
                <p> Let’s get you started. Create a merchant account today and own your Online Store </p>
              </div>
              <button type="button">
                Create Seller's account 
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
