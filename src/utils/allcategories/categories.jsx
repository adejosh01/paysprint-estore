import axios from 'axios';
import { useState, useEffect } from 'react';

const CategoriesData = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError('Error fetching categories data: ' + error.message);
        setLoading(false);
      });
  }, [apiUrl, title]);

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '2rem' }}> Loading Categories....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (categories.length === 0) {
    return <p>No categories data available.</p>;
  }
  console.log(categories);

  return (
    <>
      {categories.map((item, index) => (
        <a href={`/allcategories?categoryname=${item.category}`} key={index} > {item.category} </a>
      ))}
    </>
  );
};

export default CategoriesData;

