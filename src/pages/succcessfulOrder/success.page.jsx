import { useNavigate } from 'react-router-dom';
import './success.style.scss';
import { useEffect } from 'react';
import successIcon from 'assets/icons/success.png';
import coke from 'assets/images/estore/productDetails/cokesecond.png';
import sneakers from 'assets/images/estore/rectangle-23.png';
import { handleClick } from 'utils/utils';




export const SuccessfulOrder = ({title}) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
            <div className="estore-container">

                    <section className="successfulorder">
                        <div className="shouldnotbeeditable">
                            <div className='themsg'>
                                <img src={successIcon} alt="a success icon" />
                                <h2> Thank you for your order!!!</h2>
                                <p> We have sent an order confirmation to your mail </p>
                            </div>

                            <div className='thedetails'>
                                <div className='title'>
                                    <h4> Shipping Address </h4>
                                </div>
                                
                                <div className='descrip'>
                                    <p> Transaction Date </p>
                                    <p className='detailed'> 10th Of Febuary 2024</p>
                                </div>

                                <div className='descrip'>
                                    <p> Address </p>
                                    <p className='detailed'> 1 Alh. Awonusi Close, Lagos Lagos Nigeria </p>
                                </div>
                                
                                <div className='descrip'>
                                    <p> Shipping Method </p>
                                    <p className='detailed'> By Boeing 777 Air Cargo </p>
                                </div>

                                <div className='title'>
                                    <h4> Your Orders </h4>
                                </div>

                                <div className="descrip">
                                    <div className='theorder'>
                                        <img src={coke} alt="eachProduct" />
                                        <p> Coca cola 60cl * 12</p>
                                        <p> #12,000.00 </p>
                                    </div>
                                    <div className='theorder'>
                                        <img src={sneakers} alt="eachProduct" />
                                        <p> Coca cola 60cl * 12</p>
                                        <p> #12,000.00 </p>
                                    </div>
                                </div>

                                <div className='grped'>
                                    <div>
                                        <p> Subtotal </p>
                                        <p> #12,000.00 </p>
                                    </div>
                                    <div>
                                        <p> Delivery </p>
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
                                <button type='button' onClick={ () => handleClick('/stores', navigate)}> 
                                    <p> Continue Shopping </p>
                                </button>
                            </div>
                        </div>
                    </section>
            </div>
      );
} ;

