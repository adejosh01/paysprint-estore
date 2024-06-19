import './product.styles.scss';
import React, { useEffect, useState } from 'react';  
import starimage from "assets/images/star.png";
import starimage_with_noBg from "assets/images/star_with_null_bg.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { handleClick, stripHtmlTags, useCounter, notificationAlert, useCounterForEdit } from 'utils/utils';
import { useAuth } from 'hook/AuthProvider';
import config from '../../config';
import { Loader } from 'components/loader/loader.component';
import { RESPONSE_STATES } from 'utils/constants';
import productstuff from 'assets/images/estore/personalStore/prod2.png';
import similiarOne from 'assets/images/estore/productDetails/pepsi.png';
import sevenUp from 'assets/images/estore/productDetails/7up.png';
import cokeAndFanta from 'assets/images/estore/productDetails/fantaandcoke.png';
import cannedPepsi from 'assets/images/estore/productDetails/cannedpepsi.png';
import profile_photo from 'assets/images/estore/rectangle-20.png';
import profile_photo2 from 'assets/images/estore/rectangle-27.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ProgressBarForProduct from 'components/loader/progressBarForProduct.component';


export const ProductDetails = ({ title }) => {
    const apiUrl = config().baseUrl;
    const [responseState, setResponseState] = useState(RESPONSE_STATES.none);
    const user = useAuth();
    const { productCode } = useParams();
    const [specificProduct, setData] = useState([]);
    const [similarProduct, setSimilarProduct] = useState([]);
    const [ setError] = useState(null);
    const { count, increment, decrement } = useCounter(1);
    const navigate = useNavigate();
    const [myProduct, setSingleItemCartCount] = useState({});
    const { countForEdit, incrementForEdit, decrementForEdit } = useCounterForEdit(myProduct ? myProduct.quantity : 1 );


    const addToCart = async (productId) => {
        try {
            
            setResponseState(RESPONSE_STATES.loading);

            if (count < 1) return notificationAlert('error', 'Oops!', 'Quantity must be greater than zero.');
            
            const data = {
                productId,
                quantity: count
            }
            const configuration = {
                method: "POST",
                url: `${apiUrl}/shop/product/addtocart`,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
                data
            }

            const response = await axios(configuration);
            notificationAlert('success', 'Cart!', response.data.message);
            setResponseState(RESPONSE_STATES.none);

        } catch (error) {
            setResponseState(RESPONSE_STATES.error);

            if(error.response) {
                if (error.response.status === 401) {
                    setTimeout(() => window.location.href = '/login', 1000);
                } else {
                    notificationAlert('error', 'Oops!', error.response.data.message);
                }
            } else {
                notificationAlert('error', 'Oops!', error.message);
            }
        }
    }

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/specific/${productCode}`) 
    .then(response => {
        setData(response.data.data[0].product);
        setSimilarProduct(response.data.data[0].similarProduct);
    }).catch(error => {
      setError('Error fetching product using a specific product code: ' + error.message);
    });


    const getCartItems = async () => {
        try {
            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/shop/product/loadmycart`,
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            };
    
            const response = await axios(thisconfig);
            const cartItems = response.data.data;
            // Get the specificProduct in cartItems based on productName
            const specificCartItem = cartItems.find(item => item.productName === specificProduct.productName);

            if (specificCartItem) {
                setSingleItemCartCount(specificCartItem);

            }
            
            // console.log("My quantity is: " + cartItems[0].quantity); 
            
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    getCartItems();


    }, [setError, apiUrl, productCode, title, specificProduct.productName, user.token]);

    return (
        <div className="estore-container">
            
                <section className='oneproduct'>
                    <div className='imagessection'>
                        <div className="themainimage">
                            <img src={productstuff} alt="myStoreImage" />
                        </div>

                        <div className="otherimages">
                            <img src={productstuff} alt="myStoreImage" />
                        </div>
                    </div>

                    <div className="describingtheimages">
                        <h2> IAV Quality Slide With Double Sole And Thick Bottom </h2>
                        <div className='longpiece'>
                            <h4> Description</h4>
                            <p> This item is Every fashionable man's dream. Made to last a lifetime from high-quality materials. It is simple to clean, maintain, and very durable, allowing the product to retain its luster for years. The shoes are made in Ghana, so the size is African Size. You can choose the shoe size according to your foot length. Note: If your feet are slightly wider than usual, we recommend choosing one size larger. Attention. The packaging is in a shoe box with our brand name iav. Dear Customer, please choose the item according to your foot length. Happy Shopping </p>
                            <div className='dynamic'>
                                <div>
                                    <p className='choose'> Choose a color </p>
                                    <div className="checkbtns">
                                        <button type='button' className='first'> <FontAwesomeIcon icon={faCheck} /> </button>
                                        <button type='button' className='second'>  </button>
                                        <button type='button' className='third'>  </button>
                                        <button type='button' className='fourth'>  </button>
                                        <button type='button' className='fifth'>  </button>
                                    </div>
                                </div>
                                <div>
                                    <p className='choose'> Choose a size </p>
                                    <div className="checkinputs">
                                        <p className='active'> <input type="radio" name="" id="" /> Small </p>
                                        <p className=''> <input type="radio" name="" id="" /> Medium </p>
                                        <p className=''> <input type="radio" name="" id="" /> Large </p>
                                        <p className=''> <input type="radio" name="" id="" /> Extra Large </p>
                                        <p className=''> <input type="radio" name="" id="" /> XXL </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='choose'> Quantity </p>
                                    <div className="quantity">
                                        <button type='button'> - </button>
                                        <p> 2 </p>
                                        <button type='button'> + </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='storedealer' style={{ marginBottom: '-1rem' }} >Store: <span> Ibrahim Aminu Ventures </span> </p>
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
                        <p className='amount'> $450.00 </p>
                        <form className='justbuttons'>
                            <button type='button'> Add to cart </button>
                            <button type='button'> Buy now </button>
                        </form>
                    </div>
                </section>


                <section className='similarproducts'>
                    <div className="producttitle">
                        <p> Similar Products </p>
                    </div>

                    <div className="items">
                        <Link to={`/productdetails/`}>
                            <div className="eachItem">
                                <img className='fortheimages' src={similiarOne} alt="eachImage" />
                                <div className="imgdescription">
                                    <p className="nameofitem"> Coca cola 60cl -  1 crate  </p>
                                    <p className="priceofitem"> ₦1200.00 </p>
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
                            </div>
                        </Link>

                        <Link to={`/productdetails/`}>
                            <div className="eachItem">
                                <img className='fortheimages' src={sevenUp} alt="eachImage" />
                                <div className="imgdescription">
                                    <p className="nameofitem"> Coca cola 60cl -  1 crate  </p>
                                    <p className="priceofitem"> ₦1200.00 </p>
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
                            </div>
                        </Link>

                        <Link to={`/productdetails/`}>
                            <div className="eachItem">
                                <img className='fortheimages' src={cokeAndFanta} alt="eachImage" />
                                <div className="imgdescription">
                                    <p className="nameofitem"> Coca cola 60cl -  1 crate  </p>
                                    <p className="priceofitem"> ₦1200.00 </p>
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
                            </div>
                        </Link>

                        <Link to={`/productdetails/`}>
                            <div className="eachItem">
                                <img className='fortheimages' src={cannedPepsi} alt="eachImage" />
                                <div className="imgdescription">
                                    <p className="nameofitem"> Coca cola 60cl -  1 crate  </p>
                                    <p className="priceofitem"> ₦1200.00 </p>
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
                            </div>
                        </Link>
                    </div>
                </section>

                <section className="feedbacks">
                    <div className="feeds">
                        <h5> Customers Feedback </h5>
                        <div className='all'>
                            <h3> 4.5 </h3>
                            <div>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                            </div>
                            <p className="initialprice"> 132 product reviews and rating </p>
                        </div>
                    </div>

                    <div className="detailed-ratings">
                        <div className='together'>
                            <div className='progress'> <ProgressBarForProduct width={90} /> </div>
                            <div className='stars'>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                            </div>
                            <p> 70% </p>
                        </div>
                        <div className='together'>
                            <div className='progress'> <ProgressBarForProduct width={40} /> </div>
                            <div className='stars'>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                            </div>
                            <p> 15% </p>
                        </div>
                        <div className='together'>
                            <div className='progress'> <ProgressBarForProduct width={30} /> </div>
                            <div className='stars'>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                            </div>
                            <p> 10% </p>
                        </div>
                        <div className='together'>
                            <div className='progress'> <ProgressBarForProduct width={20} /> </div>
                            <div className='stars'>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                            </div>
                            <p> 3% </p>
                        </div>
                        <div className='together'>
                            <div className='progress'> <ProgressBarForProduct width={10} /> </div>
                            <div className='stars'>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                                <img src={starimage_with_noBg} className='with-no-bg' alt="justtheIconOfAStar" />
                            </div>
                            <p> 2% </p>
                        </div>
                    </div>
                </section>

                <section className="reviews">
                    <h5> Reviews </h5>

                    <div className="contents">
                        <div className="each">
                            <img src={profile_photo} alt="username comes here" />
                            <div className='combine'>
                                <div className='head'>
                                    <h6> Nicolas cage <span> 3 Days ago </span> </h6>
                                    <div className='ratings'>
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                    </div>
                                </div>
                                <div className='body'>
                                    <h6> Great Product </h6>
                                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="each">
                            <img src={profile_photo2} alt="username comes here" />
                            <div className='combine'>
                                <div className='head'>
                                    <h6> Sr.Robert Downey <span> 3 Days ago </span> </h6>
                                    <div className='ratings'>
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                        <img src={starimage} alt="justtheIconOfAStar" />
                                    </div>
                                </div>
                                <div className='body'>
                                    <h6> The best product In Market </h6>
                                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <a href='/reviews' className='view-all-reviews'> View All Reviews </a>
                </section>
        </div>
    );

    
};

