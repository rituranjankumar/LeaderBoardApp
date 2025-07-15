// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Podium from "../components/TOPCards";
import { apiConnector } from "../services/apiConnector";
import LeaderboardList from "../components/LeaderBoardList";
import UserSelector from "../components/UserSelector";
import ClaimButton from "../components/ClaimButton";
import AddUser from "../components/AddUser";
import { userApi } from "../services/apis";
import { NavLink } from "react-router-dom";
import TOPCards from "../components/TOPCards";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await apiConnector("GET", userApi.getUserDetail);
      setUsers(response.data.users);
    } catch (err) {
      console.error("Failed to fetch users:", err.message);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-yellow-100 to-yellow-300 p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-amber-900 drop-shadow">
         LeaderBoard ranking
      </h1>

       
      <div className="absolute top-4 right-4 z-10">
        <NavLink
          to="/history"
          className="bg-black text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition-all duration-200"
        >
          View History
        </NavLink>
      </div>

     
      <div className="flex flex-col items-center gap-4">
        <UserSelector users={users} setSelectedUserId={setSelectedUserId} />
        <ClaimButton userId={selectedUserId} onClaim={fetchUsers} />
      </div>

    
      <div className="mt-6">
        <TOPCards users={users?.slice(0, 3)} />
        <LeaderboardList users={users?.slice(3)} />
      </div>

       
      <div className="absolute top-20 right-4 z-10">
        <div className="bg-amber-500 hover:bg-amber-600 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium">
          <AddUser userAdded={fetchUsers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
