// src/components/AddUser.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../services/apiConnector";
import { userApi } from "../services/apis";
import { IoIosAddCircle } from "react-icons/io";
import toast from "react-hot-toast";
const AddUser = ({ userAdded }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const submitHandler = async (data) => {
        try {
            console.log("new user data ",data)
            const newUser = await apiConnector("POST", userApi.createUser, data);
           toast.success("User added successfully")
            reset();
            if (newUser) 
                {
                    userAdded();
                } // Refresh leaderboard
        } catch (error) {
            toast.error("Failed to add user: " + error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-2 items-center"
        >
           
            <button
                type="submit"
                className="bg-amber-700 cursor-pointer flex items-center justify-center gap-2   text-white px-3 py-1.5 rounded-md"
            >
                Add
                 <IoIosAddCircle />
            </button>
             <input
                type="text"
                placeholder="Enter name"
                {...register("name", { required: "Name is required" })}
                className="border p-1.5 rounded-md"
            />
            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
        </form>
    );
};

export default AddUser;
