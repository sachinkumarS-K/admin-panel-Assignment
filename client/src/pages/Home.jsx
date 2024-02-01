import React, { useContext } from "react";
import Signup from "../component/Signup";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userData, isLoggedIn, setIsloggdIn } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[90vh] flex items-center justify-center">
      {
        <div
          onClick={() => navigate("/certificate")}
          className="py-3 px-7 text-2xl border border-gray-600 rounded-xl bg-gray-100 cursor-pointer"
        >
          Generate Certificate
        </div>
      }
    </div>
  );
};

export default Home;
