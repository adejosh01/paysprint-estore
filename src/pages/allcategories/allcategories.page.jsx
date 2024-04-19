// import "./allcategories.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import axios from "axios";
import config from "../../config";
import { Categories } from "components/categories";

export const AllCategories = ({ title }) => {
  const [productCategory, setProductCategory] = useState([]);
  const apiUrl = config().baseUrl;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('categoryname');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

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
          
        <Categories />

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
