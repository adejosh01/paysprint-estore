import { SignupFormContext } from "context/signup-form.context";

const { LoadScript, StandaloneSearchBox } = require("@react-google-maps/api");
const { default: config } = require("../../config");
const { useRef, useContext, useState } = require("react");


const AutoCompleteAddr = () => {
  const inputRef = useRef();
  const { address, setAddress } = useContext(SignupFormContext);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // const location = GeolocationPosition();

  // const handlePlaceChanged = () => {
  //   // const [place] = inputRef.current.getPlaces();
  //   // if (place) {
  //   //   console.log(place.formatted_address);
  //   //   console.log(place.geometry.location.lat());
  //   //   console.log(place.geometry.location.lng());
  //   // }
  // };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        }, error => { console.error('Error getting user location:', error); }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    // console.log("Lats: " + latitude);
    // console.log("long: " + longitude);
  };

  return (
    <>
      <LoadScript googleMapsApiKey={config().google.apiKey} libraries={["places"]} >
        <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} >
          <input type="text" id="autocomplete" name="address" onChange={(e) => setAddress(e.target.value)} value={address} onFocus={getLocation} />
        </StandaloneSearchBox>
        </LoadScript>
    </>

  )

};

export default AutoCompleteAddr;