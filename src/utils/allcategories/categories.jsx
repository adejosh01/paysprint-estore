import axios from 'axios';
import { useState, useEffect } from 'react';

const CategoriesData = ({title}) => {
  const [categories, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`) 
    .then(response => {
      setData(response.data.data);
    })

    .catch(error => {
      console.error('Error fetching data:', error);
    });

  }, [apiUrl, title]);

  const totalCategories = categories.length;
  const msg = "No categories data available.";


  if (Array.isArray(categories)) {
    return totalCategories;

  } else {
    return msg;
  }
  
};

export default CategoriesData;

