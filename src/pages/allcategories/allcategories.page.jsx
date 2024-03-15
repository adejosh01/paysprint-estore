import { BottomNav } from "components/bottom-navs";
import "./allcategories.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import chair from "assets/images/estore/allcategories/category1.png";
import secondchair from "assets/images/estore/allcategories/category2.png";
import thirdchair from "assets/images/estore/allcategories/category3.png";
import gadget from "assets/images/estore/allcategories/category4.png";
import secondgadget from "assets/images/estore/allcategories/category5.png";
import thirdgadget from "assets/images/estore/allcategories/category6.png";
import axios from "axios";

export const AllCategories = ({ title }) => {
  const [data, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.100.108:8000';

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/api/v1/ashopree/product/category`) 
    .then(response => {
      setData(response.data.data);
    })

    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // console.log(data);

  }, []);


  return (
    <div className="estore-container">
  
        <section className="allcats">
          <div className="sidebar">
            <h4> Category</h4>
            <div>
                {Array.isArray(data) && data.map((item, index) => (
                  <div>
                    <p key={index}>{item.category}</p>
                  </div>
                ))} 
                    
                {!Array.isArray(data) && <div>Error: Sorry, Please check your network connection and try again</div>}
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
