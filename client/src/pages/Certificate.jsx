import React, { useContext, useState } from "react";
import { userContext } from "../context/userContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  const { userData, isLoggedIn, setIsloggdIn } = useContext(userContext);
  const navigate = useNavigate();
  const data = JSON.parse(userData);
  //console.log(data.certificate.email);
  const [formData, setFormData] = useState({
    userName: "",
    fatherName: "",
    roll: "",
    regNo: "",
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
    const res = await axios.post("http://localhost:8000/user/getClc", {
      ...formData,
      id: data._id,
    });
    console.log(res);
    console.log(res.data.success);
    if (res.data.success) {
      toast.success("Form submition successfull");
      setFormData({
        userName: "",
        fatherName: "",
        roll: "",
        regNo: "",
      });
      navigate("/");
    }
  }
  return (
    <div className="min-h-[90vh] flex overflow-x-auto items-center justify-center ">
      {data && data.certificate ? (
        <div>
          {data.certificate.status ? (
            <div className="flex flex-col gap-5 justify-center">
              <h1 className="text-2xl font-semibold">You are approved</h1>
              <button className="py-2 px-6 bg-gray-100 rounded-lg">
                DownLoad Certificate
              </button>
            </div>
          ) : (
            <h1>Your requst is submitted. Wait Until the admin approves</h1>
          )}
        </div>
      ) : (
        <form
          noValidate
          onSubmit={formSubmitHandler}
          className="flex outline-none text-black flex-col justify-center gap-3 rounded-lg p-4 shadow-slate-600 w-96 shadow-lg ackdrop-blur-sm bg-white/20 px-5"
        >
          <h1 className="font-semibold text-xl">Get CLC</h1>
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
            <label htmlFor="fatherName" className="font-semibold text-black">
              Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              required
              placeholder="Enter your Father's Name"
              id="fatherName"
              onChange={onChangeHandler}
              value={formData.fatherName}
              className="bg-transparent outline-none px-2 rounded-md py-2 border"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="roll" className="font-semibold text-black">
              Roll Number
            </label>
            <input
              type="text"
              name="roll"
              required
              placeholder="Enter your Roll Number"
              id="roll"
              onChange={onChangeHandler}
              value={formData.roll}
              className="bg-transparent outline-none px-2 rounded-md py-2 border"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="regNo" className="font-semibold text-black">
              Registration Number
            </label>
            <input
              type="text"
              name="regNo"
              required
              placeholder="Enter your Registration Number"
              id="regNo"
              onChange={onChangeHandler}
              value={formData.regNo}
              className="bg-transparent outline-none px-2 rounded-md py-2 border"
            />
          </div>
          <button className="py-2 text-center bg-yellow-500 rounded-lg">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Certificate;
