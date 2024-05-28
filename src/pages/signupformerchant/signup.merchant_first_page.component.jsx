// import googleColoredIcon from "assets/svg/google_colored_icon.svg";
import { SignupFormContext } from "context/signup-form.context";
import { useContext } from "react";

export const SignupMerchantFirstPage = () => {
  const {
    legal_name,
    business_phone,
    industry,
    website,
    email,
    confirmEmail,
    password,
    confirmPassword,
    setLegalName,
    setBusinessPhone,
    setIndustry,
    setWebsite,
    setEmail,
    setConfirmEmail,
    setPassword,
    setConfirmPassword,
  } = useContext(SignupFormContext);

  return (
    <div className="signup-first-page">
      <h1>Create Your Account</h1>
      <em>To create your account please provide your details</em>
      {/* <button>
        <img src={googleColoredIcon} alt="" />
        Sign up with Google
      </button> */}

      <form>
        <div className="legal_name">
          <label htmlFor="legal_name">
            Legal Entity Name<span>*</span>
            <input
              type="text"
              placeholder="Business Name*"
              id="legal_name"
              value={legal_name}
              onChange={(e) => setLegalName(e.target.value)}
            />
          </label>
        </div>
        <div className="business_phone">
          <label htmlFor="business_phone">
            Business Telephone<span>*</span>
            <input
              type="text"
              placeholder="Business Telephone*"
              id="business_telephone"
              value={business_phone}
              onChange={(e) => setBusinessPhone(e.target.value)}
            />
          </label>
        </div>
        <div className="industry">
          <label htmlFor="industry">
            Industry<span>*</span>
            <input
              type="text"
              placeholder="Industry"
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </label>
        </div>
        <div className="website">
          <label htmlFor="website">
            Website
            <input
              type="text"
              placeholder="www.example.com"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>
        <div className="emails">
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

          <label htmlFor="confirm-email">
            Confirm Email Address<span>*</span>
            <input
              type="email"
              placeholder="forexample@company.com"
              id="confirm-email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="passwords">
          <label htmlFor="password">
            Password<span>*</span>
            <input
              type="password"
              placeholder="******"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirm-password">
            Confirm Password<span>*</span>
            <input
              type="password"
              placeholder="******"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
