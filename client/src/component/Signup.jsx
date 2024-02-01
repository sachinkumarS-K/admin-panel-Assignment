import React, { useContext, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { userContext } from "../context/userContext";

const Signup = () => {
  const { userData, isLoggedIn, setIsloggdIn } = useContext(userContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function formSubmitHandler(e) {
    e.preventDefault();
    const { email, password, userName } = formData;

    const res = await axios.post(
      "http://localhost:8000/user/register",
      formData
    );
    // console.log(res);
    localStorage.setItem("data", JSON.stringify(res.data.user));
    localStorage.setItem("login", true);
    setFormData({
      userName: "",
      email: "",
      password: "",
    });
  }
  return (
    <div>
      <div className="min-h-[90vh] flex overflow-x-auto items-center justify-center ">
        <form
          noValidate
          onSubmit={formSubmitHandler}
          className="flex outline-none text-black flex-col justify-center gap-3 rounded-lg p-4 shadow-slate-600 w-96 shadow-lg ackdrop-blur-sm bg-white/20 px-5"
        >
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-black">
              Name
            </label>
            <input
              type="text"
              name="userName"
              required
              placeholder="Enter your Name"
              id="name"
              onChange={onChangeHandler}
              value={formData.userName}
              className="bg-transparent outline-none px-2 rounded-md py-2 border"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={onChangeHandler}
              value={formData.email}
              placeholder="Enter your Email"
              id="email"
              className="bg-transparent px-2 outline-none rounded-md py-2 border"
            />
          </div>

          <div className="flex flex-col relative  gap-1">
            <label htmlFor="password" className="font-semibold ">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              onChange={(e) => {
                onChangeHandler(e);
              }}
              value={formData.password}
              placeholder="Enter your Password"
              id="password"
              className="bg-transparent px-2 outline-none rounded-md py-2 border"
            />
            {showPass ? (
              <IoEye
                onClick={() => setShowPass(!showPass)}
                className="absolute right-5 cursor-pointer top-10 text-xl"
              />
            ) : (
              <IoEyeOff
                onClick={() => setShowPass(!showPass)}
                className="absolute cursor-pointer right-5 top-10 text-xl"
              />
            )}
          </div>
          <button className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out  rounded-lg py-2 font-semibold">
            Create Account
          </button>
          <p className="text-right pr-4 mt-2">
            Already have an account ?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-400 ml-1 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
