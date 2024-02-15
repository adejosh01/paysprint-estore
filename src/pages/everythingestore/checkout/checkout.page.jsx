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
                            <div className='grped'>
                                <div>
                                    <p> Items </p>
                                    <p> 3 </p>
                                </div>
                                <div>
                                    <p> Subtotal </p>
                                    <p> #12,000.00 </p>
                                </div>
                                <div>
                                    <p> Delivery </p>
                                    <p> #12,000.00 </p>
                                </div>
                                <div>
                                    <p> Total </p>
                                    <p> #12,000.00 </p>
                                </div>
                            </div>
                            <button type='button' name='submit'> 
                                <Link to={'/topayment'}>
                                    <p> Proceed to Payment </p>
                                </Link> 
                            </button>
                        </div>
                    </section>
                </form>
            </div>
      );
} ;

