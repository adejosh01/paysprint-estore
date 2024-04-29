import { toggleLoginScreen } from "utils/utils";
import "./login.scss";
import { useEffect } from "react";


export const Login = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);


  return (
    <div className="estore-container">
        
        <section className="login_page_for_individual current_screen">
          <div className="acct-type">
            <div className="personal" type="button" onClick={ () => toggleLoginScreen('personal-acct') }> <p> Personal Account </p> </div>
            <div className="merchant" type="button" onClick={ () => toggleLoginScreen('merchant-acct') }> <p> Merchant Account </p> </div>
          </div>

          <div className="personal-acct-form">
            <div className="welcome">
              <h1> Welcome Back </h1>
              <p> Please provide your details to log in </p>
            </div>

            <form action="#">
              <div className="requirements">
                <div>
                  <p> PaySprint Number <span> * </span> </p>
                  <input type="number" name="paysprintNumber" placeholder="123456789" required />
                </div>
                <div>
                  <p> Transaction Pin <span> * </span> </p>
                  <input type="password" name="transactionPin" placeholder="****" required />
                </div>
              </div>

              <div className="other-details">
                <button type="submit">
                  Proceed
                </button>
                <p> Don't have an account? <a href="/register"> Create Account </a> </p>
              </div>
            </form>
          </div>

        </section>
        
        <section className="login_page_for_merchant">
          <div className="acct-type">
            <div className="personal" type="button" onClick={ () => toggleLoginScreen('personal-acct') }> <p> Personal Account </p> </div>
            <div className="merchant" type="button" onClick={ () => toggleLoginScreen('merchant-acct') }> <p> Merchant Account </p> </div>
          </div>

          <div className="merchant-acct-form">
            <div className="welcome">
              <h1> Welcome Back </h1>
              <p> Please provide your Merchant details to proceed </p>
            </div>

            <form action="#">
              <div className="requirements">
                <div>
                  <p> PaySprint Merchant Number <span> * </span> </p>
                  <input type="number" name="paysprintNumber" placeholder="123456789" required />
                </div>
                <div>
                  <p> Transaction Pin <span> * </span> </p>
                  <input type="password" name="transactionPin" placeholder="****" required />
                </div>
              </div>

              <div className="other-details">
                <button type="submit">
                  Proceed
                </button>
                <p> Don't have an account? <a href="/register"> Create Account </a> </p>
              </div>
            </form>
          </div>

        </section>

    </div>

  );

};
