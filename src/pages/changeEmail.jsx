import React, { useEffect, useState, useSyncExternalStore } from "react";
import { updateEmail } from "../appwrite/auth";
function changeEmail() {
	const [NewUserData, setNewUserData] = useState({Password:"" , NewEmail:"" , ComformEmail:""})
	const upEmaill = () => {
		updateEmail(NewUserData.ComformEmail, NewUserData.Password);
	};
	// useEffect(() => {
	// 	upEmaill();
	// }, []);
    
	return (
		<div className=" h-screen max-h-full w-full  p-2 items-center flex justify-center">
			<div className="bg-red-500 h-[450px]  w-[400px] rounded-xl shadow-2xl shadow-gray-500 p-2  items-center grid justify-center text-center ">
				<h1 className="text-3xl font-extrabold text-blue-900">New Email </h1>

				<div className="  h-[350px] w-[350px] p-2 grid items-center justify-center ">
					<div className="relative">
						<label className="absolute left-0">Password</label>
						<br />
						<input type="text" name="password" placeholder="your password" required onChange={(e)=>{setNewUserData({...NewUserData, Password:e.target.value})}} className="w-[300px] py-2 pl-2 rounded-lg" />
					</div>
					<div className="relative">
						<label className="absolute left-0">Naw Email</label>
						<br />
						<input type="text" name="email" placeholder="Email" required onChange={(e)=>{setNewUserData({...NewUserData,NewEmail:e.target.value})}}  className="w-[300px] py-2 pl-2 rounded-lg" />
					</div>
					<div className="relative">
						<label className="absolute left-0">Comform Email</label>
						<br />
						<input type="text" name="email" placeholder="Comform Email" required onChange={(e)=>{setNewUserData({...NewUserData,ComformEmail:e.target.value})}}  className="w-[300px] py-2 pl-2 rounded-lg" />
					</div>
					<button onClick={()=>{upEmaill()}}  className="w-[300px] py-2 pl-2 rounded-lg bg-blue-700 text-white">drgthy</button>
				</div>
			</div>
		</div>
	);
}

export default changeEmail;
