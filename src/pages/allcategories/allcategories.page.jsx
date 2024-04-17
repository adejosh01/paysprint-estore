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
import config from "../../config";
import { Link } from "react-router-dom";

export const AllCategories = ({ title }) => {
  const [data, setData] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const apiUrl = config().baseUrl;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('categoryname');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`) 
    .then(response => {
      setData(response.data.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });

    axios.get(`${apiUrl}/ashopree/product/category/${category}`) 
    .then(response => {
      setProductCategory(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });

  // console.log(data);

  }, [apiUrl, title]);


  return (
    <div className="estore-container">
  
        <section className="allcats">
          <div className="sidebar">
            <h4> Category</h4>
            {data.length !== 0 ? (
              <div>
                  {Array.isArray(data) && data.map((item, index) => (
                    <a href={`/allcategories?categoryname=${item.category}`} key={index}>
                      <div>
                        <p >{item.category}</p>
                      </div>
                    </a>
                  ))} 
                      
                  {!Array.isArray(data) && <div>Error: Sorry, Please check your network connection and try again</div>}
              </div>
            ) : (

              <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading... </p>
            )}
          </div>

          <div className="maincontent">
            <div className="homeandoffice">
              <div className="producttitle">
                  <p className="realtitle"> {category} </p>
                  <p className="secondtitle"> See all </p>
              </div>

              <div className="items">

              {
                
                productCategory.status === 200 ? (
                  productCategory.data.length > 0 ? (
                    <>
                      {productCategory.data.map((item, index) => (
                        <>
                          <div className="eachItem" key={index}>
                            <img src={item.image} alt={item.productName} />
                            <div className="imgdescription">
                              <p className="nameofitem"> {item.productName} </p>
                              <p className="priceofitem"> {item.currencySymbol + '' + Number(item.amount).toFixed()} </p>
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
                        </>
                      ))}
                    </>
                  ) : (
                    <p>
                      No product found for this category.
                    </p>
                  )
                ) : (
                  <p>Loading ...</p>
                )
              }

              

                  
              </div>


            </div>


          {/* <BottomNav /> */}

          </div>

       </section>
       

    </div>

  );

};
