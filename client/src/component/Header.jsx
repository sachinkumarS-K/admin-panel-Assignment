import React, { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const { userData, isLoggedIn, setIsloggdIn } = useContext(userContext);

  const data = JSON.parse(userData);

  useEffect(() => {}, []);
  return (
    <div className="w-screen ">
      <div className="w-10/12 py-5 mx-auto flex  justify-between">
        <div className="w-[30%]">
          <h1 className="text-3xl font-bold text-emerald-400 ">Application</h1>
        </div>
        <ul className=" w-[70%] hidden md:flex justify-end gap-9 items-center">
          {data && data.role === "ADMIN" && (
            <li
              className="text-xl font-semibold "
              onClick={() => navigate("/admin-dashboard")}
            >
              Admin dashboard
            </li>
          )}
          <li
            className="text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li className="text-xl font-semibold ">Services</li>
          <li className="text-xl font-semibold ">About Us</li>
          {isLoggedIn ? (
            <div
              onClick={() => {
                localStorage.setItem("data", null);
                localStorage.setItem("login", false);
                setIsloggdIn(!isLoggedIn);
                console.log(isLoggedIn);
                navigate("/");
              }}
              className="text-xl font-semibold cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out px-4  py-2 rounded-xl "
            >
              Log Out
            </div>
          ) : (
            <div className="space-x-2">
              <Link
                to={"/signup"}
                className="text-xl font-semibold bg-gray-300 p-2  py-2 rounded-xl "
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="text-xl font-semibold bg-gray-300 p-2  py-2 rounded-xl "
              >
                Login
              </Link>
            </div>
          )}
        </ul>
        <div className="block md:hidden ">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
