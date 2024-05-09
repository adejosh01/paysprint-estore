import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import config from '../../config';
import React from 'react';

let autocomplete;
const componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  postal_code: 'short_name',
  apiKey: config().google.apiKey
};

// const componentKey = Object.keys(componentForm);

const initAutocomplete = () => {
  autocomplete = new GooglePlacesAutocomplete.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    { types: ['geocode'] }
  );
  autocomplete.addListener('place_changed', fillInAddress);
};

const fillInAddress = () => {
  const place = autocomplete.getPlace();
  for (const component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }
  for (let i = 0; i < place.address_components.length; i++) {
    const addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      const val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
};

const geolocate = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const circle = new GooglePlacesAutocomplete.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
};

const AutocompleteAddressComponent = () => {
  React.useEffect(() => {
    initAutocomplete();
    geolocate();
  }, []);

  return <></>;
};

export default AutocompleteAddressComponent;
