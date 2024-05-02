import "./signup.styles.scss";

import { useContext, useEffect, useState } from "react";
import { SignupFirstPage } from "./signup.first_page.component";
import { getConditionalClassNames, getConditionalClassName, handleClick } from "utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { SignupSecondPage } from "./signup.second_page.component";
import { SignupThirdPage } from "./signup.third_page.component";
import { SignupFourthPage } from "./signup.fourth_page.component";
import { Link, useNavigate } from "react-router-dom";
import { SignupFormContext } from "context/signup-form.context";
import { RESPONSE_STATES } from "utils/constants";
import axios from "axios";
import { Loader } from "components/loader/loader.component";

export const SignupPage = ({ title }) => {
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [responseState, setResponseState] = useState(RESPONSE_STATES.none);

  const {
    email,
    confirmEmail,
    password,
    confirmPassword,
    firstName,
    lastName,
    dateOfBirth,
    address,
    city,
    phone,
    postalCode,
    country,
    state,
    transactionRange,
    sourceOfFunds,
    hearAboutUs,
    // referredBy,
    acceptTandC,
    specifyHeardAboutUs,
    specifySourceOfFunds,
  } = useContext(SignupFormContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const registerUser = async () => {
    if (!validateInputs(page)) return;
    setResponseState(RESPONSE_STATES.loading);
    let resp;
    const body = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
      telephone: phone,
      address,
      city,
      state,
      country,
      dayOfBirth: dateOfBirth.getDate(),
      monthOfBirth: dateOfBirth.getMonth() + 1,
      yearOfBirth: dateOfBirth.getFullYear(),
      zipCode: postalCode,
    };
    try {
      resp = await axios.post("https://paysprint.ca/api/v1/register", body, {
        headers: {
          Authorization:
            "Bearer base64:JFM+PJaWD/pBypX+NhXudDrAmianZdGYZ41qz4WhXL0=",
        },
      });

      if (resp.status === 200) {
        setResponseState(RESPONSE_STATES.success);
        navigate("/register");
        console.log(resp);
      } else {
        throw resp.data;
      }
    } catch (e) {
      console.log(e);
      setResponseState(RESPONSE_STATES.error);
      if (e?.response?.status === 400) {
        setErrorMessage(e.response.data?.message);
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
      console.log(e.response);
    }
  };

  const validateInputs = (page) => {
    if (page === 1) {
      if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !address ||
        !city ||
        !postalCode ||
        !country ||
        !state
      )
        return setErrorMessage("All fields must be filled.");

      if (firstName.length < 3 || lastName < 3)
        return setErrorMessage(
          "First name and last name must be 3 or more characters"
        );

      if (dateOfBirth.getFullYear() > new Date().getFullYear() - 18)
        return setErrorMessage("User must be 18 or above");
    } else if (page === 2) {
      if (!email || !confirmEmail || !password || !confirmPassword)
        return setErrorMessage("All fields must be filled.");

      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (!emailRegex.exec(email))
        return setErrorMessage("Invalid Email entered.");
      if (email !== confirmEmail)
        return setErrorMessage("Email and Confirm Email fields must match.");

      if (password.length < 8)
        return setErrorMessage("Password cannot be less than 8 characters.");

      if (password !== confirmPassword)
        return setErrorMessage(
          "Password and Confirm Password fields must match."
        );
    } else if (page === 3) {
      if (!transactionRange)
        return setErrorMessage("Select transaction range.");

      if (!sourceOfFunds) return setErrorMessage("Select source of funds");

      if (sourceOfFunds === "others" && !specifySourceOfFunds)
        return setErrorMessage("Please specify the source of funds");
    } else if (page === 4) {
      if (!hearAboutUs) return setErrorMessage("Select how you heard about us");

      if (hearAboutUs === "others" && !specifyHeardAboutUs)
        return setErrorMessage("You must specify how you heard about us");
      if (!acceptTandC)
        return setErrorMessage("Terms and Conditions have not been accepted");
    }
    setErrorMessage("");
    return true;
  };

  const showSignupPage = () => {
    switch (page) {
      case 1: 
        return <SignupFirstPage goToSecondPage={() => pageChange(2)} />;
      case 2: 
        return <SignupSecondPage goToThirdPage={() => pageChange(3)} />;
      case 3:
        return <SignupThirdPage goToFourthPage={() => pageChange(4)} />;
      case 4:
        return <SignupFourthPage />;
      default:
        <></>;
    }
  };

  const pageChange = (iPage) => {
    setErrorMessage("");
    if (iPage >= page) return;
    setPage(iPage);
  };

  return (
    <div className="signup-container">
      <div className="mobile-progress">
        <div
          className={getConditionalClassNames(
            [page === 1, page > 1],
            "circle",
            ["ongoing", "done"]
          )}
          onClick={() => pageChange(1)}
        >
          {page > 1 ? <FontAwesomeIcon icon={faCheck} /> : "1"}
        </div>
        <div
          className={getConditionalClassName(page > 1, "separator", "active")}
        />
        <div
          className={getConditionalClassNames(
            [page === 2, page > 2],
            "circle",
            ["ongoing", "done"]
          )}
          onClick={() => pageChange(2)}
        >
          {page > 2 ? <FontAwesomeIcon icon={faCheck} /> : "2"}
        </div>
        <div
          className={getConditionalClassName(page > 2, "separator", "active")}
        />
        <div
          className={getConditionalClassNames(
            [page === 3, page > 3],
            "circle",
            ["ongoing", "done"]
          )}
          onClick={() => pageChange(3)}
        >
          {page > 3 ? <FontAwesomeIcon icon={faCheck} /> : "3"}
        </div>
        <div
          className={getConditionalClassName(page > 3, "separator", "active")}
        />
        <div
          className={getConditionalClassNames(
            [page === 4, page > 4],
            "circle",
            ["ongoing", "done"]
          )}
          onClick={() => pageChange(4)}
        >
          {page > 4 ? <FontAwesomeIcon icon={faCheck} /> : "4"}
        </div>
      </div>
      <div className="desktop-progress">
        <div
          className={getConditionalClassName(
            page >= 1,
            "progress-box",
            "active"
          )}
          onClick={() => pageChange(1)}
        >
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">
            <h3> Personal Information</h3>
            <em>Please provide your name and necessary information</em>
          </div>
        </div>
        <div
          className={getConditionalClassName(
            page >= 2,
            "progress-box",
            "active"
          )}
          onClick={() => pageChange(2)}
        >
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">
            <h3> Your Details </h3>
            <em>Please provide your email and necessary information</em>
          </div>
        </div>
        <div
          className={getConditionalClassName(
            page >= 3,
            "progress-box",
            "active"
          )}
          onClick={() => pageChange(3)}
        >
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">
            <h3>Account Specifications</h3>
            <em>Please provide all necessary information</em>
          </div>
        </div>
        <div
          className={getConditionalClassName(
            page >= 4,
            "progress-box",
            "active"
          )}
          onClick={() => pageChange(4)}
        >
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text">
            <h3>Source Attribution</h3>
            <em> We would like to know how you heard about us </em>
          </div>
        </div>
      </div>

      <section>
        <main>
          <div className="acct-type">
            <div className="personal" type="button" onClick={ () => handleClick('#', navigate) }> <p> Personal Account </p> </div>
            <div className="merchant" type="button" onClick={ () => handleClick('/merchant-register', navigate) }> <p> Merchant Account </p> </div>
          </div>
          {showSignupPage()}
          {errorMessage && <em className="error">*{errorMessage}</em>}
          <button type="submit"
            onClick={() => {
              if (page === 4) {
                registerUser();
              } else if (validateInputs(page)) {
                setPage(page + 1);
              }
            }}
          >
            {responseState === RESPONSE_STATES.loading ? (
              <Loader />
            ) : page === 4 ? (
              "Register"
            ) : (
              "Proceed"
            )}
          </button>
          <em>
            Already have an account? <Link to="/login">Sign in</Link>
          </em>
        </main>
      </section>
    </div>
  );
};
