import React from "react";
import { FaUserAlt } from "react-icons/fa";

const UserSelector = ({ users, setSelectedUserId }) => {
  return (
    <div className="flex items-center gap-2">
      <FaUserAlt className="text-amber-700 text-lg" />
      <select
        className="p-2 border border-amber-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">Select a User</option>
        {users && users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
