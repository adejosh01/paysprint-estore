import { createContext, useState } from "react";
import { getMaxDOBForAdult } from "utils/utils";

export const SignupFormContext = createContext({
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  address: "",
  city: "",
  postalCode: "",
  country: "",
  state: "",
  phone: "",
  transactionRange: "",
  sourceOfFunds: "",
  accountPurpose: "",
  sourceOfFundsReason: "",
  hearAboutUs: "",
  referredBy: "",
  acceptTandC: null,
  specifyHeardAboutUs: "",
  specifySourceOfFunds: "",
  setEmail: () => null,
  setConfirmEmail: () => null,
  setPassword: () => null,
  setConfirmPassword: () => null,
  setFirstName: () => null,
  setLastName: () => null,
  setDateOfBirth: () => null,
  setAddress: () => null,
  setCity: () => null,
  setPostalCode: () => null,
  setCountry: () => null,
  setState: () => null,
  setTransactionRange: () => null,
  setSourceOfFunds: () => null,
  setAccountPurpose: () => null,
  setSourceOfFundsReason: () => null,
  setHearAboutUs: () => null,
  setReferredBy: () => null,
  setAcceptTandC: () => null,
  setSpecifyHeardAboutUs: () => null,
  setSpecifySourceOfFunds: () => null,
  setPhone: () => null,
});

export const SignupFormContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(getMaxDOBForAdult());
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [sourceOfFunds, setSourceOfFunds] = useState("");
  const [transactionRange, setTransactionRange] = useState("");
  const [accountPurpose, setAccountPurpose] = useState("");
  const [sourceOfFundsReason, setSourceOfFundsReason] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [acceptTandC, setAcceptTandC] = useState("");
  const [specifyHeardAboutUs, setSpecifyHeardAboutUs] = useState("");
  const [specifySourceOfFunds, setSpecifySourceOfFunds] = useState("");

  return (
    <SignupFormContext.Provider
      value={{
        email,
        confirmEmail,
        password,
        confirmPassword,
        address,
        city,
        country,
        dateOfBirth,
        phone,
        firstName,
        lastName,
        postalCode,
        state,
        sourceOfFunds,
        accountPurpose,
        transactionRange,
        sourceOfFundsReason,
        hearAboutUs,
        referredBy,
        acceptTandC,
        specifyHeardAboutUs,
        specifySourceOfFunds,
        setAddress,
        setCity,
        setCountry,
        setDateOfBirth,
        setFirstName,
        setLastName,
        setPostalCode,
        setState,
        setEmail,
        setConfirmEmail,
        setPassword,
        setConfirmPassword,
        setSourceOfFunds,
        setAccountPurpose,
        setTransactionRange,
        setSourceOfFundsReason,
        setHearAboutUs,
        setReferredBy,
        setAcceptTandC,
        setSpecifyHeardAboutUs,
        setSpecifySourceOfFunds,
        setPhone,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};
