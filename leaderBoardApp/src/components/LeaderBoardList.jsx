import React from "react";
import { FaCoins } from "react-icons/fa";

const LeaderboardList = ({ users }) => {
  return (
    <div className="bg-white rounded-lg p-4 max-w-md mx-auto shadow-lg">
      {users.map((user, index) => (
        <div
          key={user._id}
          className="flex justify-between items-center border-b py-2"
        >
          <span className="font-bold">#{index + 4}</span>
          <span className="font-medium">{user.name}</span>
          <span className="text-yellow-500   flex items-center gap-1">
            <FaCoins />points: { (user.points)}
          </span>
        </div>
      ))}
    </div>
  );
};

 

export default LeaderboardList;