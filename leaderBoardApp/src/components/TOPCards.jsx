import React, { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";

const rankColors = ["bg-yellow-400", "bg-gray-300", "bg-orange-400"];
const Height = ["w-[170px]", " w-[200px]", " w-[180px]"];
const TOPCards = ({ users }) => {

  const [NewOrder,setNewOrder]=useState([]);
   console.log("Top three users ",users);
   
   useEffect(()=>
  {
   if (users && users.length === 3) {
      const Order = [users[1], users[0], users[2]];
      Order[0].id=1;
      Order[1].id=0;
      Order[2].id=2;
      setNewOrder(Order);
    } 
  },[users])
      
     console.log("new oredrs ",NewOrder)
     if(!NewOrder)
     {
      return;
     }
  return (
    <div className="flex justify-center w- items-end gap-4 my-6">
      { NewOrder && NewOrder.map((user, i) => (
        <div
          key={user._id}
          className={`flex flex-col items-center ${Height[i]} justify-center ${rankColors[i]} p-4 rounded-xl shadow-lg`}
        >
          <div className="w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center">
            <FaMedal size={24} className="text-yellow-600" />
          </div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="font-mono text-lg"> points:{ user.points}</p>
          <span className="text-sm mt-1 font-bold">#{user.id + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default TOPCards;