import { createContext, useState } from "react";
import { getMaxDOBForAdult } from "utils/utils";

export const SignupFormContext = createContext({
  legal_name: "",
  business_phone: "",
  industry: "",
  website: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  address: "",
  city: "",
  str_number: "",
  str_name: "",
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
  setLegalName: () => null,
  setBusinessPhone: () => null,
  setIndustry: () => null,
  setWebsite: () => null,
  setEmail: () => null,
  setConfirmEmail: () => null,
  setPassword: () => null,
  setConfirmPassword: () => null,
  setFirstName: () => null,
  setLastName: () => null,
  setDateOfBirth: () => null,
  setAddress: () => null,
  setCity: () => null,
  setStreetNumber: () => null,
  setStreetName: () => null,
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
  const [legal_name, setLegalName] = useState("");
  const [business_phone, setBusinessPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
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
  const [str_number, setStreetNumber] = useState("");
  const [str_name, setStreetName] = useState("");
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
        legal_name,
        business_phone,
        industry,
        website,
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
        str_number,
        str_name,
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
        setStreetNumber,
        setStreetName,
        setPostalCode,
        setState,
        setLegalName,
        setBusinessPhone,
        setIndustry,
        setWebsite,
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
