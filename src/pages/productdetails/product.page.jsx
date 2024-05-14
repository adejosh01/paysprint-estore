import './product.styles.scss';
import React, { useEffect, useState } from 'react';  
// import starimage from "assets/images/star.png";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { stripHtmlTags } from 'utils/utils';
import { useAuth } from 'hook/AuthProvider';
import config from '../../config';


export const ProductDetails = ({ title }) => {
    const apiUrl = config().baseUrl;
    const user = useAuth();
    const { productCode } = useParams();
    const [specificProduct, setData] = useState([]);
    const [similarProduct, setSimilarProduct] = useState([]);
    const [error, setError] = useState(null);
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const convertedAmount = urlParams.get('r');

    const addToCart = async (productId) => {
        try {
            const data = {
                productId,
                quantity: 1
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
            alert(response.data.message);
        } catch (error) {
            console.log(error);
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


    }, [apiUrl, productCode, title]);

    // console.log(specificProduct);

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
                        <div className='justbuttons'>
                            <button type='button' onClick={() => addToCart(specificProduct.id)} id={`${specificProduct.id}`}>
                                Add to cart
                            </button>
                            <button type='button'>
                                <Link href='#'> Buy now </Link>
                            </button>
                        </div>
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

