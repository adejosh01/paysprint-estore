import { toggleLoginScreen } from "utils/utils";
import "./login.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/AuthProvider";
import Swal from "sweetalert2";
import { RESPONSE_STATES } from "utils/constants";
import { Loader } from "components/loader/loader.component";

export const Login = ({ title }) => {
  const auth = useAuth();
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);

  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, settransactionPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseState, setResponseState] = useState(RESPONSE_STATES.none);


  const submitLogin = async () => {
    if (!accountNumber || !transactionPin) { 
        return setErrorMessage("All fields must be filled.");
    }

    if (accountNumber.length < 4) {
        return setErrorMessage("PaySprint Number cannot be less than 4 characters.");
    }

    if (transactionPin.length < 4) {
        return setErrorMessage("Transaction Pin cannot be less than 4 characters.");
    }

    if (!/^\d+$/.test(accountNumber)) {
        return setErrorMessage("PaySprint Number must contain only numbers.");
    }

    try {
        setResponseState(RESPONSE_STATES.loading);
        setErrorMessage("");

        const responseState = await auth.loginAction({ accountNumber, transactionPin });
        setResponseState(responseState);

        if (responseState === RESPONSE_STATES.error) {
            setErrorMessage("Invalid Credentials");
        }
    } catch (error) {
        setResponseState(RESPONSE_STATES.none);
        const errorMessage = error.response ? error.response.data.message : error.message;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage,
        });
    }
  };

  // const submitLogin = () => {
  //     try {
        
  //       if (accountNumber !== "" && transactionPin !== "") {
  //         auth.loginAction({ accountNumber, transactionPin});
  //         return;
          
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Please try again',
  //           text: 'Sorry one of your credentials was not correct'
  //         });
  //       }

        
  //     } catch (error) {
  //       if(error.response) {
  //         alert(error.response.data.message);
  //       } else {
  //         alert(error.message);
  //       }
  //     }
  // }


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
                
                {errorMessage &&  <em className="error">*{errorMessage}</em> }
              </div>

              <div className="other-details">
                <button type="button" onClick={() => submitLogin()}>
                  {responseState === RESPONSE_STATES.loading ? <Loader /> : "Proceed"}
                </button>
                {/* <button type="button" onClick={() => submitLogin()}>
                  Proceed
                </button> */}
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
