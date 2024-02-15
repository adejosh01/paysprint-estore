import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
  isOTPVerified: null,
  setIsOTPVerified: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, isOTPVerified, setUser, setIsOTPVerified }}
    >
      {children}
    </UserContext.Provider>
  );
};
