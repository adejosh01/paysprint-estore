import { Link } from 'react-router-dom';
import './payments.style.scss';
import { useEffect } from 'react';
import errorIcon from 'assets/icons/error.png';


export const Payment = ({title}) => {
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
                    <Link to={'/checkout'}> 
                        <p> Checkout &gt; </p>
                    </Link>
                    <p className='secondp'> Payment </p>
                </section>

                <form action="#" method='POST'>
                    <section className="topayment">
                        <div className="shouldbeeditable">
                            <h3> Payment </h3>

                            <div className='thedetails'>
                                <div className='title'>
                                    <h4> Shipping Address </h4>
                                    <Link to={'/checkout'}>
                                        <p> Edit Details </p>
                                    </Link>
                                </div>
                                <div className='descrip'>
                                    <p> Receiver's name </p>
                                    <p className='detailed'> Adebambo A.</p>
                                </div>
                                <div className='descrip'>
                                    <p> Address </p>
                                    <p className='detailed'> 1 Alh. Awonusi Close, Lagos Lagos Nigeria </p>
                                </div>
                                <div className='descrip'>
                                    <p> Telephone Number </p>
                                    <p className='detailed'> 08137492316 </p>
                                </div>
                            </div>

                            <div className='thedetails'>
                                <h4> Payment Details </h4>
                                <div className='descrip'>
                                    <p> Payment Method </p>
                                    <select name="select" id="">
                                        <option value="paymentmthd" > Select a payment method </option>
                                        <option value="card" > By Card </option>
                                        <option value="others" > Other methods </option>
                                    </select>
                                </div>
                                <div className='descrip'>
                                    <p> Name </p>
                                    <select name="select" id="">
                                        <option value="paymentmthd" > Select a payment method </option>
                                        <option value="card" > By Card </option>
                                        <option value="others" > Other methods </option>
                                    </select>
                                </div>

                                <div className='descrip'>
                                    <p> Email </p>
                                    <select name="select" id="">
                                        <option value="paymentmthd" > Select a payment method </option>
                                        <option value="card" > By Card </option>
                                        <option value="others" > Other methods </option>
                                    </select>
                                </div>

                                <div className='descrip'>
                                    <p> Purpose of payment </p>
                                    <select name="select" id="">
                                        <option value="paymentmthd" > Select a payment method </option>
                                        <option value="card" > By Card </option>
                                        <option value="others" > Other methods </option>
                                    </select>
                                </div>

                                <div className='descrip'>
                                    <p> Amount </p>
                                    <select name="select" id="">
                                        <option value="paymentmthd" > Select a payment method </option>
                                        <option value="card" > By Card </option>
                                        <option value="others" > Other methods </option>
                                    </select>
                                </div>
                                <div className='msg'>
                                    <img src={errorIcon} alt="an err icon" />
                                    <p> Kindly note that you will be charged ₦50 on this transaction </p>
                                </div>
                                <button type='button' name='submit'> 
                                    <Link to={'/success'}>
                                        <p> Make Payment </p>
                                    </Link> 
                                </button>
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
                        </div>
                    </section>
                </form>
            </div>
      );
} ;

