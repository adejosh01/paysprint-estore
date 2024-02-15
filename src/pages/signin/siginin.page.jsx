import "./signin.styles.scss";

import { useContext, useEffect, useState } from "react";
import googleColoredIcon from "assets/svg/google_colored_icon.svg";
import notARobot from "assets/images/not_a_robot.png";
import shield from "assets/svg/shield.svg";
import sidebar from "assets/svg/login_sidebar.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "components/loader/loader.component";
import { UserContext } from "context/user.context";
import { RESPONSE_STATES } from "utils/constants";

export const SigninPage = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseState, setResponseState] = useState(RESPONSE_STATES.none);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { setUser, setIsOTPVerified } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    setResponseState(RESPONSE_STATES.loading);
    setErrorMessage("");
    let resp;
    try {
      resp = await axios.post(
        "https://paysprint.ca/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization:
              "Bearer base64:JFM+PJaWD/pBypX+NhXudDrAmianZdGYZ41qz4WhXL0=",
          },
        }
      );
      if (resp.status === 200 && resp.data.message === "Login successful") {
        setResponseState(RESPONSE_STATES.success);
        setUser(resp.data.data);
        if (resp.data.data.otpState === "0") {
          navigate("/dashboard");
          setIsOTPVerified(true);
        } else if (resp.data.data.otpState === "1") {
          navigate("/verify");
          setIsOTPVerified(false);
        }

        console.log(resp);
      } else {
        throw resp.data;
      }
    } catch (e) {
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
    <div className="signin-container">
      <aside>
        <img src={sidebar} alt="" />
      </aside>
      <main>
        <div className="signin">
          <h1>Welcome Back</h1>
          <em>Glad to have you back!</em>
          <button>
            <img src={googleColoredIcon} alt="" />
            Sign in with Google
          </button>
          <form>
            <label htmlFor="email">
              Email Address<span>*</span>
              <input
                type="email"
                placeholder="forexample@company.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password<span>*</span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Forgot password?</a>

            <div className="verification">
              <img src={notARobot} alt="" />
              <em>
                <img src={shield} alt="" />
                Protected by bank-level security
              </em>
            </div>
          </form>
        </div>
        {errorMessage && <em className="error">*{errorMessage}</em>}

        <button onClick={login}>
          {responseState === RESPONSE_STATES.loading ? <Loader /> : "Login"}
        </button>
        <em>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </em>
      </main>
    </div>
  );
};
