import './referralpartner.styles.scss';
import { useEffect, useState } from 'react';
import ecommerceImg from 'assets/ashopree/eCommerce.png';
import { immediatePage, showTheForm } from 'utils/utils';
import profileIcon from 'assets/icons/profile/profileIcon.png';
import axios from 'axios';
import countries from '../../utils/dummyCountriesDatas/countries.js';
import { country_arr } from '../../utils/dummyCountriesDatas/countries.js';


const apiUrl = 'https://restcountries.com/v3.1/all';

export const ReferralPartner = ({ title }) => {
    const [allCountriesNames, setData5] = useState([]);
    const [setError] = useState(null);
  
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      
      axios.get(`${apiUrl}`) 
        .then(response => {
            const countryNames = response.data.map(country => country);

            setData5(countryNames);
            // console.log(setData5(response))
        }).catch(error => {
            setError('Error fetching Hot-deals product data: ' + error.message);
          }
      );

    }, [title, setError]);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]); // Empty array for states

  const handleCountryChange = (event) => {
    const selected = event.target.value;
    setSelectedCountry(selected);

    // Update states based on selected country (logic needed here)
    const countryData = countries.find((c) => c.name === selected);
    setStates(countryData ? countryData.states : []); // Update states based on country

  };

    // console.log(allCountriesNames);
    // console.log(countries);

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
                <h4> Please fill out this form to get started </h4>

                <form action="">
                    <div className="allForm">
                        <div className='largeDiv'>
                            <p> Organization Name (or business name) <span> * </span> </p>
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
                        {/* <div className='largeDiv'>
                            <p> Country </p>
                            <div className='bigDiv'>
                                <select value={selectedCountry} onChange={handleCountryChange}>
                                    <option value="">Select Country</option>
                                    {countries.map((country) => (
                                    <option key={country.name} value={country.name}>
                                        {country.name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {selectedCountry && (
                            <div className='largeDiv'>
                                <p> Country </p>
                                <div className='bigDiv'>
                                    <select>
                                        <option value="">Select State</option>
                                        {states.map((state) => (
                                            <option key={state} value={state}>
                                            {state}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )} */}
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

