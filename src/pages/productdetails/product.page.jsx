import './product.styles.scss';
import React, { useEffect, useState } from 'react';  
import starimage from "assets/images/star.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { handleClick, stripHtmlTags, useCounter, notificationAlert, useCounterForEdit } from 'utils/utils';
import { useAuth } from 'hook/AuthProvider';
import config from '../../config';
import { Loader } from 'components/loader/loader.component';
import { RESPONSE_STATES } from 'utils/constants';
import productstuff from 'assets/images/estore/personalStore/prod2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


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


            {/* {similarProduct.length > 0 ? (
                <section className='similarproducts'>
                    <div className="producttitle">
                        <p> Similar Products </p>
                    </div>

                    <div className="items">
                        {similarProduct.map((item, index) => (
                            <>
                                <Link to={`/productdetails/${item.productCode}`}>
                                    <div className="eachItem" key={index}>
                                        <img className='fortheimages' src={item.image} alt="eachImage" />
                                        <div className="imgdescription">
                                            <p className="nameofitem">{item.productName}</p>
                                            <p className="priceofitem">{Object.keys(item.myCountryConversion).length > 0 ? item.myCountryConversion?.mycurrencysymbol + Number(item.myCountryConversion?.myamount).toFixed(2) : item.currencySymbol + Number(item.amount).toFixed(2)}</p>

                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))}
                    </div>
                </section>
            ) : (
                <div>Loading ... </div>
            )} */}
        </div>
    );

    
};

