// import VideoBackground from "components/videoPlayBack/video";
import { useAuth } from "hook/AuthProvider";
import "./getstarted.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const GetStarted = ({ title }) => {
  const auth = useAuth();
  const [accountNumber, setAccountNumber] = useState("");
  const [transactionPin, settransactionPin] = useState("");

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);


  const submitLogin = () => {
      try {
        
        if (accountNumber !== "" && transactionPin !== "") {
          auth.loginAction({ accountNumber, transactionPin});
          return;
          
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Please try again',
            text: 'Sorry one of your credentials was not correct'
          });
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
          {/* <VideoBackground /> */}
        
        <section className="get-started">
          <div className="main">
            <div className="header">
              <div className="head">
                <h1> Sign in to your account </h1>
                <p> Access all our products and services with one single account </p>
              </div>

            </div>

            <form>
              <div className="requirements">
                <p> <hr /> <span className="alt"> or sign in with email </span> </p>
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

    </div>

  );

};
