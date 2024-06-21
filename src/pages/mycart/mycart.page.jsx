import './mycart.styles.scss';
import { useEffect, useState } from 'react';
// import deleteIcon from 'assets/icons/trashcan.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { performOperation } from 'components/randomFunctions/counter';
import config from "../../config";
import axios from "axios";
import { useAuth } from "../../hook/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import countries from '../../utils/dummyCountriesDatas/countries.js';
import { handleClick } from 'utils/utils';



export const MyCarts = ({ title }) => {
    const navigate = useNavigate();
    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const [merchantInfo, setMerchantInfo] = useState();
    const [sumTotal, setSumTotal] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState('');
    const location = useLocation();
    const pathname = new URLSearchParams(location.search);
    const getCountryFromUrl = pathname.get('country');

    

    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
        if (selectedCountry) {
            window.location.href = `?country=${selectedCountry}`;
        } 
    };


    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);

        const getCartItems = async () => {

            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/shop/product/loadmycart`,
                headers: {
                    Authorization: 'Bearer ' + auth.token
                }
            }

            const response = await axios(thisconfig);

            setCartItem(response.data.data);
            setMerchantInfo(response.data.merchant);

            if ((response.data.data).length > 0) {
                var cartTotal = [];
                for (let i = 0; i < response.data.data.length; i++) {
                    const arrTotal = Number(response.data.data[i].price * response.data.data[i].quantity);
                    cartTotal.push(arrTotal);
                }

                const sum = cartTotal.reduce((total, n) => total + n, 0);
                setSumTotal(sum);

            }

        }

        getCartItems();

        if (getCountryFromUrl) {
            setSelectedCountry(getCountryFromUrl);
          }

    }, [title, apiUrl, auth.token, getCountryFromUrl]);

    // console.log(cartItem);

    return (
        <div className="estore-container">
            <section className="maincontent">
                <div className="relevantstuffs">
                    <div className='titlesandall'>
                        <h1> My Cart <span> ({cartItem.length}) </span> </h1>

                        {/* {cartItem.length > 0 ? (
                            <>
                                <button type='button' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <img src={deleteIcon} alt="the trash bin" /> Remove All
                                </button>
                            </>
                        ) : null} */}

                    </div>

                    <div className='sortby'>
                        <h5> Sort items by country </h5>
                        
                        <select value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='details'>
                        <div className="table-container" >
                            <table className="custom-table">
                                <thead>
                                    <th> Product</th>
                                    <th> Description</th>
                                    <th> Quantity </th>
                                    <th> Price </th>
                                    <th> Action </th>
                                </thead>
                            { cartItem.length > 0 ? (
                                cartItem.map((item, index) => (          
                                    <tbody index={index}>
                                        <td style={{ width: "15%" }}> <img src={item.productImage} alt={item.productName} /> </td>
                                        <td style={{ textWrap: "pretty" }}> {item.productName} </td>
                                        <td> {item.quantity} </td>
                                        <td> {merchantInfo?.currencySymbol} {Number(item.price).toLocaleString()} </td>
                                        <td style={{ width: "15%" }}> 
                                            <div className="action">
                                                <button type='button' onClick={() => handleClick(`/productdetails/${item.productCode}`, navigate)} > <FontAwesomeIcon icon={faEdit} /> Edit </button>
                                                <button type='button'> <FontAwesomeIcon icon={faTrash} /> Delete </button>
                                            </div>    
                                        </td>
                                    </tbody>
                                ))
                            ) : ( 
                                <> 
                                    <p style={{ textAlign: "center", fontSize: 20 }}>No item added to cart. Continue shopping</p>
                                </> 
                            )}
                            </table>
                        </div>
                    </div>
                </div>

                <div className="sideconts">
                    <p> Cart Summary</p>
                    <div className='grped'>
                        <div>
                            <p> Items </p>
                            <p> {cartItem.length} </p>
                        </div>
                        <div>
                            <p> Subtotal </p>
                            <p> {merchantInfo?.currencySymbol} {Number(sumTotal).toLocaleString()}  </p>
                        </div>
                    </div>
                    <button type='button'>
                        <Link to={'/checkout'}>
                            <p> Proceed to Checkout </p>
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};