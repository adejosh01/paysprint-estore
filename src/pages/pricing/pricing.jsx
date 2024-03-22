import './pricing.styles.scss';
import { useEffect } from 'react';
import purpleCheck from 'assets/svg/purpleGoodTick.svg';
import whiteCheck from 'assets/svg/whiteGoodTick.svg';

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
                            <p className='title'> For businesses that need basic tool to build online and social presence at no extra cost to business </p>
                            <div className='detailedplans'>
                                <p> Include: </p>
                                <div>
                                    <p> <img src={purpleCheck} alt="" /> Unlimited Transactions </p>
                                    <p> <img src={purpleCheck} alt="" /> Online Store </p>
                                    <p> <img src={purpleCheck} alt="" /> Unlimited Products </p>
                                    <p> <img src={purpleCheck} alt="" /> Sell on Social Media </p>
                                    <p> <img src={purpleCheck} alt="" /> Free Listing on Ashopree </p>
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
                            <p className='title'> For businesses that need to sell more and improve cashflow at no cost to business </p>
                            <div className='detailedplans'>
                                <p> Include: </p>
                                <div>
                                    <p> <img src={whiteCheck} alt="" /> All features in Freemium Plan </p>
                                    <p> <img src={whiteCheck} alt="" /> Online Ordering </p>
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
                        <h4> Go 360 Plan </h4>
                        <div className='describePlan'>
                            <p className='title'> For businesses that need tool to compete and scale the business </p>
                            <div className='detailedplans'>
                                <p> Include: </p>
                                <div>
                                    <p> <img src={purpleCheck} alt="" /> All features in Freemium and eCommerce Plans </p>
                                    <p> <img src={purpleCheck} alt="" /> Unlimited Transactions </p>
                                    <p> <img src={purpleCheck} alt="" /> Retail(Store Front) Service on OWN Device(NO Hardware required) </p>
                                    <p> <img src={purpleCheck} alt="" /> Inventory Management </p>
                                    <p> <img src={purpleCheck} alt="" /> Customer Management </p>
                                    <p> <img src={purpleCheck} alt="" /> Marketing Campaigns Management </p>
                                    <p> <img src={purpleCheck} alt="" /> Bulk Payments </p>
                                    <p> <img src={purpleCheck} alt="" /> Reporting and Analytics </p>
                                    <p> <img src={purpleCheck} alt="" /> Omni-Sales Channel </p>
                                    <p> <img src={purpleCheck} alt="" /> Single Back Office/Admin </p>
                                    <p> <img src={purpleCheck} alt="" /> Integrate to favourite Accounting Software </p>
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

