import { Link } from 'react-router-dom';
import './checkout.styles.scss';
import { useEffect } from 'react';


export const Checkout = ({title}) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

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
                            <div className='desc'>
                                <p> Description </p>
                                <p> Quantity </p>
                                <p> Price </p>
                                <p> Amount </p>
                            </div>
                            <div className='grped'>
                                <div className='items'>
                                    <p> Coke </p>
                                    <p> 2 </p>
                                    <p> 20 </p>
                                    <p> 40 </p>
                                </div>

                                {/* <table>
                                    <thead> 
                                        <tr>
                                            <th>check</th>
                                            <th>check</th>
                                            <th>check</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> check one</td>
                                            <td> check one</td>
                                        </tr>
                                    </tbody>
                                </table> */}

                                <div className='items'>
                                    <p> Shoe </p>
                                    <p> 1 </p>
                                    <p> 50 </p>
                                    <p> 50 </p>
                                </div>
                                <div className='items'>
                                    <p> Cooler </p>
                                    <p> 5 </p>
                                    <p> 15 </p>
                                    <p> 75 </p>
                                </div> <hr />
                                <div className='items'>
                                    <p> Sub Total </p>
                                    <p> 168 </p>
                                </div> <hr style={{ marginBottom: '2rem' }} />

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
                                    <p> 21.45 </p>
                                </div>
                                <div>
                                    <p> Other Charges </p>
                                    <p> 21.45 </p>
                                </div>
                                <div>
                                    <p> Total Amount </p>
                                    <p> #12,000.00 </p>
                                </div>
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

