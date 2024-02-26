import './services.styles.scss';
import { useEffect } from 'react';
import starimage from "assets/images/star.png";
import firstservice from 'assets/images/estore/rectangle-28.png';
import secondservice from 'assets/images/estore/rectangle-29.png';
import thirdservice from 'assets/images/estore/rectangle-210.png';
import fourthservice from 'assets/images/estore/rectangle-211.png';


export const ServiceDetails = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className='oneservice'>
                <div className='imagessection'>
                    <div className='themainimage'>
                        <img src={secondservice} alt="eachServiceImage" />
                    </div>
                    <div className="otherimages">
                        <img src={firstservice} alt="relateditems in the same services" />
                        <img src={thirdservice} alt="relateditems in the same services" />
                        <img src={fourthservice} alt="relateditems in the same services" />
                    </div>
                </div>

                <div className="describingtheimages">
                    <h2> Consultation Services </h2>
                    <div className='longpiece'>
                        <h4> Description</h4>
                        <p> A consulting firm or simply consultancy is a professional service firm that provides expertise and specialised labour for a fee, through the use of consultants. Consulting firms may have one employee or thousands; they may consult in a broad range of domains, for example, management, engineering e.t.c
                        <br /> This firm has alot of reviews as you can see below    
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
                    
                    <p className='storedealer'>Service Name: <span style={{ color: '#2D334A' }}> Waponi Consultant </span> </p>
                    <p className='amount'> $12,000.00 <span>per closed deal</span></p> 
                    <div className='justbuttons'>
                        <button type='button'>  
                            <a href='/messages'> Get in-touch </a>
                        </button>
                        <button type='button'> 
                            <a href='https://maps.google.com' target='_blank' rel='noreferrer'> See our Locations </a>
                        </button>
                    </div>
                </div>
            </section>

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

