import googleColoredIcon from "assets/svg/google_colored_icon.svg";
import { SignupFormContext } from "context/signup-form.context";
import { useContext, useEffect } from "react";

export const SignupFirstPage = () => {
  const {
    email,
    confirmEmail,
    password,
    confirmPassword,
    setEmail,
    setConfirmEmail,
    setPassword,
    setConfirmPassword,
  } = useContext(SignupFormContext);

  return (
    <div className="signup-first-page">
      <h1>Create Your Account</h1>
      <em>To create your account please provide your details</em>
      <button>
        <img src={googleColoredIcon} alt="" />
        Sign up with Google
      </button>
      <form>
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
