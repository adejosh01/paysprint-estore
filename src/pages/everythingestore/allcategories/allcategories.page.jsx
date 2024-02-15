import { BottomNav } from "components/bottom-navs";
import "./allcategories.scss";
import { useEffect } from "react";
import starimage from "assets/images/star.png";
import chair from "assets/images/estore/allcategories/category1.png";
import secondchair from "assets/images/estore/allcategories/category2.png";
import thirdchair from "assets/images/estore/allcategories/category3.png";
import gadget from "assets/images/estore/allcategories/category4.png";
import secondgadget from "assets/images/estore/allcategories/category5.png";
import thirdgadget from "assets/images/estore/allcategories/category6.png";

export const AllCategories = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="estore-container">
        
        <section className="allcats">
          <div className="sidebar">
            <h4> Category</h4>
            <div style={{  display: 'flex', flexDirection: 'column' , padding: '2rem 2rem', gap: '4rem' }}>
              <div style={{  padding: '1.5rem 0' }}>
                <p> Home & Office </p>
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
            <div className="homeandoffice">
              <div className="producttitle">
                  <p className="realtitle"> Home & Office </p>
                  <p className="secondtitle"> See all </p>
              </div>

              <div className="items">
                  <div className="eachItem">
                    <img src={chair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair </p>
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
                    <img src={secondchair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair + table </p>
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
                    <img src={thirdchair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Workspace set up </p>
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
            </div>

            <div className="homeandoffice">
              <div className="producttitle">
                  <p className="realtitle"> Electronics </p>
                  <p className="secondtitle"> See all </p>
              </div>

              <div className="items">
                  <div className="eachItem">
                    <img src={gadget} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair </p>
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
                    <img src={secondgadget} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair + table </p>
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
                    <img src={thirdgadget} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Workspace set up </p>
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
            </div>

            <div className="homeandoffice">
              <div className="producttitle">
                  <p className="realtitle"> Electronics </p>
                  <p className="secondtitle"> See all </p>
              </div>

              <div className="items">
                  <div className="eachItem">
                    <img src={chair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair </p>
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
                    <img src={secondchair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Office chair + table </p>
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
                    <img src={thirdchair} alt="eachImage" />
                    <div className="imgdescription">
                        <p className="nameofitem"> Workspace set up </p>
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
            </div>

          <BottomNav />

          </div>

       </section>
       

    </div>

  );

};
