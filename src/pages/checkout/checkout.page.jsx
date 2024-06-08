import { Link } from 'react-router-dom';
import './checkout.styles.scss';
import { useEffect, useState } from 'react';
import config from "../../config";
import axios from "axios";
import { useAuth } from "../../hook/AuthProvider";
import { GetCountries, GetState, GetCity, GetLanguages, CitySelect, CountrySelect, StateSelect, LanguageSelect, } from "react-country-state-city";
import { notificationAlert } from 'utils/utils';

import "react-country-state-city/dist/react-country-state-city.css";


export const Checkout = ({title}) => {

    const apiUrl = config().baseUrl;
    const auth = useAuth();

    const [user, setUser] = useState(JSON.parse(auth.user));
    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
    const [cityid, setCityid] = useState(0);
    const [language, setLanguage] = useState(0);
    const [merchantSecret, setMerchantSecret] = useState("");

    const [countriesList, setCountriesList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [languageList, setLanguageList] = useState([]);

    const [cartItem, setCartItem] = useState([]);
    const [merchantInfo, setMerchantInfo] = useState();
    const [sumTotal, setSumTotal] = useState(0);
    const [taxValue, setTaxValue] = useState(0);
    const [deliveryValue, setDeliveryValue] = useState(0);

    const homeDelivery = ["Home delivery", "Pick up station"];
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategory(selected);
    };

    const makePayment = async () => {
        try {

            // Initialize Payment

            const data = {
                "amount": sumTotal,
                "paymentToken": `${Date.now()}`,
                "email": user.email,
                "publicKey": merchantSecret,
                "currency": merchantInfo.currencyCode,
                "country": merchantInfo.country,
                "mode": config().mode, // test or live
                "callbackUrl": config().callbackUrl,
                "metadata": [
                    {
                        "name": "Full Name",
                        "value": user.name
                    },
                    {
                        "name": "Description",
                        "value": `${cartItem.length} Items purchased from ${merchantInfo.businessname}`
                    }
                ],
                "platform": "ashopree"
            };

            const thisconfig = {
                method: 'post',
                url: `${apiUrl}/payment/initialize`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                },
                data
            }

            const response = await axios(thisconfig);

            if(response.data.status === 200) {
                setTimeout(() => {
                    window.location.href = response.data.data.authorization_link
                }, 1000);
            }
            
        } catch (error) {
            if (error.response) {
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


        GetCountries().then((result) => {
            setCountriesList(result);
        });

        GetLanguages().then((result) => {
            setLanguageList(result);
        });
        
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
            setMerchantSecret(response.data.api_secrete_key);


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

    }, [apiUrl, title, auth.token]);

      return (
            <div className="estore-container">
                <section className='navs'>
                    <Link to={'/mycart'}> 
                        <p> Cart &gt; </p>
                    </Link>
                    <p className='secondp'> Checkout &gt; </p>
                    <p> Payment </p>
                </section>

                <form action="#" method='POST'>
                    <section className="checkoutsec">
                        <div className="shouldbeeditable">
                            <h3> Checkout </h3>
                            <div className='thedetails'>
                                <h4> Shipping Details </h4>
                                <div className='descrip'>
                                    <p> Name </p>
                                  <input name='name' type="name" placeholder='Enter a name' value={user.name}  />
                                </div>
                                <div className='descrip'>
                                    <p> Address </p>
                                  <input name='address' type="text" placeholder='Enter an address' value={user.address} />
                                </div>
                                <div className='descrip'>
                                    <p> Telephone Number </p>
                                    <input name='phone' type="phone" placeholder='Enter a phone number' value={user.telephone} />
                                </div>
                            </div>

                            <div className='thedetails'>
                                <h4> Shipping Address </h4>
                                <div className='descrip'>
                                    <p> Country </p>
                                    <CountrySelect onChange={(e) => { setCountryid(e.id); }} placeHolder="Select Country" />
                                </div>
                                <div className='descrip'>
                                    <p> State </p>
                                    <StateSelect countryid={countryid} onChange={(e) => { setStateid(e.id); }} placeHolder="Select State" />
                                </div>
                                <div className='descrip'>
                                    <p> City </p>
                                    <CitySelect countryid={countryid} stateid={stateid} onChange={(e) => { console.log(e); }} placeHolder="Select City" />
                                </div>
                                <div className='descrip'>
                                    <p> Address </p>
                                    <input name='address' type="address" placeholder='Input delivery address' />
                                </div>
                                <div className='descrip'>
                                    <p>Delivery Option <span> * </span> </p>
                                    {homeDelivery.length !== 0 ? (
                                        Array.isArray(homeDelivery) ? (
                                            <select  value={selectedCategory} onChange={handleCategoryChange} name="deliveryOption" required>
                                                <option value="">Select delivery option</option>
                                                {homeDelivery.map((deliveryOption) => (
                                                    <option key={deliveryOption} value={deliveryOption} required>
                                                        {deliveryOption}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p>Sorry, an error occurred</p>
                                        )
                                    ) : (
                                        <p> Loading Delivery Options</p>
                                    )}
                                </div>
                                {selectedCategory && (<>
                                    {selectedCategory === "Home delivery" && (
                                        <div className='descrip'>
                                            {/* <p> This is your Home Delivery Address: </p>
                                            <input type="text" value="124, busy road off Mainland" readOnly /> */}
                                            <p> Fee: <span> $35 </span> </p>
                                        </div>
                                    )}
                                    {selectedCategory === "Pick up station" && (
                                        <div className='descrip'>
                                            <p> This is your Pick Up Station Address</p>
                                            <input type="text" value="125, active road off Island" readOnly />
                                            <p> Fee: <span> $5 </span> </p>
                                        </div>
                                    )}
                                </>)}
                            </div>
                        </div>

                        <div className="sideconts">
                            <p> Order Summary</p>

                            <div className='grped'>
                              <div className="table-container" >
                              <table className="custom-table">
                                  <thead>
                                      <th> Image</th>
                                      <th> Description</th>
                                      <th> Quantity </th>
                                      <th> Price </th>
                                      <th> Amount </th>
                                      <hr style={{ marginBottom: '2rem' }} />
                                  </thead>
                                { cartItem.length > 0 ? (
                                        cartItem.map((item, index) => (
                                            
                                            <tbody index={index}>
                                                        <td style={{ width: "100px" }}> <img src={item.productImage} alt={item.productName} /> </td>
                                                        <td style={{ textWrap: "pretty" }}> {item.productName} </td>
                                                        <td> {item.quantity} </td>
                                                        <td> {merchantInfo?.currencySymbol} {Number(item.price).toLocaleString()} </td>
                                                        <td> {merchantInfo?.currencySymbol} {Number(item.price * item.quantity).toLocaleString()} </td>
                                                    </tbody>
                                                
                                        ))
                                    ) : ( <p style={{ textAlign: "center" }}> Loading ... </p> )
                                }
                              </table>
                              </div>

                            </div>

                            <div className='grped'>
                              { cartItem.length > 0 ? (
                                    <>
                                          <hr style={{ marginBottom: '2rem' }} />
                                          <div>
                                              <p> Sub Total </p>
                                          <p> {merchantInfo?.currencySymbol} {Number(sumTotal).toLocaleString()} </p>
                                          </div>

                                          <div>
                                              <p> Delivery </p>
                                          <p> {deliveryValue} </p>
                                          </div>
                                          <div>
                                              <p> Taxes </p>
                                                <p> {taxValue}% </p>
                                          </div>
                                          
                                          <div>
                                              <p> Total Amount </p>
                                              <p> {merchantInfo?.currencySymbol} {Number(sumTotal).toLocaleString()} </p>
                                          </div>
                                    </>
                                  ) : null
                              }
                                                              
                            </div>
                            
                          <button type='button' onClick={() => { makePayment() }}> 
                                {/* <Link to={'/payment'}> */}
                                    <p> Proceed to Payment </p>
                                {/* </Link>  */}
                            </button>
                        </div>
                    </section>
                </form>
            </div>
      );
} ;

