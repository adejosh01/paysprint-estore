import notARobot from "assets/images/not_a_robot.png";
import shield from "assets/svg/shield.svg";
import { useContext } from "react";
import { SignupFormContext } from "context/signup-form.context";

export const SignupFourthPage = () => {

  const {
    hearAboutUs,
    referredBy,
    acceptTandC,
    specifyHeardAboutUs,
    setAcceptTandC,
    setHearAboutUs,
    setReferredBy,
    setSpecifyHeardAboutUs,
  } = useContext(SignupFormContext);

  return (
    <div className="signup-fourth-page">
      <h1>Create Your Account</h1>
      <em>To create your account please provide your details</em>
      
      <form>
        <label htmlFor="hear">
          How did you hear about us?<span>*</span>
          <select
            id="hear"
            value={hearAboutUs}
            onChange={(e) => setHearAboutUs(e.target.value)}
          >
            <option disabled value="">
              -- Select how you heard about us --
            </option>
            <option value="g_ads">Google Ads</option>
            <option value="facebook">Facebook</option>
            <option value="youtube">Youtube</option>
            <option value="others">Others</option>
          </select>
        </label>
        {hearAboutUs === "others" ? (
          <label htmlFor="others-hear">
            Please specify how you heard about us
            <input
              type="text"
              id="others-hear"
              value={specifyHeardAboutUs}
              onChange={(e) => setSpecifyHeardAboutUs(e.target.value)}
            />
          </label>
        ) : (
          <></>
        )}
        <label htmlFor="referred">
          Referred by
          <input
            type="text"
            id="referred"
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
          />
        </label>
        <label htmlFor="accept">
          I accept the <a href="www.google.com">Terms and Conditions</a>
          <span>*</span>
          <input
            type="checkbox"
            id="accept"
            checked={acceptTandC}
            onChange={(e) => setAcceptTandC(e.target.checked)}
          />
        </label>

        <div className="verification">
          <img src={notARobot} alt="" />
          <em>
            <img src={shield} alt="" />
            Protected by bank-level security
          </em>
        </div>
      </form>
    </div>
  );
};
