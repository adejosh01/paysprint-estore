import './services.styles.scss';
import { useEffect, useState } from 'react';
import starimage from "assets/images/star.png";
import firstservice from 'assets/images/estore/rectangle-28.png';
import secondservice from 'assets/images/estore/rectangle-29.png';
import thirdservice from 'assets/images/estore/rectangle-210.png';
import fourthservice from 'assets/images/estore/rectangle-211.png';
import config from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";
import { stripHtmlTags } from 'utils/utils';

export const ServiceDetails = ({ title }) => {

    const apiUrl = config().baseUrl;
    const [businessService, setBusinessService] = useState([]);
    const queryString = window.location.pathname;
    const urlId = queryString.split("/");
    const merchantId = urlId[2];

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      

        axios.get(`${apiUrl}/ashopree/services/specific/${merchantId}`)
            .then(response => {
                setBusinessService(response.data);
                console.log(businessService);
            }).catch(error => {
                console.error(error);
            });

    }, [apiUrl, title]);

    return (
        <div className="estore-container">

        {
                businessService.status === 200 ? (
                    <>
                        <section className='oneservice'>
                            <div className='imagessection'>
                                <div className='themainimage'>
                                    <img src={businessService.data?.businessLogo} alt="businessLogo" />
                                </div>
                                <div className="otherimages">
                                    <img src={businessService.data?.businessLogo} alt="businessLogo" />
                                    <img src={businessService.data?.aboutImportantImage} alt="aboutImage" />
                                    <img src={businessService.data?.backdropImage} alt="backdropImage" />
                                </div>
                            </div>

                            <div className="describingtheimages">
                                <h2> {businessService.data?.businessWelcome} </h2>
                                <div className='longpiece'>
                                    <h4> Description</h4>
                                    <p>
                                        {businessService.data?.aboutUs !== null ? stripHtmlTags(businessService.data?.aboutUs) : null}
                                    </p>
                                    <p>

                                        {businessService.data?.aboutUsA1 !== null ? stripHtmlTags(businessService.data?.aboutUsA1) : null}
                                        
                                    </p>
                                    <p>
                                        {businessService.data?.aboutUsA2 !== null ? stripHtmlTags(businessService.data?.aboutUsA2) : null}

                                    </p>
                                    <p>
                                        {businessService.data?.aboutUsA3 !== null ? stripHtmlTags(businessService.data?.aboutUsA3) : null}
                                    </p>
                                    <div className='ratings'>
                                        <span>
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                            <img src={starimage} alt="justtheIconOfAStar" />
                                        </span>
                                        <p className="initialprice"> 4.56 (132 reviews) </p>
                                    </div>
                                </div>

                                <p className='storedealer'>Business Slogan: <span style={{ color: '#2D334A' }}> {businessService.data?.businessSlogan} </span> </p>
                                {/* <p className='amount'> $12,000.00 <span>per closed deal</span></p>  */}
                                <div className='justbuttons'>
                                    <button type='button'>
                                        <a href='/messages'> Get in-touch </a>
                                    </button>

                                    <button type='button'>
                                        {
                                            businessService.data?.website !== null ? (
                                                <a href={businessService.data?.website} target='_blank' rel='noreferrer'> Visit our website </a>
                                            ) : (
                                                <a href='https://maps.google.com' target='_blank' rel='noreferrer'> See our Locations </a>
                                            )
                                        }

                                    </button>

                                </div>
                            </div>
                        </section>
                    </>
                ) : (<p>Please wait ...</p>)
        }



            <section className='similarservices'>
                <div className="producttitle">
                    <p> Similar Services </p>
                </div>

                <div className="items">
                    <div className="eachItem">
                        <img className='fortheimages' src={ firstservice } alt="eachImage" />
                        <div className="imgdescription">
                            <p className="nameofitem"> Report Writing </p>
                            <p className="priceofitem"> ₦1200.00 <span> per closed deal</span> </p>
                            <div>
                                <span>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="initialprice"> 4.56 (132 reviews) </p>
                            </div>
                        </div>
                    </div>

                    <div className="eachItem">
                        <img className='fortheimages' src={secondservice} alt="eachImage" />
                        <div className="imgdescription">
                            <p className="nameofitem"> Waponi Consultant </p>
                            <p className="priceofitem"> ₦1200.00 <span> per closed deal</span> </p>
                            <div>
                                <span>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="initialprice"> 4.56 (132 reviews) </p>
                            </div>              
                        </div>
                    </div>

                    <div className="eachItem">
                        <img className='fortheimages' src={thirdservice} alt="eachImage" />
                        <div className="imgdescription">
                            <p className="nameofitem"> Business Talks </p>
                            <p className="priceofitem"> ₦1200.00 <span> per closed deal</span> </p>
                            <div>
                                <span>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="initialprice"> 4.56 (132 reviews) </p>
                            </div>              
                        </div>
                    </div>

                    <div className="eachItem">
                        <img className='fortheimages' src={fourthservice} alt="eachImage" />
                        <div className="imgdescription">
                            <p className="nameofitem"> Electrical Services </p>
                            <p className="priceofitem"> ₦1200.00 <span> per closed deal</span> </p>
                            <div>
                                <span>
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                <img src={starimage} alt="justtheIconOfAStar" />
                                </span>
                                <p className="initialprice"> 4.56 (132 reviews) </p>
                            </div>              
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );

};

