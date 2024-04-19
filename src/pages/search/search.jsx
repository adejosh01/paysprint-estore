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



export const Search = ({ title }) => {
  const [searchItem, setData] = useState([]);
  const [itemCategory, setCategory] = useState([]);
  const apiUrl = config().baseUrl;
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('query');
  const category = urlParams.get('category');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/search?search=${query}&category=${category}`) 
    .then(response => {
      setData(response.data.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });

    axios.get(`${apiUrl}/ashopree/product/category`)
      .then(response => {
        setCategory(response.data.data);
      }).catch(error => {
        console.error('Error fetching Product category: ' + error.message);
      });

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
                    
                    <button type="button" className="home-button" onClick={ () => handleClick('/', navigate)}>
                       Return Home
                    </button>
                  </div>

              </div>

        </section>

       <section className="nextup">
          <div className="sidebar">
            <h4> Store Category</h4>

          {itemCategory.length > 0 ? (
              <div style={{  display: 'flex', flexDirection: 'column' , padding: '2rem 2rem', gap: '4rem' }}>
                  {Array.isArray(itemCategory) && itemCategory.map((item, index) => (
                    <div>
                      <p key={index}>{item.category}</p>
                    </div>
                  ))} 
                      
                  {!Array.isArray(itemCategory) && <div>Error: Sorry, Please check your network connection and try again</div>}
              </div>
            ) : (
              <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading...... </p>
            )}
            </div>

          <div className="maincontent">
            <div className="titleandsearch">
            <p> We have found {searchItem.data?.length} products for you </p>
            </div>

            <div className="submain">
              <div className="allItems">

              {searchItem.data?.length > 0 ? (
                <>
                  {Array.isArray(searchItem.data) && searchItem.data?.map((item, index) => (
                    <div className="singlarity">
                      <img style={{ width: "30%", height: "inherit", borderRadius: "5px" }} src={item.image} alt={item.productName} />
                      <div>
                        <Link to={`/productdetails/${item.productCode}`} key={index}>
                          <h2> {item.productName} </h2>
                        </Link>
                        <p> {stripHtmlTags(item.description)} </p>

                        <div>
                          <p> {item.category} </p>
                        </div>

                        <Link to={`/productdetails/${item.productCode}`} key={index}>
                          <button type="button" className="justforstore">
                            <span> View product  </span>
                            <img src={arrowupright} alt="arrowupright" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                  } 
                </>
              ) : (<p style={{ textAlign: 'center', fontSize: '2rem' }}> No result found for {query} </p>)}

              </div>

            {searchItem.next_page_url != null ? <BottomNav /> : null }

              <div className="alertmsg">
                <div>
                  <p> Are you a store owner?, or do you want to list your products / services on Paysprint market place? </p>
                  <p> Let’s get you started. Create a merchant account today and own your Online Store </p>
                </div>

                <button type="button">
                   Create Merchant account 
                </button>
              </div>

            </div>
          </div>

       </section>

    </div>

  );

};
