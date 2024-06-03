import './reviews.page.scss';
import { useEffect, useState } from 'react';
import MyashopreeSidePage from 'components/Myashopree/side.page';
import google from 'assets/updatedAshopree/google_logo.png';
import paysprint from 'assets/updatedAshopree/paysprint_backgroundBlack.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faFlag, faSearch } from '@fortawesome/free-solid-svg-icons';
import { dynamicDisplayEffects } from 'utils/utils';



export const MyReviews = ({ title }) => {
    const [value, setValue] = useState(''); 

    // Initial active div id is set here
    const [activeButton, setActiveButton] = useState('allreviews');

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
                                <button type='button' className={`button ${activeButton === 'allreviews' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('allreviews')}> All Reviews </button>
                                <button type='button' className={`button ${activeButton === 'flaggedreviews' ? 'active-nav-btn' : ''}`} onClick={() => handleButtonClick('flaggedreviews')}> Flagged Reviews </button>
                            </div>
                            <form action={`/search?${value}`}>
                                <div className="searching">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input type="text" name="query" placeholder="Search for a product review here" value={value} onChange={e => setValue(e.target.value)} />
                                </div>
                            </form>
                        </div>

                        <div className="body-sec active-order" id='allreviews'>
                            <div className="title">
                                <h5> Comments on Monthly Book Keeping Services by JSC Global Accounting Services. </h5>
                                <p> View other reviews <FontAwesomeIcon icon={faAngleRight} />  </p>
                            </div>

                            <main>
                                <div className="one-thread">
                                    <div className='user-comment'>
                                        <div className="avatar">
                                            <img src="https://res.cloudinary.com/dysgwap7p/image/upload/v1665052608/Logikeep/avatar-image_oqym5e.png" alt="userIcon" />
                                        </div>

                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6> Somoye Munirat <span> 10/06/2022, 09:46:44 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> Thanks for shopping </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-reply">
                                        <div className="avatar">
                                            <img src="https://paysprint.ca/shopstore/JSC_Global_Accounting_Services/myproduct/1231891620_1697759965.jpeg" alt="userIcon" />
                                        </div>

                                        <div className="reply-box">
                                            <div className="comment-head">
                                                <h6> Monthly Book Keeping Services <span> 10/06/2022, 09:48:44 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> Thanks you </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-thread">
                                    <div className='user-comment'>
                                        <div className="avatar">
                                            <img src="https://res.cloudinary.com/dysgwap7p/image/upload/v1665052608/Logikeep/avatar-image_oqym5e.png" alt="userIcon" />
                                        </div>

                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6> Abimbola Portable <span> 10/6/2022, 9:54:41 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> I love your prompt service </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-reply">
                                        <div className="avatar">
                                            <img src="https://paysprint.ca/shopstore/JSC_Global_Accounting_Services/myproduct/1231891620_1697759965.jpeg" alt="userIcon" />
                                        </div>

                                        <div className="reply-box">
                                            <div className="comment-head">
                                                <h6> Monthly Book Keeping Services <span> 10/06/2022, 05:57:01 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> Thanks my friend </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-thread">
                                    <div className='user-comment'>
                                        <div className="avatar">
                                            <img src="https://res.cloudinary.com/dysgwap7p/image/upload/v1665052608/Logikeep/avatar-image_oqym5e.png" alt="userIcon" />
                                        </div>

                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6> Somoye Munirat <span> 10/6/2022, 11:29:26 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> Good Service </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-thread">
                                    <div className='user-comment'>
                                        <div className="avatar">
                                            <img src="https://res.cloudinary.com/dysgwap7p/image/upload/v1665052608/Logikeep/avatar-image_oqym5e.png" alt="userIcon" />
                                        </div>

                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6> Moses <span> 10/24/2022, 10:56:44 AM </span> </h6>
                                                <hr />
                                                <p className="comment-content"> I love your services </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>

                        <div className="body-sec" id='flaggedreviews'>
                            <div className='all-flaggedreviews'>
                                <h4> You don't have any flagged reviews yet <FontAwesomeIcon icon={faFlag} /> </h4>

                                <div>
                                    <p> Can't find a review here? </p>
                                    <div>
                                        <div>
                                            <a href="#?"> Try signing in with your normal account </a>
                                            <p> <img src={google} alt="" /> <img style={{ background: '#000' }} src={paysprint} alt="" />  <FontAwesomeIcon icon={faAngleRight} /> </p>
                                        </div>
                                        <div>
                                            <a href="#?"> Self service to find review  </a>
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

