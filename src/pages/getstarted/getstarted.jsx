import { useAuth } from "hook/AuthProvider";
import "./getstarted.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import paysprint from 'assets/updatedAshopree/paysprint.png';
// import linkedln from 'assets/svg/linkedin_icon_white.svg';
// import ashopree from 'assets/updatedAshopree/edited_ashopree_header_logo.jpg';
// import google from 'assets/updatedAshopree/google_logo.png';
import { handleLoginOption } from "utils/utils";
import { RESPONSE_STATES } from "utils/constants";
import { Loader } from "components/loader/loader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faMailBulk } from "@fortawesome/free-solid-svg-icons";


export const GetStarted = ({ title }) => {
  const auth = useAuth();
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, settransactionPin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [responseState, setResponseState] = useState(RESPONSE_STATES.none);



  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);

  const submitLoginWithEmail = async () => {
    if (!email || !password) { 
        return setErrorMessage("All fields must be filled.");
    }

    if (!emailRegex.test(email)) {
        return setErrorMessage("Invalid Email entered.");
    }

    if (password.length < 8) {
        return setErrorMessage("Password cannot be less than 8 characters.");
    }

    try {
        setResponseState(RESPONSE_STATES.loading);
        setErrorMessage("");

        const responseState = await auth.loginAction({ email, password });
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

  const submitLoginWithPaySprint = async () => {
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



  return (
    <div className="estore-container">
        
        <section className="get-started">
          <div className="main">
            <div className="header">

              {/* <div className="ashopree">
                <img src={ashopree} alt="" />
              </div> */}
 
              <div className="body">
                <div className="head">
                  <h1> Sign in to your account </h1>
                  <p> Access all our products and services with one single account </p>
                </div>

                <div className="externals">
                  <button type="button" onClick={ () => handleLoginOption("emailSignIn", "paysprintSignin")}> <img src={paysprint} alt="paysprint_logo" /> <p> PaySprint </p> </button>
                  <button type="button" onClick={ () => handleLoginOption("paysprintSignin", "emailSignIn")} style={{ fontSize: '25px' }}> <FontAwesomeIcon icon={faMailBulk} /> <p> Use Email Address </p> </button>
                  {/* <button type="button"> <img src={linkedln} alt="linkedln_logo" /> <p> Linkedln </p> </button> */}
                </div>
              </div>
            </div>

            <form action="#" className="emailSignIn loginOption">
              <div className="requirements">
                <p> <hr /> <span className="alt"> or sign in with email </span> </p>
                <div className="info-session">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <p> Please proceed to login with your Email details </p>
                </div>
                <div>
                  <p> Email Address <span> * </span> </p>
                  <input type="email" name="email" placeholder="john.doe@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                  <p> Password <span> * </span> </p>
                  <input type="password" name="password" placeholder="********" autoComplete="" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                
                {errorMessage &&  <em className="error">*{errorMessage}</em> }
              </div>

              <div className="other-details">
                <button type="button" onClick={() => submitLoginWithEmail()}>
                  {responseState === RESPONSE_STATES.loading ? <Loader /> : "Proceed"}
                </button>
                <p> Don't have an account? <a href="/register"> Create Account </a> </p>
              </div>
            </form>

            <form action="#" className="paysprintSignin">
              <div className="requirements">
                <p> <hr /> <span className="alt"> sign in with <span style={{ color: '#4F0B92', textDecoration: 'underline' }}> PAYSPRINT </span> </span> </p>
                <div className="info-session">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <p> Please proceed to login with your PaySprint details </p>
                </div>
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
                <button type="button" onClick={() => submitLoginWithPaySprint()}>
                  {responseState === RESPONSE_STATES.loading ? <Loader /> : "Proceed"}
                </button>
                <p> Don't have an account? <a href="/register"> Create Account </a> </p>
              </div>
            </form>

          </div>
        </section>

    </div>

  );

};
