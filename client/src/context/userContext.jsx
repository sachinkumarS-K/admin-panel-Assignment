import { createContext, useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
  let userData = localStorage.getItem("data");
  const loginStatus = JSON.parse(localStorage.getItem("login")) || false;
  const [isLoggedIn, setIsloggdIn] = useState(loginStatus);

  function setUser(data) {
    userData = data;
    console.log(userData);
    setIsloggdIn(true);
  }

  const value = { userData, isLoggedIn, setIsloggdIn, setUser };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
