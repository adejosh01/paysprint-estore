import "./login.scss";
import { useEffect } from "react";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";


export const Login = ({ title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);



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
                      <h2> Login Page </h2>
                      <p> Feel free to reach us anytime, any day, from anywhere!! </p>
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
