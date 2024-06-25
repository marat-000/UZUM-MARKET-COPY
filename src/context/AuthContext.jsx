import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [IsAuth, setIsAuth] = useState(token ? true : false);
  const info = JSON.parse(localStorage.getItem("user-info"));
  return (
    <AuthContext.Provider value={{ IsAuth, setIsAuth, info }}>
      {children}
    </AuthContext.Provider>
  );
};
