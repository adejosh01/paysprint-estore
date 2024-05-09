import { SignupFormContext } from "context/signup-form.context";

import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import {
  CheckAutoComplete,
  formatDateToInputDate,
  formatInputDateToDate,
  getMaxDOBForAdult,
} from "utils/utils";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const MAX_DOB_FOR_ADULT = getMaxDOBForAdult();

export const SignupFirstPage = () => {
  const {
    address,
    city,
    country,
    dateOfBirth,
    firstName,
    lastName,
    str_number,
    str_name,
    postalCode,
    state,
    phone,
    setAddress,
    setCity,
    setCountry,
    setDateOfBirth,
    setFirstName,
    setLastName,
    setStreetNumber,
    setStreetName,
    setPostalCode,
    setState,
    setPhone,
  } = useContext(SignupFormContext);

  // const handleFocus = () => {
  //   console.log('Input field focused');
  //   // function initAutocomplete () {
  //     let input = document.getElementById('autocomplete');
  //     let autocomplete = new GooglePlacesAutocomplete.maps.places.Autocomplete(input);
  //     autocomplete.addListener('place_changed', function() {
  //         let place = autocomplete.getPlace();

  //         console.log(place);
  //     });
  //   // };
  // }

  // const handleClick = () => {
  //   CheckAutoComplete();
  // }


  return (
    <div className="signup-second-page">
      <h1>Create Your Account</h1>
      <em>To create your account please provide your details</em>
      
      <form>
        <div className="names">
          <label htmlFor="first-name">
            First name<span>*</span>
            <input
              type="text"
              placeholder="First name"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label htmlFor="last-name">
            Last name<span>*</span>
            <input
              type="text"
              placeholder="Last name"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
        </div>
        <label htmlFor="dob">
          Date of Birth<span>*</span>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            id="dob"
            value={formatDateToInputDate(dateOfBirth)}
            min={formatDateToInputDate(new Date(1900, 0))}
            max={formatDateToInputDate(MAX_DOB_FOR_ADULT)}
            onChange={(e) =>
              setDateOfBirth(formatInputDateToDate(e.target.value))
            }
          />
        </label>
        <label htmlFor="phone">
          Telephone<span>*</span>
          <input
            type="tel"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label>
        <label htmlFor="address">
          Auto complete address
          <input
            type="text"
            id="autocomplete"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            // onFocus={handleClick}
            />
        </label>
        <div className="codes">
          <label htmlFor="street_number">
            Street Number <span>*</span>
            <input
              type="text"
              id="str_number"
              onChange={(e) => setStreetNumber(e.target.value)}
              value={str_number}
            />
          </label>
          <label htmlFor="code">
            Street Name/Route <span>*</span>
            <input
              type="text"
              id="str_name"
              onChange={(e) => setStreetName(e.target.value)}
              value={str_name}
            />
          </label>
        </div>
        <div className="codes">
          <label htmlFor="city">
            City<span>*</span>
            <input
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </label>
          <label htmlFor="code">
            Postal Code<span>*</span>
            <input
              type="text"
              id="code"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
            />
          </label>
        </div>
        <div className="country">
          <label htmlFor="country">
            Country<span>*</span>
            <input
              type="text" 
              id="country" 
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </label>
          <label htmlFor="state">
            Province / State<span>*</span>
            <input
              type="text"
              id="state"
              name="state"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </label>
        </div>
      </form>
    </div>
  );
};