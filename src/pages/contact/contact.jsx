import "./contact.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";




export const Contact = ({ title }) => {
  const [categories, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';
  const navigate = useNavigate();

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

  console.log(categories);


  return (
    <div className="estore-container">
        
        <section className="getallprods">
            <div className="allestoreprodsImage">
              <img src={"assets/images/estore/rectangle-480.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-490.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-500.png"} alt="allprods" />
              <img src={"assets/images/estore/rectangle-510.png"} alt="allprods" />
            </div>
            
              <div className="describeProds">
                  <div className="b4Title">
                    <div className="title">
                      <h2> Contact Us </h2>
                      <p> Check out products or services from our registered stores </p>
                    </div>
                  
                    <button type="button" className="home-button" onClick={ () => handleClick('/', navigate)}>
                       Return Home
                    </button>
                  </div>
              </div>
        </section>

        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3161285371693!2d-79.37994522334242!3d43.64159075318092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2baa813d5f%3A0xf7c39220b5bad1e!2sWaterpark%20Place!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid" title="20 Bay St., Toronto, ON M5J 2N8, Canada" width="1300" height="600" frameborder="0" style={{ border: '0' }} allowfullscreen="">
          </iframe>
        </section>

        <section className="form">
          
        </section>

    </div>

  );

};
