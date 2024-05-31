import './pricing.styles.scss';
import { useEffect, useState } from 'react';
// import purpleCheck from 'assets/svg/purpleGoodTick.svg';
import whiteCheck from 'assets/svg/whiteGoodTick.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import countries from '../../utils/dummyCountriesDatas/countries.js';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';



export const Pricing = ({ title }) => {
    const location = useLocation();
    const pathname = new URLSearchParams(location.search);
    const getCountryFromUrl = pathname.get('country');
    const [selectedCountry, setSelectedCountry] = useState('');
    const apiUrl = config().baseUrl;
    const [prices, setPricingPlans] = useState([]);
    const [errror, setError] = useState('');

    
    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
        if (selectedCountry) {
            window.location.href = `?country=${selectedCountry}`;
        } 
    };
    
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    
        if (getCountryFromUrl) {
            setSelectedCountry(getCountryFromUrl);
        }
    
        axios.get(`${apiUrl}/pricing/all`)
        .then(response => {

            const pricingData = response.data.data;
            if (pricingData[selectedCountry]) {
                setPricingPlans(pricingData[selectedCountry]);
                setError('');

            } else {
                setError('No pricing data available for the selected country.');
            }
        }).catch(error => {
            setError('Error fetching pricing plans: ' + error.message);
        });
    
    
    }, [getCountryFromUrl, title, apiUrl, selectedCountry]);
        
    // console.log(prices);
    


    return (
        <div className="estore-container">

            <section className="pricing">
                <h2> Plans & Pricing </h2>

                <div className='choose-country'>
                    <h5> Select Country </h5>
                    
                    <select value={selectedCountry} onChange={handleCountryChange}>
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                
                { (prices.length === 0 ) ? 
                    <div className='plans'>
                        <div className='singleItems'>
                            <h4> Freemium <p> #0.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need basic tool to build online and social presence at no extra cost to business </p>
                                <div className='detailedplans'>
                                    <p> Includes: </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Online Store </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Products </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Share link to store on social media </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Free Listing on aShopree </p>
                                    </div>
                                    <button>
                                        Get plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='singleItems'>
                            <h4> Go eCommerce <p> #100.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need to sell more and improve cashflow at no cost to business </p>
                                <div className='detailedplans'>
                                    <p> Includes All features in Freemium Plan </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
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
                            <h4> Go 360 <p> #300.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need tool to compete and scale the business </p>
                                <div className='detailedplans'>
                                    <p> Includes All features in Freemium Go Commerce Plans </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
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
                    :
                    <div className='plans'>
                        <div className='singleItems'>
                            <h4> Freemium <p> {prices.currencySymbol}10.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need basic tool to build online and social presence at no extra cost to business </p>
                                <div className='detailedplans'>
                                    <p> Includes: </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Online Store </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Unlimited Products </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Share link to store on social media </p>
                                        <p> <FontAwesomeIcon icon={faCheckCircle} /> Free Listing on aShopree </p>
                                    </div>
                                    <button>
                                        Get plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='singleItems'>
                            <h4> Go eCommerce <p> {prices.currencySymbol}100.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need to sell more and improve cashflow at no cost to business </p>
                                <div className='detailedplans'>
                                    <p> Includes All features in Freemium Plan </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
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
                            <h4> Go 360 <p> {prices.currencySymbol}300.00 </p> </h4>
                            <div className='describePlan'>
                                <p className='title'> For businesses that need tool to compete and scale the business </p>
                                <div className='detailedplans'>
                                    <p> Includes All features in Freemium Go Commerce Plans </p>
                                    <em> Unlimited Transactions </em>
                                    <div>
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
                }

            </section>

        </div>
    );

};

