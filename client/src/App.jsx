import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import UserContextProvider from "./context/userContext";
import Header from "./component/Header";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="overflow-hidden">
      <UserContextProvider>
        <Header />
        <Outlet />
      </UserContextProvider>
      <Toaster />
    </div>
  );
}

export default App;
