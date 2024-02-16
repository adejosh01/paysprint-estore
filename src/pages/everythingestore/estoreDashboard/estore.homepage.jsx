import "./estore.homepage.scss";
import { useEffect, useState } from "react";
import cocacola from "assets/images/estore/rectangle-20.png";
import tv from "assets/images/estore/rectangle-21.png";
import washingmachine from "assets/images/estore/rectangle-22.png";
import shoes from "assets/images/estore/rectangle-23.png";
import femaleshoes from "assets/images/estore/rectangle-24.png";
import tshirt from "assets/images/estore/rectangle-25.png";
import clippers from "assets/images/estore/rectangle-26.png";
import eyeglases from "assets/images/estore/rectangle-27.png";
import starimage from "assets/images/star.png";
import bamboStore from "assets/images/estore/frame-4080.png";
import humtpaint from "assets/images/estore/frame-4090.png";
import xycee from "assets/images/estore/frame-410.png";
import woconsult from "assets/images/estore/frame-411.png";
import mofeGadgets from "assets/images/estore/frame-408.png";
import myconsul from "assets/images/estore/frame-4091.png";
import electrify from "assets/images/estore/frame-4112.png";
import office from "assets/images/estore/topCategories/Office.png";
import electronic from "assets/images/estore/topCategories/Electronics.png";
import desktops from "assets/images/estore/topCategories/desktop.png";
import groceries from "assets/images/estore/topCategories/groceries.png";
import health from "assets/images/estore/topCategories/healthcare.png";
import travels from "assets/images/estore/topCategories/travels.png";
import fashion from "assets/images/estore/topCategories/fashion.png";
import others from "assets/images/estore/topCategories/others.png";
import report from "assets/images/estore/rectangle-28.png";
import consultation from "assets/images/estore/rectangle-29.png";
import businesstalk from "assets/images/estore/rectangle-210.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const EstoreDashboard = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
                        <div>
                          <p> Category </p>
                          <span style={{  marginLeft: '0.2rem' }}> 
                            <button> <FontAwesomeIcon icon={isSubMenuOpen ? faAngleUp : faAngleDown} /> </button>
                          </span>
                        </div>
                        <input class="home" placeholder="search for a product services or e-store" />
                        <button  className="searchbtn">
                          {/* <img src={search} alt="searchIcon" /> */}
                          <svg style={{ marginLeft: '1.5rem' }} class="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                  </div>

                  <div class="buttons">
                    <button type="button">
                      <p>Aparrels</p>
                    </button>
                    <button type="button">
                      <p>Consultancy</p>
                    </button>
                    <button type="button">
                      <p>Professional Service</p>
                    </button>
                    <button type="button">
                      <p>Electronic devices</p>
                    </button>
                    <button type="button">
                      <p>Professional Service</p>
                    </button>
                  </div>
              </div>

        </section>

        <section className="topdeals">
          <p className="dealtitle"> Hottest Deals </p>

          <div className="items">
            <div className="eachItem">
              <img src={cocacola} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Coca cola 60cl * 12 </p>
                <p className="priceofitem"> ₦1200.00 </p>
                <p className="initialprice"> ₦1400.00 </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={tv} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Television sets </p>
                <p className="priceofitem"> ₦1200.00 </p>
                <p className="initialprice"> ₦1400.00 </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={washingmachine} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Washing Machine </p>
                <p className="priceofitem"> ₦1200.00 </p>
                <p className="initialprice"> ₦1400.00 </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={shoes} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Eye glasses </p>
                <p className="priceofitem"> ₦1200.00 </p>
                <p className="initialprice"> ₦1400.00 </p>
              </div>
            </div>
          </div>
        </section>

        <section className="topproducts">
          <div className="producttitle">
            <p className="realtitle"> Top Products </p>
            <p className="secondtitle"> See all Products </p>
          </div>

          <div className="items">
            <div className="eachItem">
              <img src={femaleshoes} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Female shoes </p>
                <p className="priceofitem"> ₦1200.00 </p>
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
            <div className="eachItem">
              <img src={tshirt} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Shirt </p>
                <p className="priceofitem"> ₦1200.00 </p>
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
            <div className="eachItem">
              <img src={clippers} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Hair Clipper </p>
                <p className="priceofitem"> ₦1200.00 </p>
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
            <div className="eachItem">
              <img src={eyeglases} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Eye glasses </p>
                <p className="priceofitem"> ₦1200.00 </p>
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
          </div>

        </section>

        <section className="registered">
          <h3> Registered Stores </h3>
          <div className="otherImages">
            <div className="firstSection">
              <div>
                <img src={bamboStore} alt="eachStoreLogo" />
                <p> Adebambo Store </p>
              </div>
              <div>
                <img src={humtpaint} alt="eachStoreLogo" />
                <p> Humt Paint </p>
              </div>
              <div>
                <img src={xycee} alt="eachStoreLogo" />
                {/* <p> Xycee Collections </p> */}
              </div>
              <div>
                <img src={woconsult} alt="eachStoreLogo" />
                {/* <p> Wo Consulting </p> */}
              </div>
            </div>
            <div className="secondSection">
              <div>
                  <img src={mofeGadgets} alt="eachStoreLogo" />
                  {/* <p> Mofe's Gadget </p> */}
                </div>
                <div>
                  <img src={myconsul} alt="eachStoreLogo" />
                  <p> MyConsul </p>
                </div>
                <div>
                  <img src={electrify} alt="eachStoreLogo" />
                  <p> Electrify Me </p>
                </div>
            </div>
          </div>
        </section>

        <section className="topcategories">
          <h3> Top Categories</h3>
          <div className="imageitems">
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
          </div>

          <div className="thebutton">
          <Link to="/allcategories">
            <button type="button">
               See all categories
            </button>
            </Link>
          </div>
        </section>

        <section className="topdeals">
          <p className="dealtitle"> Trending Services </p>

          <div className="items">
            <div className="eachItem">
              <img src={report} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Report writing </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={consultation} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Consultation </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={businesstalk} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Business talk </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={electrify} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Electrical servicing </p>
              </div>
            </div>
          </div>
        </section>

    </div>

  );

};
