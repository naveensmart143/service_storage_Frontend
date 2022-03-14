import react, { useState } from "react";

export const authContext = react.createContext({
  userId: null,
  token: null,
  login: (token, userId) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  // let cachedtoken = localStorage.getItem("token");
  // let cachedId = localStorage.getItem("userId");
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
  };
  const logout = () => {
    setUserId(null);
    setToken(null);
  };

  return (
    <authContext.Provider
      value={{
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
