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

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/specific/${productCode}`) 
    .then(response => {
      setData(response.data.data);
    }).catch(error => {
      setError('Error fetching product using a specific product code: ' + error.message);
    });

    if(!specificProduct) {
        <div> Loading, please wait.......</div>
    }

    }, [apiUrl, productCode]);

    console.log(specificProduct);

    return (
        <div className="estore-container">

            {Array.isArray(specificProduct) ? (specificProduct.map((item, index) => (
                <section className='oneproduct'>
                    <div className='imagessection'>
                        <div className="themainimage" key={index}>
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
                        
                        <p className='storedealer'>Store: <span style={{ color: '#2D334A' }}> {item.product.businessname} </span> </p>
                        <p className='amount'> {item.product.currencySymbol + item.product.amount} </p>
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
                                    <div className="eachItem" key={subIndex}>
                                        <img className='fortheimages' src={singleProduct.image} alt="eachImage" />
                                        <div className="imgdescription">
                                            <p className="nameofitem">{singleProduct.productName}</p>
                                            <p className="priceofitem">{singleProduct.currencySymbol + singleProduct.amount}</p>
                                            <div>
                                                <span>
                                                    <img src={starimage} alt="justtheIconOfAStar" />
                                                    <img src={starimage} alt="justtheIconOfAStar" />
                                                    <img src={starimage} alt="justtheIconOfAStar" />
                                                    <img src={starimage} alt="justtheIconOfAStar" />
                                                    <img src={starimage} alt="justtheIconOfAStar" />
                                                </span>
                                                <p className="initialprice">4.56 132(reviews)</p>
                                            </div>
                                        </div>
                                    </div>
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

