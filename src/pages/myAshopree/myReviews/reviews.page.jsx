import './reviews.page.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import product1 from 'assets/images/estore/products/product1.png';
import product2 from 'assets/images/estore/products/product2.png';
import google from 'assets/updatedAshopree/google_logo.png';
import paysprint from 'assets/updatedAshopree/paysprint_backgroundBlack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelopeOpenText, faSearch } from '@fortawesome/free-solid-svg-icons';
import { dynamicDisplayEffects } from 'utils/utils';



export const MyReviews = ({ title }) => {
    const [value, setValue] = useState(''); 

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
    }, []);

    return (
        <div className="estore-container">

            <section className="my-reviews">
                
                <section className="all-items">
                    <MyashopreeSidePage /> 
                    <main>
                        <h4> My Reviews </h4>

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
                                <h5> Shipped </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                <div>
                                    <p> Delivery May 22-29 </p>
                                    <div className="doubleImage">
                                        <img src={product1} alt="store productImg" />
                                        <img src={product2} alt="store productImg" />
                                    </div>
                                </div>
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' > Leave a review </button>
                                    <button type='button' className='button ' > Change address </button>
                                </div>
                            </main>
                        </div>

                        <div className="body-sec" id='processing'>
                            <div className='process-all'>
                                <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>

                                <div>
                                    <p> Can't find your order? </p>
                                    <div>
                                        <div>
                                            <a href="#?"> Try signing in with another account </a>
                                            <p> <img src={google} alt="" /> <img style={{ background: '#000' }} src={paysprint} alt="" />  <FontAwesomeIcon icon={faAngleRight} /> </p>
                                        </div>
                                        <div>
                                            <a href="#?"> Self service to find order  </a>
                                            <p> <FontAwesomeIcon icon={faAngleRight} /> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="body-sec" id='shipped'>
                            <div className="title">
                                <h5> Shipped </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                <div>
                                    <p> Delivery May 22-29 </p>
                                    <div className="doubleImage">
                                        <img src={product1} alt="store productImg" />
                                        <img src={product2} alt="store productImg" />
                                    </div>
                                </div>
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Buy this again </button>
                                    <button type='button' className='button ' > Return/Refund </button>
                                    <button type='button' className='button ' > Leave a review </button>
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
                                <h5> Delivered </h5>
                                <p> View order details <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                <div>
                                    <p> Delivered on May 6, 2024 </p>
                                    <div className="doubleImage">
                                        <img src={product1} alt="store productImg" />
                                        <img src={product2} alt="store productImg" />
                                    </div>
                                </div>
                                <div className='minor-btns'>
                                    <button type='button' className='button active-side'> Track </button>
                                    <button type='button' className='button ' > Leave a review </button>
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
                            <div className='process-all'>
                                <h4> You don't have any processing orders <FontAwesomeIcon icon={faEnvelopeOpenText} /> </h4>

                                <div>
                                    <p> Can't find your order? </p>
                                    <div>
                                        <div>
                                            <a href="#?"> Try signing in with another account </a>
                                            <p> <img src={google} alt="" /> <img style={{ background: '#000' }} src={paysprint} alt="" />  <FontAwesomeIcon icon={faAngleRight} /> </p>
                                        </div>
                                        <div>
                                            <a href="#?"> Self service to find order  </a>
                                            <p> <FontAwesomeIcon icon={faAngleRight} /> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>
                </section>

            </section>

        </div>
    );

};

