import { useState, useEffect } from 'react';

const TotalCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country data from API link
    fetch('https://paysprint.ca/api/v1/sync/countries')
      .then((response) => response.json()) 
      .then((data) => setCountries(data.data)); 
  }, []);

  const totalCountries = countries.length;
  const msg = "No countries data available.";


  if (Array.isArray(countries)) {
    return totalCountries;

  } else {
    return msg;
  }
  
};

export default TotalCountries;

