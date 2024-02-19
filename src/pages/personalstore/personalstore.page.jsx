import "./personalstore.styles.scss";
import { useEffect } from "react";
import userProductIcon from 'assets/images/estore/products/product1.png';
import product1 from "../../assets/images/estore/personalStore/prod.png";
import product2 from "../../assets/images/estore/personalStore/prod2.png";
import product3 from "../../assets/images/estore/personalStore/prod3.png";
import product4 from "../../assets/images/estore/personalStore/prod4.png";
import product5 from "../../assets/images/estore/personalStore/prod5.png";
import product6 from "../../assets/images/estore/personalStore/prod6.png";
import product7 from "../../assets/images/estore/personalStore/prod7.png";
import product8 from "../../assets/images/estore/personalStore/prod8.png";
import starimage from "assets/images/star.png";
import tailoring from "../../assets/images/estore/personalStore/image1.png";
import fashion from "../../assets/images/estore/personalStore/image2.png";
import style from "../../assets/images/estore/personalStore/image3.png";



export const Personalstore = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="estore-container">
        
        <section className="getpersonalStore">
              <div className="describeProds">
                  <div className="b4Everything">

                    <div className="titleOnly">
                      <h2> Welcome to </h2>
                    </div>

                    <div className="headerStuffs">
                      <img src={userProductIcon} alt="thestoreprofileimage" />
                      <p> Adebambo's Store</p>
                    </div>
                    
                    <div className="btnandtext">
                        <p> We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products, from fashion and beauty to home essentials and gadgets. Our mission is to provide unparalleled customer satisfaction through exceptional service and top-notch quality. </p>
                        <button>
                          Order a service
                        </button>
                    </div>
                  </div>

              </div>

        </section>

        <section className="ourproducts">
          <div className="producttitle">
            <p className="realtitle"> Our Products </p>
            {/* <p className="secondtitle"> See all Products </p> */}
          </div>

          <div className="items">
            <div className="eachItem">
              <img src={ product1 } alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Men Shirt </p>
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
              <img src={product2} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Men shirt </p>
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
              <img src={product3} alt="eachImage" />
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
              <img src={product4} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Trousers </p>
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
              <img src={product5} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Coca cola 60cl - 1 crate </p>
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
              <img src={product6} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Coca cola 60cl - 1 crate </p>
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
              <img src={product7} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Coca cola 60cl - 1 crate </p>
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
              <img src={product8} alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Coca cola 60cl - 1 crate </p>
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

        <section className="ourservice">
          <div className="producttitle">
            <p className="realtitle"> Our Products </p>
            {/* <p className="secondtitle"> See all Products </p> */}
          </div>

          <div className="items">
            <div className="eachItem">
              <img src={ tailoring } alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Tailoring </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={ fashion } alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Fashion Design </p>
              </div>
            </div>
            <div className="eachItem">
              <img src={ style } alt="eachImage" />
              <div className="imgdescription">
                <p className="nameofitem"> Styling </p>
              </div>
            </div>
          </div>
        </section>

    </div>

  );

};
