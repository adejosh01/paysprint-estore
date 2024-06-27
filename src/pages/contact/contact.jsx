import "./contact.scss";
import { useEffect } from "react";
import { handleClick } from "utils/utils";
import { useNavigate } from "react-router-dom";








export const Contact = ({ title }) => {
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
                      <h2> Contact Us </h2>
                      <p> Feel free to reach us anytime, any day, from anywhere!! </p>
                    </div>
                 
                    <button type="button" className="home-button" onClick={ () => handleClick('/', navigate)}>
                       Return Home
                    </button>
                  </div>
              </div>
        </section>


        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11582.683237685028!2d-79.77424329338455!3d43.75170639916074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b52b7a5e6b8ad%3A0x1ebe29ba0f3e0e4d!2s2250%20Bovaird%20Dr%20E%20%23304%2C%20Brampton%2C%20ON%20L6R%200W3%2C%20Canada!5e0!3m2!1sen!2sid!4v1701869472878!5m2!1sen!2sid" title="304-2250 Bovaird Drive East, Brampton. ON L6R 0W3, Canada" width="100%" height="600" frameborder="0" style={{ border: '0' }} allowfullscreen="">
          </iframe>
        </section>


        <section className="form">
            <div className="intro">
              <h3> Contact </h3>
              <div className="address">
                <p> Location </p>
                <p> aShopree Corp. <br /> 304-2250 Bovaird Drive East, Brampton, <br />  ON L6R 0W3, Canada. </p>
              </div>
            </div>


            <div className="itForm">
              <h3> Send Us a Message </h3>
              <form action="#">
                   <div>
                      <p> First Name <span> * </span> </p>
                      <input type="text" name="firstname" placeholder="What is your first name?" required/>
                  </div>
                  <div>
                      <p> Last Name <span> * </span> </p>
                      <input type="text" name="lastname" placeholder="What is your last name?" required/>
                  </div>
                 
                  <div>
                      <p> Email <span> * </span> </p>
                      <input type="email" name="email" placeholder="Please provide your email address" required/>
                  </div>
                  <div>
                      <p> Phone Number <span> * </span> </p>
                      <input type="number" name="phone" placeholder="Phone Number" required/>
                  </div>
                  <div>
                      <p> Subject <span> * </span> </p>
                      <input type="text" name="subject" placeholder="What's the subject of your text?" required/>
                  </div>
                  <div>
                      <p> Message <span> * </span> </p>
                      <textarea name="message" id="" cols="30" rows="10" placeholder="Feel free to describe in details what you have in mind" style={{ maxHeight: '90px' }}> </textarea>
                  </div>
                  <div style={{ marginLeft: '23%' }} className="captcha">
                    <img src="https://crm.zoho.com/crm/CaptchaServlet?formId=b7676fb486c62b9e48e985479454d494e8f5b69c5eb1610f2599f52edfa654f5&grpid=e8a3ad69df258ca810f448198a40c5f49ec7b96fc72f3f356f1e05ba5c8270ce" alt="" />
                  </div>
                  <div>
                      <p> Enter the Captcha <span> * </span> </p>
                      <input type="text" name="captcha" placeholder="write exactly what you see" required/>
                  </div>


                  <div className="buttons">
                    <button type="submit" > Submit </button>
                    <button type="button"> Reset </button>
                  </div>
              </form>
            </div>
        </section>


    </div>


  );


};



