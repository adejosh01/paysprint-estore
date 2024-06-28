import "./allcategories.scss";
import { useEffect, useState } from "react";
import starimage from "assets/images/star.png";
import axios from "axios";
import config from "../../config";
import { SideBarCategories } from "components/sidebarCategories/sidebarCategories";
import { Card } from "antd";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import {  handleClick } from "utils/utils";

export const AllCategories = ({ title }) => {
  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const apiUrl = config().baseUrl;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get('categoryname');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category/${category}`)
      .then(response => {
        setProductCategory(response.data);
        setLoading(false); // Update loading state when data is fetched
      }).catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Update loading state in case of error
      });
  }, [apiUrl, title, category]);

  return (
    <div className="estore-container">
      <section className="allcats">
        <SideBarCategories />
        <div className="maincontent">
          <div className="homeandoffice">
            <div className="producttitle">
              <p className="realtitles"> {category} </p>
              <p className="secondtitle"> See all </p>
            </div>
            <div className="items">
              {/* Conditional rendering based on loading state */}
              {loading ? (
                <div className="skeleton-row">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="skeleton-item">
                      <Skeleton height={300} width={250} /> {/* Adjust dimensions to match Card */}
                    </div>
                  ))}
                </div>
              ) : (
                productCategory.status === 200 ? (
                  productCategory.data.length > 0 ? (
                    <>
                      {productCategory.data.map((item, index) => (
                        <div key={index}>
                          <Card className="eachItem" hoverable style={{ width: '100%' }} cover={<img src={item.image} alt={item.productName} onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)} />}>
                            <div className="imgdescription">
                              <p className="nameofitems"> {item.productName} </p>
                              <p className="priceofitems"> {item.currencySymbol + '' + Number(item.amount).toFixed()} </p>
                              <div>
                                <span>
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                  <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="reviews"> 4.56 (132 reviews) </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p style={{ width: '100%' }}>
                      No products found for this category. Please select another category.
                    </p>
                  )
                ) : (
                  <p>Loading ...</p>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
