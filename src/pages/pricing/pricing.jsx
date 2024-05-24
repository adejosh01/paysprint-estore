import './pricing.styles.scss';
import { useEffect } from 'react';
// import purpleCheck from 'assets/svg/purpleGoodTick.svg';
import whiteCheck from 'assets/svg/whiteGoodTick.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const Pricing = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="pricing">
                <h2> Plans & Pricing </h2>
                
                <div className='plans'>
                    <div className='singleItems'>
                        <h4> Freemium </h4>
                        <div className='describePlan'>
                            <p className='title'> (For businesses that need basic tool to grow and receive payments from customers at no extra cost to business) </p>
                            <div className='detailedplans'>
                                <p> Includes: </p>
                                <em> Unlimited Transactions </em>
                                <div>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Transactions </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Online Store </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Products </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Sell on Social Media </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Free Listing on Ashopree </p>
                                </div>
                                <button>
                                    Get plan
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='singleItems'>
                        <h4> Go eCommerce </h4>
                        <div className='describePlan'>
                            <p className='title'> (For business that need to grow faster by boosting online presence to sell more to customers at no cost to business) </p>
                            <div className='detailedplans'>
                                <p> Includes All features in Freemium Plan </p>
                                <em> Unlimited Transactions </em>
                                <div>
                                    <p> <img src={whiteCheck} alt="" /> All features in Freemium Plan </p>
                                    <p> <img src={whiteCheck} alt="" /> Online Ordering </p>
                                    <p> <img src={whiteCheck} alt="" /> Tech Driven Delivery System </p>
                                    <p> <img src={whiteCheck} alt="" /> Own Your Site Domain </p>
                                    <p> <img src={whiteCheck} alt="" /> Free SSL Certificate </p>
                                    <p> <img src={whiteCheck} alt="" /> Chat with Customers </p>
                                    <p> <img src={whiteCheck} alt="" /> Basic Reports for Your Business </p>
                                    <p> <img src={whiteCheck} alt="" /> Language Translation </p>
                                    <p> <img src={whiteCheck} alt="" /> Fulfilment Network </p>
                                    <p> <img src={whiteCheck} alt="" /> Multiple Sales Channel </p>
                                    <p> <img src={whiteCheck} alt="" /> Review and Feedback </p>
                                </div>
                                <button>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='singleItems'>
                        <h4> Go 360 </h4>
                        <div className='describePlan'>
                            <p className='title'> (For businesses that need tool to drive their sustainable strategy to compete and scale the business) </p>
                            <div className='detailedplans'>
                                <p> Includes All features in Freemium Go Commerce Plans </p>
                                <em> Unlimited Transactions </em>
                                <div>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> All features in Freemium and eCommerce Plans </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Transactions </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Retail(Store Front) Service on OWN Device(NO Hardware required) </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Inventory Management </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Customer Management </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Marketing Campaigns Management </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Bulk Payments </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Reporting and Analytics </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Omni-Sales Channel </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Single Back Office/Admin </p>
                                    <p> <FontAwesomeIcon icon={faCheckCircle} /> Integrate to favourite Accounting Software </p>
                                </div>
                                <button>
                                    Get plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

};

