import axios from "axios";
import React, { useEffect, useState } from "react";
import UserRequest from "./UserRequest";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  async function getUsers() {
    const res = await axios.get("http://localhost:8000/user/getAllUser");
    //console.log(res.data.user);
    setUser(res.data.user);
  }
  user && console.log(user);
  let userData;
  if (user) {
    userData = user.filter((d) => d.certificate);
    console.log(userData);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="p-6 w-10/12 mx-auto mt-20 shadow-[0_0_10px_black] flex flex-col gap-10   px-5 items-center space-x-4">
      <div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
      <div className="flex flex-col justify-between gap-10">
        {userData &&
          userData.map((data) => (
            <UserRequest data={data} key={data._id} setUser={setUser} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
