import './product.styles.scss';
import React, { useEffect, useState } from 'react';  
// import starimage from "assets/images/star.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { handleClick, stripHtmlTags, useCounter, notificationAlert, useCounterForEdit } from 'utils/utils';
import { useAuth } from 'hook/AuthProvider';
import config from '../../config';
import { Loader } from 'components/loader/loader.component';
import { RESPONSE_STATES } from 'utils/constants';


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
    const {  incrementForEdit, decrementForEdit } = useCounterForEdit(myProduct.quantity);


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
            const cartItems = response.data.data[0];
            // Get the specificProduct in cartItems based on productName
            const specificCartItem = cartItems.find(item => item.productName === specificProduct.productName);
            
            // console.log("My quantity is: " + cartItems[0].quantity);
    
            // Update the set state with the specific product
            setSingleItemCartCount(specificCartItem);
            
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    getCartItems();


    }, [setError, apiUrl, productCode, title, specificProduct.productName, user.token]);

    console.log(myProduct.quantity);  

    return (
        <div className="estore-container">
            {Object.keys(specificProduct).length > 0 ? (
                <section className='oneproduct'>
                    <div className='imagessection'>
                        <div className="themainimage">
                            <img src={specificProduct.image} alt="myStoreImage" />
                        </div>

                        <div className="otherimages">
                            <img src={specificProduct.image} alt="myStoreImage" />
                        </div>
                    </div>

                    <div className="describingtheimages">
                        <h2> {specificProduct.productName}</h2>
                        <div className='longpiece'>
                            <h4> Description</h4>
                            <p> {typeof specificProduct.description === 'string' ? stripHtmlTags(specificProduct.description) : specificProduct.description} </p>
                            {/* <div className='ratings'>
                                        <span>
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                        </span>
                                        <p className="initialprice"> 4.56 (132 reviews) </p>
                                    </div> */}
                        </div>

                        <p className='storedealer'>Store: <span style={{ color: '#2D334A' }}> {specificProduct.businessname} </span> </p>
                        <p className='amount'> {specificProduct.currencySymbol + Number(specificProduct.amount).toFixed(2)} </p>
                        <form className='justbuttons'>
                            <div>
                                {Object.values(myProduct).length !== 0 ? ( <>
                                    <h5> Quantity: <input type="number" name='quantity' value={myProduct.quantity} /> </h5>
                                    <div>
                                        <button type='button' onClick={incrementForEdit}> + </button>
                                        <button type='button' onClick={decrementForEdit}> - </button>
                                    </div>
                                    {myProduct.quantity <= 0 ? (
                                        <button type='button' className='add2cart' onClick={() => notificationAlert("error", "Try Again", "Sorry, your updated quantity cannot be less than zero")}>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <button type='button' className='add2cart' onClick={() => addToCart(specificProduct.id)} id={`${specificProduct.id}`}>
                                            {responseState === RESPONSE_STATES.loading ? <Loader /> : "Add to cart"}
                                        </button>
                                    )}

                                </>) : (<> 
                                        <h5> Quantity: <input type="number" name='quantity' value={count} /> </h5>
                                    <div>
                                        <button type='button' onClick={increment}> + </button>
                                        <button type='button' onClick={decrement}> - </button>
                                    </div>
                                    {count <= 0 ? (
                                        <button type='button' className='add2cart' onClick={() => notificationAlert("error", "Try Again", "Sorry, your quantity cannot be less than zero")}>
                                            Add to cart
                                        </button>
                                    ) : (
                                        <button type='button' className='add2cart' onClick={() => addToCart(specificProduct.id)} id={`${specificProduct.id}`}>
                                            {responseState === RESPONSE_STATES.loading ? <Loader /> : "Add to cart"}
                                        </button>
                                    )}

                                </>)}
                            </div>
                            <button type='button' onClick={ () => handleClick('/messages', navigate) }>
                                Buy now
                            </button>
                        </form>
                    </div>
                </section>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading.... </p>
            )}


            {similarProduct.length > 0 ? (
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
            )}
        </div>
    );

    
};

