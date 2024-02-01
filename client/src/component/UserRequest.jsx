import axios from "axios";
import React from "react";

const UserRequest = ({ data, setUser }) => {
  if (data.certificate.status) {
    return;
  }
  async function submitHandler() {
    const res = await axios.post("http://localhost:8000/user/approve", {
      id: data._id,
    });
    console.log(res.data.allusers);
    setUser(res.data.allusers);
  }
  return (
    <div className="flex items-center justify-between w-full gap-20">
      <div>
        <h1>{data.userName}</h1>
        <h1>{data.email}</h1>
      </div>
      <div>
        <button
          onClick={() => submitHandler()}
          className="py-2 px-6 bg-green-400 rounded-lg"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default UserRequest;
