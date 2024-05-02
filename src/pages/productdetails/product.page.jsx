import './product.styles.scss';
import React, { useEffect, useState } from 'react';  
import starimage from "assets/images/star.png";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { stripHtmlTags } from 'utils/utils';


export const ProductDetails = ({ title }) => {
    const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';
    const { productCode } = useParams();
    const [specificProduct, setData] = useState([]);
    const [error, setError] = useState(null);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const convertedAmount = urlParams.get('r');

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/specific/${productCode}`) 
    .then(response => {
        console.log(response.data.data);
      setData(response.data.data);
    }).catch(error => {
      setError('Error fetching product using a specific product code: ' + error.message);
    });


    }, [apiUrl, productCode, title]);

    // console.log(specificProduct);

    return (
        <div className="estore-container">
            {specificProduct.length !== 0 ? (
                Array.isArray(specificProduct) ? (
                    specificProduct.map((item, index) => (
                        <section className='oneproduct' key={index}>
                            <div className='imagessection'>
                                <div className="themainimage">
                                    <img src={item.product.image} alt="myStoreImage" />
                                </div>

                                <div className="otherimages">
                                    <img src={item.product.image} alt="myStoreImage" />
                                </div>
                            </div>

                            <div className="describingtheimages">
                                <h2> {item.product.productName}</h2>
                                <div className='longpiece'>
                                    <h4> Description</h4>
                                    <p> {typeof item.product.description === 'string' ? stripHtmlTags(item.product.description) : item.product.description} </p> 
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
                                
                                <p className='storedealer'>Store: <span style={{ color: '#2D334A' }}> {item.product.businessname} </span> </p>
                                <p className='amount'> {item.product.currencySymbol+Number(item.product.amount).toFixed(2)} </p>
                                <div className='justbuttons'>
                                    <button type='button' id={`${item.product.productCode}`}> 
                                        <a href='/mycart'> Add to cart </a>
                                    </button>
                                    <button type='button'> 
                                        <Link href='#'> Buy now </Link>
                                    </button>
                                </div>
                            </div>
                        </section>
                    ))
                ) : (
                    <div>Error: {error}</div>
                )
            ) : (
                <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading.... </p>
            )}


            {Array.isArray(specificProduct) ? (
                <section className='similarproducts'>
                    <div className="producttitle">
                        <p> Similar Products </p>
                    </div>

                    <div className="items">
                        {specificProduct.map((item, index) => (
                            <React.Fragment key={index}> 
                                {Array.isArray(item.similarProduct) && item.similarProduct.map((singleProduct, subIndex) => (
                                    <Link to={`/productdetails/${singleProduct.productCode}`} key={index}>
                                        <div className="eachItem" key={subIndex}>
                                            <img className='fortheimages' src={singleProduct.image} alt="eachImage" />
                                            <div className="imgdescription">
                                                <p className="nameofitem">{singleProduct.productName}</p>
                                                <p className="priceofitem">{singleProduct.myCountryConversion ? singleProduct.myCountryConversion.mycurrencysymbol + Number(singleProduct.myCountryConversion.myamount).toFixed(2) : singleProduct.currencySymbol + Number(singleProduct.amount).toFixed(2)}</p>
                                                {/* <div>
                                                    <span>
                                                        <img src={starimage} alt="justtheIconOfAStar" />
                                                        <img src={starimage} alt="justtheIconOfAStar" />
                                                        <img src={starimage} alt="justtheIconOfAStar" />
                                                        <img src={starimage} alt="justtheIconOfAStar" />
                                                        <img src={starimage} alt="justtheIconOfAStar" />
                                                    </span>
                                                    <p className="initialprice">4.56 132(reviews)</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            ) : (
                <div>Error: {error}</div>
            )}

        </div>
    );

    
};

