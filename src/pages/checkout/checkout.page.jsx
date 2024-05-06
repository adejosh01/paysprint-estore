import { Link } from 'react-router-dom';
import './checkout.styles.scss';
import { useEffect, useState } from 'react';
import config from "../../config";
import axios from "axios";
import { useAuth } from "../../hook/AuthProvider";


export const Checkout = ({title}) => {

    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [cartItem, setCartItem] = useState([]);
    const [merchantInfo, setMerchantInfo] = useState();
    const [sumTotal, setSumTotal] = useState(0);

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

            console.log(response.data.data);

            setCartItem(response.data.data);
            setMerchantInfo(response.data.merchant);

            if ((response.data.data).length > 0) {
                for (let i = 0; i < response.data.data.length; i++) {
                    const arrTotal = [Number(response.data.data[i].price * response.data.data[i].quantity)];
                    const cartTotal = arrTotal.reduce((a, b) => a + b);
                    setSumTotal(cartTotal);
                }
            }





        }

        getCartItems();

    }, [apiUrl, title]);

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
                                    <input name='name' type="name" placeholder='Enter a name' />
                                </div>
                                <div className='descrip'>
                                    <p> Address </p>
                                    <input name='address' type="text" placeholder='Enter an address' />
                                </div>
                                <div className='descrip'>
                                    <p> Telephone Number </p>
                                    <input name='phone' type="phone" placeholder='Enter a phone number' />
                                </div>
                            </div>

                            <div className='thedetails'>
                                <h4> Shipping Method </h4>
                                <div className='descrip'>
                                    <p> Country </p>
                                    <input name='country' type="country" placeholder='Select a payment method' />
                                </div>
                                <div className='descrip'>
                                    <p> State </p>
                                    <input name='state' type="state" placeholder='Select a payment method' />
                                </div>
                                <div className='descrip'>
                                    <p> Address </p>
                                    <input name='address' type="address" placeholder='Select a payment method' />
                                </div>
                            </div>
                        </div>

                        <div className="sideconts">
                            <p> Order Summary</p>

                          <div className='grped'>
                              <div className='items'>
                                <p> Description </p>
                                <p> Quantity </p>
                                <p> Price </p>
                                <p> Amount </p>
                            </div>
                              <hr style={{ marginBottom: '2rem' }} />

                            </div>

                            
                          
                            <div className='grped'>

                              {
                                  cartItem.length > 0 ? (
                                      cartItem.map((item, index) => (
                                          <div className='items' index={index}>
                                              <p style={{ textWrap: "pretty" }}> {item.productName} </p>
                                              <p> {item.quantity} </p>
                                              <p> {merchantInfo?.currencySymbol} {Number(item.price).toLocaleString()} </p>
                                              <p> {merchantInfo?.currencySymbol} {Number(item.price * item.quantity).toLocaleString()} </p>
                                          </div>
                                      ))
                                  ) : (<p>No item to checkout</p>)
                              }


                              {
                                  cartItem.length > 0 ? (
                                    <>
                                          <hr style={{ marginBottom: '2rem' }} />
                                          <div>
                                              <p> Sub Total </p>
                                              <p> 168 </p>
                                          </div>

                                          <div>
                                              <p> Delivery </p>
                                              <p> 0 </p>
                                          </div>
                                          <div>
                                              <p> Service Charge </p>
                                              <p> 0 </p>
                                          </div>
                                          <div>
                                              <p> Taxes </p>
                                              <p> 13% </p>
                                          </div>
                                          
                                          <div>
                                              <p> Total Amount </p>
                                              <p> #12,000.00 </p>
                                          </div>
                                    </>
                                  ) : null
                              }
                                

                              
                            </div>
                            
                            <button type='button' name='submit'> 
                                <Link to={'/payment'}>
                                    <p> Proceed to Payment </p>
                                </Link> 
                            </button>
                        </div>
                    </section>
                </form>
            </div>
      );
} ;

