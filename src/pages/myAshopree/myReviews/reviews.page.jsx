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

