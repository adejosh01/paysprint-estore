import { toggleLoginScreen } from "utils/utils";
import "./login.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/AuthProvider";

export const Login = ({ title }) => {
  const auth = useAuth();
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);

  const [isMerchantActive, setIsMerchantActive] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, settransactionPin] = useState("");

  function handleClick(accountType) {
    toggleLoginScreen(accountType, setIsMerchantActive);
  }

  const submitLogin = () => {
      try {
        
        if (accountNumber !== "" && transactionPin !== "") {
          auth.loginAction({ accountNumber, transactionPin});
          return;
        }

        
      } catch (error) {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert(error.message);
        }
      }
  }


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

            <form>
              <div className="requirements">
                <div>
                  <p> PaySprint Number <span> * </span> </p>
                <input type="text" name="accountNumber" placeholder="123456789" required value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
                </div>
                <div>
                  <p> Transaction Pin <span> * </span> </p>
                <input type="password" name="transactionPin" placeholder="****" autoComplete="" required value={transactionPin} onChange={e => settransactionPin(e.target.value)} />
                </div>
              </div>

              <div className="other-details">
              <button type="button" onClick={() => submitLogin()}>
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

            <form>
              <div className="requirements">
                <div>
                  <p> PaySprint Merchant Number <span> * </span> </p>
                <input type="text" name="accountNumber" placeholder="123456789" required value={accountNumber} onChange={e => setAccountNumber(e.target.accountNumber)} />
                </div>
                <div>
                  <p> Transaction Pin <span> * </span> </p>
                <input type="password" name="transactionPin" placeholder="****" autoComplete="" required value={transactionPin} onChange={e => settransactionPin(e.target.transactionPin)} />
                </div>
              </div>

              <div className="other-details">
              <button type="button" onClick={() => submitLogin()}>
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
