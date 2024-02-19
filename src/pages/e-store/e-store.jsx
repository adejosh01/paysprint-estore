import "./e-store.scss";
import { useEffect } from "react";
import product1 from "../../assets/images/estore/products/product1.png";
import product2 from "../../assets/images/estore/products/product2.png";
import product3 from "../../assets/images/estore/products/product3.png";
import product4 from "../../assets/images/estore/products/product4.png";
import arrowupright from "assets/icons/arrow-up-right.png";
import { BottomNav } from "components/bottom-navs";
import { Link } from "react-router-dom";

export const EStore = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
                      <h2> E-store </h2>
                      <p> Check out products or services from our registered stores </p>
                    </div>
                    
                    <div className="searchIt">
                        <input class="home" placeholder="Search for store" />
                        <button  className="searchbtn">
                          {/* <img src={search} alt="searchIcon" /> */}
                          <svg style={{ marginLeft: '1.5rem' }} class="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                  </div>

              </div>

        </section>

       <section className="nextup">
          <div className="sidebar">
            <h4> Store Category</h4>
            <div style={{  display: 'flex', flexDirection: 'column' , padding: '2rem 2rem', gap: '4rem' }}>
              <div style={{  padding: '1.5rem 0' }}>
                <p> Accounting (18) </p>
              </div>
              <div>
                <p> Art & Craft (10) </p>
              </div>
              <div>
                <p> Automotive (23) </p>
              </div>
              <div>
                <p> Aviation/ Aerospace (5) </p>
              </div>
              <div>
                <p> Chemicals (5)  </p>
              </div>
              <div>
                <p> Chemicals (5)  </p>
              </div>
              <div>
                <p> Chemicals (5)  </p>
              </div>
              <div style={{  paddingBottom: '3rem' }}>
                <p> Chemicals (5)  </p>
              </div>
            </div>
          </div>

          <div className="maincontent">
            <div className="titleandsearch">
              <p> We have found 12,000 stores for you </p>

              <div>
                <p>
                   Sort by: <span> <button type="button"> Newest </button> </span>
                </p>
              </div>
            </div>

            <div className="submain">
              <div className="allItems">

                <div className="singlarity">
                  <img src={product1} alt="firstproductImage" />
                  <div>
                    <Link to="/personalstore">
                      <h2> Adebambo Store </h2>
                    </Link>
                    <p> We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products... </p>
                    
                    <div>
                      <p> Fashion </p>
                      <p> Beauty </p>
                      <p> Clothing </p>
                    </div>

                    <Link to="/personalstore">
                      <button type="button" className="justforstore">
                        <span> Go to store  </span>
                        <img src={arrowupright} alt="arrowupright" />
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="singlarity">
                  <img src={product2} alt="secondproductImage" />
                  <div>
                    <Link to="/personalstore">
                      <h2> Adebambo Store </h2>
                    </Link>
                    <p> We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products... </p>
                    
                    <div>
                      <p> Fashion </p>
                      <p> Beauty </p>
                      <p> Clothing </p>
                    </div>

                    <Link to="/personalstore">
                      <button type="button" className="justforstore">
                        <span> Go to store  </span>
                        <img src={arrowupright} alt="arrowupright" />
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="singlarity">
                  <img src={product3} alt="thirdproductImage" />
                  <div>
                    <Link to="/personalstore">
                      <h2> Adebambo Store </h2>
                    </Link>
                    <p> We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products... </p>
                    
                    <div>
                      <p> Fashion </p>
                      <p> Beauty </p>
                      <p> Clothing </p>
                    </div>

                    <Link to="/personalstore">
                      <button type="button" className="justforstore">
                        <span> Go to store  </span>
                        <img src={arrowupright} alt="arrowupright" />
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="singlarity">
                  <img src={product4} alt="fourthproductImage" />
                  <div>
                    <Link to="/personalstore">
                      <h2> Adebambo Store </h2>
                    </Link>
                    <p> We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products... </p>
                    
                    <div>
                      <p> Fashion </p>
                      <p> Beauty </p>
                      <p> Clothing </p>
                    </div>

                    <Link to="/personalstore">
                      <button type="button" className="justforstore">
                        <span> Go to store  </span>
                        <img src={arrowupright} alt="arrowupright" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <BottomNav />

              <div className="alertmsg">
                <div>
                  <p> Are you a store owner?, or do you want to list your products / services on Paysprint market place? </p>
                  <p> Let’s get you started. Create a merchant account today and own your E-store </p>
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
