import React, { useEffect, useState } from "react";
import { getUserInfo, logOutUser, updatePassword } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
function Account() {
	const navigate = useNavigate();
	const [userData, setuserData] = useState([]);
	const Usernfo = async () => {
		const getInfo = await getUserInfo();
		setuserData(getInfo);
	};
	const logOut = () => {
		logOutUser();
	};
	useEffect(() => {
		Usernfo();
	}, []);

	// console.log("your data :", userData);
	return (
		<div>
			<h1 className="m-2"> {"Hi " + userData.name}</h1>

			<h1 className="m-2">{userData.email}</h1>

			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="p-3 bg-sky-400 mb-2 ml-2"
				onClick={() => {
					navigate("/account/changeemail");
				}}
			>
				change email ?
			</motion.button>
			<br />
			<button
				className="p-3 bg-sky-400 ml-2"
				onClick={() => {
					navigate("/account/forgetpassword");
				}}
			>
				change password ?
			</button>
			<br />
			<button
				onClick={() => {
					logOut();
				}}
			>
				log out
			</button>
		</div>
	);
}

export default Account;
