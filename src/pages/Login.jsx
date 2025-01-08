import React, { useEffect, useState } from "react";
import { loginTheUser } from "../appwrite/auth";
import {useNavigate} from 'react-router-dom'
const Login = () => {
 
     const navigate = useNavigate()
     const [User, setUser] = useState({email:"" , password:"" })
     const loginUser =async ()=>{
        await loginTheUser(User.email, User.password)
     }
    //  useEffect(() => {
    //    loginUser()
    //  }, [])
     
	return (
		<div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
			<div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
				<div
					className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
					style={{
						backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
					}}
				></div>
				<div className="w-full p-8 lg:w-1/2">
					<p className="text-xl text-gray-600 text-center">Welcome back!</p>
					<div className="mt-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email Address
						</label>
						<input
							className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
							type="email"
							required
							onChange={(e)=>{setUser({...User ,email:e.target.value})}}
						/>
					</div>
					<div className="mt-4 flex flex-col justify-between">
						<div className="flex justify-between">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Password
							</label>
						</div>
						<input
							className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
							type="password"
							onChange={(e)=>{setUser({...User ,password:e.target.value})}}

						/>
						<button
							className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
						>
							Forget Password?
						</button>
					</div>
					<div className="mt-8">
						<button onClick={()=>{loginUser() , navigate("/")}} className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
							Login
						</button>
					</div>
					<a
						href="#"
						className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
					>
						 
					</a>
					<div className="mt-4 flex items-center w-full text-center">
						<h1 href="#" className="text-xs text-gray-500 capitalize text-center w-full">
							Don&apos;t have any account yet? {" "}
							<button className="text-blue-700" onClick={()=>{navigate("/signup")}}> Sign Up</button>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login
