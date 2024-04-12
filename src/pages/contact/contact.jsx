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

    </div>

  );

};
