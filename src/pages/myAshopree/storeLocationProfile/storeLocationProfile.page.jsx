import './storeLocationProfile.styles.scss';
import { useEffect } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import config from "../../../config";
import random_cover_photo from 'assets/images/estore/frame-4091.png';
import profile_photo from 'assets/images/estore/allcategories/category3.png';
import post_photo from 'assets/images/estore/personalStore/prod7.png';
import verify from 'assets/ashopree/verify_badge.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';




export const StoreLocationProfile = ({ title }) => {
    const apiUrl = config().baseUrl;
    
    
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, [apiUrl, title]);

    return (
        <div className="estore-container">

            <section className="store-profile">
                
                <section className="all-items">
                    <MyashopreeSidePage />

                    <main>
                        <div className="first">
                            <div className="both-pictures">
                                <img className='background' src={random_cover_photo} alt="user's name" />
                                <img className='profile' src={profile_photo} alt="user's profile name" />
                            </div>

                            <div className="mobile-details">
                                <div className="title-and-location">
                                    <h4> Paysprint Inc. <span> <img src={verify} alt="verified badge" /> </span> </h4>
                                    <p> San Francisco </p>
                                </div>
                                <div className="other-items">
                                    <p> <button type='button'> <FontAwesomeIcon icon={faLink} /> </button> www.https://paysprint.com </p>
                                    <button> Ecommerce </button>
                                    <button> Tech </button>
                                    <button> Sass </button>
                                </div>
                            </div>

                            <div className="posts">
                                <div className="head">
                                    <img src={post_photo} alt="profile icon" />
                                    <div>
                                        <h5> Olusegun Adebiyi </h5>
                                        <p> Founder </p>
                                    </div>
                                </div>

                                <div className="texts">
                                    <p> Login to account to set up Online Store. </p>
                                    <p> Click on Manage online store, select either Online Store for Goods or services and complete the forms. Provide the name of the store, upload good quality business logo, fill out the return and refund   policies, preview and save your work or publish your store. Click on Manage online store, select either Online Store for Goods or services and complete the forms. Provide the name of the store, upload good quality business logo, fill out the return and refund   policies, preview and save your work or publish your store. </p>
                                </div>
                            </div>
                            
                        </div>                                    

                        <div className="second">
                            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.683237685028!2d-79.77424329338455!3d43.75170639916074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b52b7a5e6b8ad%3A0x1ebe29ba0f3e0e4d!2s2250%20Bovaird%20Dr%20E%20%23304%2C%20Brampton%2C%20ON%20L6R%200W3%2C%20Canada!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid`} title={`304-2250 Bovaird Drive East, Brampton. ON L6R 0W3, Canada`} width="100%" height="100%" frameborder="0" style={{ border: '0' }} allowfullscreen="">
                            </iframe>
                        </div>
                    </main>
                
                </section>

            </section>  

        </div>
    );

};

