// import { SignupFormContext } from "context/signup-form.context";

// const { LoadScript, StandaloneSearchBox } = require("@react-google-maps/api");
// const { default: config } = require("../../config");
// const { useRef, useContext } = require("react");


// const AutoCompleteAddr = () => {
//   const inputRef = useRef();
//   const { address, setAddress } = useContext(SignupFormContext);

//   // const handlePlaceChanged = () => {
//   //   // const [place] = inputRef.current.getPlaces();
//   //   // if (place) {
//   //   //   console.log(place.formatted_address);
//   //   //   console.log(place.geometry.location.lat());
//   //   //   console.log(place.geometry.location.lng());
//   //   // }
//   // };

//   return (
//     <>
//       <LoadScript googleMapsApiKey={config().google.apiKey} libraries={["places"]} >

//         <StandaloneSearchBox onLoad={ref => (inputRef.current = ref)} >
//           <input type="text" id="autocomplete" name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
//         </StandaloneSearchBox>
//         </LoadScript>
//     </>

//   )

// };

// export default AutoCompleteAddr;


import { SignupFormContext } from "context/signup-form.context";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
// import { default: config } from "../../config";
import { useRef, useContext, useState, useEffect } from "react";
import config from "../../config";

const AutoCompleteAddr = () => {
  const inputRef = useRef();
  const { address, setAddress } = useContext(SignupFormContext);
  const [isLoading, setIsLoading] = useState(false);

  function formatAddress(place) {
    // Sample logic assuming the following properties exist in the place object:
    const streetNumber = place.address_components.find(
      (component) => component.types.includes("street_number")
    )?.short_name;
    const streetName = place.address_components.find(
      (component) => component.types.includes("route")
    )?.short_name;
    const city = place.address_components.find(
      (component) => component.types.includes("locality")
    )?.short_name;
    const state = place.address_components.find(
      (component) => component.types.includes("administrative_area_level_1")
    )?.short_name;
    const zip = place.address_components.find(
      (component) => component.types.includes("postal_code")
    )?.short_name;
    const country = place.address_components.find(
      (component) => component.types.includes("country")
    )?.short_name;
  
    // Customize the address format here:
    let formattedAddress = "";
    if (streetNumber) {
      formattedAddress += streetNumber + " ";
    }
    if (streetName) {
      formattedAddress += streetName + ", ";
    }
    if (city) {
      formattedAddress += city + ", ";
    }
    if (state) {
      formattedAddress += state + " ";
    }
    if (zip) {
      formattedAddress += zip + ", ";
    }
    if (country) {
      formattedAddress += country;
    }
  
    // Remove the trailing comma and space if necessary
    formattedAddress = formattedAddress.trim().slice(0, -1);
  
    return formattedAddress;
  }
  

  const handleSelect = async (place) => {
    setIsLoading(true);
    try {
      // Perform any additional address data processing here (optional)
      const formattedAddress = formatAddress(place); // Replace with your formatting logic
      setAddress(formattedAddress);
    } catch (error) {
      console.error("Error retrieving address details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addListener("place_changed", () => {
        const selectedPlace = inputRef.current.getPlace();
        if (selectedPlace) {
          handleSelect(selectedPlace);
        }
      });
    }
  }, [inputRef]);

  return (
    <>
      <LoadScript googleMapsApiKey={config().google.apiKey} libraries={["places"]}>
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handleSelect}
          loadingElement={<div>Loading...</div>}
          errorElement={<div>Error</div>}
        >
          <div>
            {isLoading && <span>Retrieving address details...</span>}
            <input
              type="text"
              id="autocomplete"
              name="address"
              value={address}
              disabled={isLoading}
            />
          </div>
        </StandaloneSearchBox>
      </LoadScript>
    </>
  );
};

export default AutoCompleteAddr;
