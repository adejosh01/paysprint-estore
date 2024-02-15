import "./verify.styles.scss";

import { useContext, useEffect, useState } from "react";
import verifySidebar from "assets/svg/verify_sidebar.svg";
import axios from "axios";
import { RESPONSE_STATES } from "utils/constants";
import { UserContext } from "context/user.context";
import { Loader } from "components/loader/loader.component";
import { useNavigate } from "react-router-dom";

export const VerifyPage = ({ title }) => {
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseState, setResponseState] = useState("");

  const { user, setIsOTPVerified } = useContext(UserContext);

  const navigate = useNavigate();

  const verifyOTP = async (e) => {
    if (code.length < 6) {
      return setErrorMessage("OTP must be 6 characters");
    }
    setResponseState(RESPONSE_STATES.loading);
    e.preventDefault();
    if (!code) return;

    setResponseState(RESPONSE_STATES.loading);
    setErrorMessage("");
    let resp;
    try {
      resp = await axios.post(
        "https://paysprint.ca/api/v1/verifyotp",
        {
          id: user.id,
          code,
        },
        {
          headers: {
            Authorization:
              "Bearer base64:JFM+PJaWD/pBypX+NhXudDrAmianZdGYZ41qz4WhXL0=",
          },
        }
      );

      if (
        resp.status === 200 &&
        resp.data.message === "OTP successfully validated"
      ) {
        setResponseState(RESPONSE_STATES.success);
        setIsOTPVerified(true);
        navigate("/dashboard");
        console.log(resp);
      } else {
        throw resp.data;
      }
    } catch (e) {
      setResponseState(RESPONSE_STATES.error);
      //Unknown error codes will be handled here
      setResponseState(RESPONSE_STATES.error);
      if (e?.response?.status === 400) {
        setErrorMessage(e.response.data?.message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
      console.log(e.response);
    }
  };

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="verify-container">
      <aside>
        <img src={verifySidebar} alt="" />
      </aside>
      <main>
        <div className="verify">
          <h1>Verify OTP</h1>
          <em>
            We haves sent a code to your registered E-mail address and phone
            number
          </em>
          <form>
            <label htmlFor="otp">
              Provide OTP<span>*</span>
              <input
                type="number"
                placeholder="Verification Code"
                id="otp"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
            <em>
              Didn't get an OTP? <button>Resend code</button>
            </em>
          </form>
        </div>
        {errorMessage && <em className="error">*{errorMessage}</em>}
        <button onClick={verifyOTP}>
          {responseState === RESPONSE_STATES.loading ? <Loader /> : "Proceed"}
        </button>
      </main>
    </div>
  );
};
