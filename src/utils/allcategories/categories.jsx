import axios from 'axios';
import { useState, useEffect } from 'react';

const CategoriesData = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`)
      .then(response => {
        setCategories(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [apiUrl, title]);

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '2rem' }}>Loading......</p>;
  }

  return categories.length !== 0 ? categories : <p>No categories data available.</p>;
};

export default CategoriesData;
