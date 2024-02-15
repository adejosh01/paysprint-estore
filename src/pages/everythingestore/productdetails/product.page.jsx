import './product.styles.scss';
import { useEffect } from 'react';
import starimage from "assets/images/star.png";
import product1 from 'assets/images/estore/productDetails/firstprod.png';
import cokesecond from 'assets/images/estore/productDetails/cokesecond.png';
import cokethird from 'assets/images/estore/productDetails/cokethird.png';
import cokefourth from 'assets/images/estore/productDetails/cokefourth.png';
import normalpepsi from 'assets/images/estore/productDetails/pepsi.png';
import sevenUp from 'assets/images/estore/productDetails/7up.png';
import cokeandfanta from 'assets/images/estore/productDetails/fantaandcoke.png';
import cannedpepsi from 'assets/images/estore/productDetails/cannedpepsi.png';


export const ProductDetails = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className='oneproduct'>
                <div className='imagessection'>
                    <div className='themainimage'>
                        <img src={product1} alt="eachproductImage" />
                    </div>
                    <div className="otherimages">
                        <img src={cokesecond} alt="relateditems in the same store" />
                        <img src={cokethird} alt="relateditems in the same store" />
                        <img src={cokefourth} alt="relateditems in the same store" />
                    </div>
                </div>

                <div className="describingtheimages">
                    <h2> Coca cola 60cl * 12</h2>
                    <div className='longpiece'>
                        <h4> Description</h4>
                        <p> Coca cola is an international fashion clothing and accessory store. Focusing on the very latest in affordable Jumia fashion styles, both attire and stunning accessories, we feature many newest product lines, providing maximum choice and convenience to our discerning clientele. We also aim to provide an extensive range of high quality, trendy fashion clothing together to our valued customers. Our goal is always to provide our customers with stunning, high quality fashion products at down to earth prices. Yoo To offers trending fashion-forward styles, edgy and innovative designs all delivered with a truly class-leading professional service. </p>
                        <div className='ratings'>
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
                    
                    <p className='storedealer'>Store: <span style={{ color: '#2D334A' }}> Zee Cola's store</span> </p>
                    <p className='amount'> #1200.00</p>
                    <div className='justbuttons'>
                        <button type='button'> 
                            <p> Add to cart </p>
                        </button>
                        <button type='button'> 
                            <p> Buy now </p>
                        </button>
                    </div>
                </div>
            </section>

            <section className='similarproducts'>
                <div className="producttitle">
                    <p> Similar Products </p>
                </div>

                <div className="items">
                    <div className="eachItem">
                        <img className='fortheimages' src={ normalpepsi } alt="eachImage" />
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
                        <img className='fortheimages' src={sevenUp} alt="eachImage" />
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
                        <img className='fortheimages' src={cokeandfanta} alt="eachImage" />
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
                        <img className='fortheimages' src={cannedpepsi} alt="eachImage" />
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

        </div>
    );
};