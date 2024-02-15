import googleColoredIcon from "assets/svg/google_colored_icon.svg";
import { SignupFormContext } from "context/signup-form.context";
import { useContext, useState } from "react";

export const SignupThirdPage = () => {
  const {
    sourceOfFunds,
    accountPurpose,
    transactionRange,
    specifySourceOfFunds,
    setAccountPurpose,
    setSourceOfFunds,
    setTransactionRange,
    setSpecifySourceOfFunds,
  } = useContext(SignupFormContext);

  return (
    <div className="signup-third-page">
      <h1>Create Your Account</h1>
      <em>To create your account please provide your details</em>
      <button>
        <img src={googleColoredIcon} alt="" />
        Sign up with Google
      </button>
      <form>
        <label htmlFor="transaction-range">
          Expected transaction range<span>*</span>
          <select
            id="transaction-range"
            value={transactionRange}
            onChange={(e) => setTransactionRange(e.target.value)}
          >
            <option disabled value="">
              -- Select transaction range --
            </option>
            <option value="0-10,000">0 - 10,000</option>
            <option value="10001-50,000">10,001 - 50,000</option>
            <option value="50001-500000">50,001 - 500,000</option>
            <option value=">500,000">Above 500,001</option>
          </select>
        </label>
        <label htmlFor="source">
          Source of funds<span>*</span>
          <select
            id="source"
            value={sourceOfFunds}
            onChange={(e) => setSourceOfFunds(e.target.value)}
          >
            <option disabled value="">
              -- Select source of funds --
            </option>
            <option value="salary">Salary, Pension, Social Benefits</option>
            <option value="SOP">
              Director's Remuneration, Share of Profits
            </option>
            <option value="dividends">
              Dividends, Interest on Loans, etc.
            </option>
            <option value="fandf">Family and Friends</option>
            <option value="others">Others (please describe)</option>
          </select>
        </label>
        {sourceOfFunds === "others" ? (
          <label htmlFor="sourceoffunds">
            Please specify source of funds
            <input
              type="text"
              id="sourceoffunds"
              value={specifySourceOfFunds}
              onChange={(e) => setSpecifySourceOfFunds(e.target.value)}
            />
          </label>
        ) : (
          <></>
        )}
        <label htmlFor="purpose">
          Purpose of opening the account
          <textarea
            rows="5"
            value={accountPurpose}
            onChange={(e) => setAccountPurpose(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};
