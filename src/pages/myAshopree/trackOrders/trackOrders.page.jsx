import './trackOrders.page.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import product1 from 'assets/images/estore/products/product1.png';
import product2 from 'assets/images/estore/products/product2.png';
import google from 'assets/updatedAshopree/google_logo.png';
import paysprint from 'assets/updatedAshopree/paysprint_backgroundBlack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelopeOpenText, faSearch } from '@fortawesome/free-solid-svg-icons';
import { dynamicDisplayEffects, handleClick } from 'utils/utils';
import { useNavigate } from 'react-router-dom';
import config from "../../../config";
import { useAuth } from "../../../hook/AuthProvider";
import axios from "axios";



export const TrackOrders = ({ title }) => {

    const apiUrl = config().baseUrl;
    const auth = useAuth();
    const [orderListItem, setOrderListItem] = useState([]);

    const [value, setValue] = useState(''); 
    const navigate = useNavigate();

    // Initial active div id is set here
    const [activeButton, setActiveButton] = useState('allorders');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        dynamicDisplayEffects('.body-sec', buttonId, 'active-order');
        // Remove active class from all buttons once not in motion :)
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.classList.remove('active-nav-btn'));

        // Add active class to the clicked button here
        const clickedButton = document.getElementById(buttonId);
        if (clickedButton) {
        clickedButton.classList.add('active-nav-btn');
        }
    };


    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      

        const getOrderListItems = async () => {

            try {

                console.log(123);

                const thisconfig = {
                    method: 'get',
                    url: `${apiUrl}/shop/product/myorders?status=`,
                    headers: {
                        Authorization: 'Bearer ' + auth.token
                    }
                }

                const response = await axios(thisconfig);

                console.log(response.data);

                setOrderListItem(response.data.data);

            } catch (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        setTimeout(() => window.location.href = '/login', 1000);
                    }
                }
            }



        }

        getOrderListItems();

    }, [apiUrl]);

    return (
        <div className="estore-container">

            <section className="track-orders">
                
                <section className="all-items">
                    <MyashopreeSidePage /> 
                    <main>
                        <h4> Track Orders </h4>

                        <div className="title-sec"> 
                            <div className='nav-btns'>
                                <button type='button' className={`button ${activeButton === 'allorders' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('allorders')}> All Orders </button>
                                <button type='button' className={`button ${activeButton === 'processing' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('processing')}> Processing </button>
                                <button type='button' className={`button ${activeButton === 'shipped' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('shipped')}> Shipped </button>
                                <button type='button' className={`button ${activeButton === 'delivered' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('delivered')}> Delivered </button>
                                <button type='button' className={`button ${activeButton === 'returns' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('returns')}> Returns </button>
                            </div>
                            <form action={`/search?${value}`}>
                                <div className="searching">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input type="text" name="query" placeholder="Search for a product here" value={value} onChange={e => setValue(e.target.value)} />
                                </div>
                            </form>
                        </div>

                        <div className="body-sec active-order" id='allorders'>
                            <div className="title">
                                <h5> All Orders </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                            {
                                    orderListItem.length > 0 ? (
                                        orderListItem.map((item, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Payment status: {item.orders.paymentStatus === "paid" ? <span style={{ color: 'green' }}>paid</span> : <span style={{ color: 'red' }}>{item.orders.paymentStatus}</span>} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Date ordered: {new Date(item.orders.created_at).toLocaleString()} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Delivery days: {item.orders.deliveryDate} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Status: {item.orders.deliveryStatus === "off" ? <span style={{ color: 'orange' }}>pending</span> : (item.orders.deliveryStatus === "in-progress") ? <span style={{ color: 'blue' }}>out for delivery</span> : <span style={{ color: 'green' }}>{item.orders.deliveryStatus}</span>} </p> <hr/>
                                                <div>
                                                    <img style={{ width: "300px", height: "300px" }} src={item.product.image} alt="store productImg" />
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                         <>
                                            <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>
                                        </>
                                    ) 
                            }
                                
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' onClick={() => handleClick('/reviews', navigate)}> Leave a review </button>
                                    <button type='button' className='button ' > Change address </button>
                                </div>
                            </main>
                        </div>

                        <div className="body-sec" id='processing'>
                            <div className="title">
                                <h5> Processing Orders </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                            {
                                    orderListItem.length > 0 ? (
                                        orderListItem.map((item, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Payment status: {item.orders.paymentStatus === "paid" ? <span style={{ color: 'green' }}>paid</span> : <span style={{ color: 'red' }}>{item.orders.paymentStatus}</span>} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Date ordered: {new Date(item.orders.created_at).toLocaleString()} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Delivery days: {item.orders.deliveryDate} </p> <hr/>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Status: {item.orders.deliveryStatus === "off" ? <span style={{ color: 'orange' }}>pending</span> : (item.orders.deliveryStatus === "in-progress") ? <span style={{ color: 'blue' }}>out for delivery</span> : <span style={{ color: 'green' }}>{item.orders.deliveryStatus}</span>} </p> <hr/>
                                                <div>
                                                    <img style={{ width: "300px", height: "300px" }} src={item.product.image} alt="store productImg" />
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                         <>
                                            <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>
                                        </>
                                    ) 
                            }
                                
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' onClick={() => handleClick('/reviews', navigate)}> Leave a review </button>
                                    <button type='button' className='button ' > Change address </button>
                                </div>
                            </main>
                        </div>

                        <div className="body-sec" id='shipped'>
                            <div className="title">
                                <h5> Shipped Orders </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                {
                                    orderListItem.length > 0 ? (
                                        orderListItem.map((item, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Payment status: {item.orders.paymentStatus === "paid" ? <span style={{ color: 'green' }}>paid</span> : <span style={{ color: 'red' }}>{item.orders.paymentStatus}</span>} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Date ordered: {new Date(item.orders.created_at).toLocaleString()} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Delivery days: {item.orders.deliveryDate} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Status: {item.orders.deliveryStatus === "off" ? <span style={{ color: 'orange' }}>pending</span> : (item.orders.deliveryStatus === "in-progress") ? <span style={{ color: 'blue' }}>out for delivery</span> : <span style={{ color: 'green' }}>{item.orders.deliveryStatus}</span>} </p> <hr />
                                                <div>
                                                    <img style={{ width: "300px", height: "300px" }} src={item.product.image} alt="store productImg" />
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                            <>
                                                <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>
                                            </>
                                    )
                                }
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' onClick={() => handleClick('/reviews', navigate)}> Leave a review </button>
                                    <button type='button' className='button ' > Change address </button>
                                </div>
                            </main>
                            
                            <hr />
                                <div className='last'>
                                    <p> 2 items: <span> CA$47.57 </span> </p>
                                    <p> Order Time: <span> May 16 2024 </span> </p>
                                    <p> Order ID: <span> PO-037-202327342194552982 </span> </p>
                                </div>
                            <hr />

                        </div>

                        <div className="body-sec" id='delivered'>
                            <div className="title">
                                <h5> Delivered Orders </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                {
                                    orderListItem.length > 0 ? (
                                        orderListItem.map((item, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Payment status: {item.orders.paymentStatus === "paid" ? <span style={{ color: 'green' }}>paid</span> : <span style={{ color: 'red' }}>{item.orders.paymentStatus}</span>} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Date ordered: {new Date(item.orders.created_at).toLocaleString()} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Delivery days: {item.orders.deliveryDate} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Status: {item.orders.deliveryStatus === "off" ? <span style={{ color: 'orange' }}>pending</span> : (item.orders.deliveryStatus === "in-progress") ? <span style={{ color: 'blue' }}>out for delivery</span> : <span style={{ color: 'green' }}>{item.orders.deliveryStatus}</span>} </p> <hr />
                                                <div>
                                                    <img style={{ width: "300px", height: "300px" }} src={item.product.image} alt="store productImg" />
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                            <>
                                                <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>
                                            </>
                                    )
                                }
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' onClick={() => handleClick('/reviews', navigate)}> Leave a review </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                </div>
                            </main>
                            
                            <hr />
                                <div className='last'>
                                    <p> 2 items: <span> CA$54.98 </span> </p>
                                    <p> Order Time: <span> April 30 2024 </span> </p>
                                    <p> Order ID: <span> PO-037-202327342194552982 </span> </p>
                                </div>
                            <hr />

                        </div>

                        <div className="body-sec" id='returns'>
                            <div className="title">
                                <h5> Returned Orders </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                {
                                    orderListItem.length > 0 ? (
                                        orderListItem.map((item, index) => (
                                            <div key={index}>
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Payment status: {item.orders.paymentStatus === "paid" ? <span style={{ color: 'green' }}>paid</span> : <span style={{ color: 'red' }}>{item.orders.paymentStatus}</span>} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Date ordered: {new Date(item.orders.created_at).toLocaleString()} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Delivery days: {item.orders.deliveryDate} </p> <hr />
                                                <p style={{ fontSize: '14px', fontWeight: '600' }}> Status: {item.orders.deliveryStatus === "off" ? <span style={{ color: 'orange' }}>pending</span> : (item.orders.deliveryStatus === "in-progress") ? <span style={{ color: 'blue' }}>out for delivery</span> : <span style={{ color: 'green' }}>{item.orders.deliveryStatus}</span>} </p> <hr />
                                                <div>
                                                    <img style={{ width: "300px", height: "300px" }} src={item.product.image} alt="store productImg" />
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                        <>
                                            <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>
                                        </>
                                    )
                                }
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' onClick={() => handleClick('/reviews', navigate)}> Leave a review </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                </div>
                            </main>
                        </div>

                    </main>
                </section>

            </section>

        </div>
    );

};

