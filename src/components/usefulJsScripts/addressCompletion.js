import { SignupFormContext } from "context/signup-form.context";

const { LoadScript, StandaloneSearchBox } = require("@react-google-maps/api");
const { default: config } = require("../../config");
const { useRef, useContext } = require("react");


const AutoCompleteAddr = () => {
  const inputRef = useRef();
  const { address, setAddress } = useContext(SignupFormContext);

  const handlePlaceChanged = () => {
    // const [place] = inputRef.current.getPlaces();
    // if (place) {
    //   console.log(place.formatted_address);
    //   console.log(place.geometry.location.lat());
    //   console.log(place.geometry.location.lng());
    // }
  };

  return (
    <>
      <LoadScript googleMapsApiKey={config().google.apiKey} libraries={["places"]} >

        <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged} >
          <input
            type="text"
            id="autocomplete"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            />
        </StandaloneSearchBox>
        </LoadScript>
    </>

  )

};

export default AutoCompleteAddr;