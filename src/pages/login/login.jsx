import "./login.scss";
import { useEffect } from "react";


export const Login = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);



  return (
    <div className="estore-container">
        
        <section className="login-page">
          <div className="acct-type">
            <div className="personal"> <p> Personal Account </p> </div>
            <div className="merchant"> <p> Merchant Account </p> </div>
          </div>

          <div className="form">
            <div className="welcome">
              <h1> Welcome Back</h1>
              <p> Please provide your details to log in </p>
            </div>

            <form action="#">
              <div className="requirements">
                <div>
                  <p> PaySprint Number <span> * </span> </p>
                  <input type="number" name="paysprintNumber" placeholder="123456789" />
                </div>
              </div>

              <div className="other-details">
                <button type="button">
                  Proceed
                </button>
              </div>
            </form>
          </div>

        </section>

    </div>

  );

};
