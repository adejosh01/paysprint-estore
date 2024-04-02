import './referralpartner.styles.scss';
import { useEffect } from 'react';
import ecommerceImg from 'assets/ashopree/eCommerce.png';
import { immediatePage, showTheForm } from 'utils/utils';
import profileIcon from 'assets/icons/profile/profileIcon.png';



export const ReferralPartner = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="referralpartner">
                <div>
                    <img src={ecommerceImg} alt="" />
                </div>
                <div>
                    <h2> Be a Referral Partner </h2>
                    <p> By referring businesses in your network to ashopree, you are not only helping them to boost their businesses and streamlining their payments, but you are also earning rewards for yourself. <br /> Its a win-win opportunity for all! </p>
                    <div className='navBtns'>
                        <button type='button' onClick={ () => immediatePage() } > Join our Referral Program today </button>
                        <button type='button' > Visit Ashopree Community </button>
                    </div>
                </div>
            </section>

            <section className="theNextToSee">
                <h4> To become a referral partner for ashopree and start earning rewards while helping others boost their businesses and streamline their payments, follow these steps: </h4>
                <ol type="1">
                    <li> Visit the ashopree website or contact their customer support to inquire about their referral program. </li>
                    <li> Sign up for the referral program by providing your relevant details and agreeing to the terms and conditions. </li>
                    <li> Receive your unique referral link or code that you can share with your friends, family, and business contacts. </li>
                    <li> Spread the word about ashopree and the benefits it offers for businesses to your network through various channels such as social media, email, word of mouth, etc. </li>
                    <li> Encourage businesses to sign up for ashopree using your referral link or code. </li>
                    <li> Earn rewards for each successful referral that signs up and starts using ashopree's services. </li>
                    <li> Monitor your referrals and rewards through the referral program dashboard or communications from ashopree. </li>
                    <li> Continue to promote ashopree and maximize your earnings through ongoing referrals. </li>
                </ol>
                <p> Remember, the more businesses you refer, the more rewards you can earn.  </p>
                <p> Join the ashopree referral program today and start benefiting from this win-win opportunity for all parties involved!  </p>
                <button type='button' onClick={ () => showTheForm() }> Get Started </button>
            </section>

            <section className='theForm'>
                <h4> Please fill out this form to get yourself sorted </h4>

                <form action="">

                    <div className="allForm">
                        <div className='largeDiv'>
                            <p> Organization Name (or business name) </p>
                            <div className='bigDiv'>
                                <span class="imgspan"> @ </span>
                                <input type="text" name="organisationName" placeholder='Organisation Name' required />
                            </div>
                        </div>
                        <div className='largeDiv'>
                            <p> Contact Name (Same as first and lastname) </p>
                            <div className='bigDiv'>
                                <img src={profileIcon} alt="" />
                                <input type="text" name="contactName" placeholder='Contact Name' required />
                            </div>
                        </div>
                        <div className='largeDiv'>
                            <p> Official Email (Same as email address) </p>
                            <div className='bigDiv'>
                                <span class="imgspan"> @ </span>
                                <input type="text" name="email" placeholder='Email Address' required />
                            </div>
                        </div>
                        <div className='largeDiv'>
                            <p> Telephone </p>
                            <div className='bigDiv'>
                                <span class="imgspan"> @ </span>
                                <input type="text" name="phone" placeholder='Telephone Number' required />
                            </div>
                        </div>
                        <div className='largeDiv'>
                            <p> Website (Optional Field) </p>
                            <div className='bigDiv'>
                                <span class="imgspan"> @ </span>
                                <input type="text" name="website" placeholder='Website Address' required />
                            </div>
                        </div>
                        <div className='largeDiv'>
                            <p> Business or Organisation Logo </p>
                            <div className='bigDiv'>
                                <span class="imgspan"> @ </span>
                                <input type="file" name="logo" required />
                            </div>
                        </div>
                    </div>

                    <button type='submit'> Submit </button>
                </form>
            </section>

        </div>
    );

};

