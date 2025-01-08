import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserInfo } from "../appwrite/auth";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {} from "../redux/features/cartSilce";
function Navber() {
	const navigate = useNavigate();
	const item = useSelector((state) => state.cart.cart);
	const [isUserIsLogIn, setisUserIsLogIn] = useState(false);
	useEffect(() => {
		async function checkUserIsLogIn() {
			const info = await getUserInfo();
			if ((info.status = true)) {
				setisUserIsLogIn(true);
			} else {
				setisUserIsLogIn(false);
			}
		}
		checkUserIsLogIn();
	});
	return (
		<nav className="bg-white border-gray-200 w-full h-[60px] sticky top-0 items-center justify-between shadow-xl">
			<div className="max-w-screen-xl h-[60px] w-full flex flex-wrap items-center justify-between mx-auto ">
				<NavLink to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
					<h1 className="text-3xl font-mono font-semibold">COFFEE</h1>
				</NavLink>

				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 items-center">
						<li>
							<NavLink
								to={"/"}
								className={({ isActive }) =>
									`${
										isActive
											? "bg-red-700 py-2 px-3 text-teal-600 rounded md:bg-transparent md:p-0 "
											: "py-2 px-3 text-black rounded md:bg-transparent md:p-0 "
									}`
								}
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to={"/shop"}
								className={({ isActive }) =>
									`${
										isActive
											? "bg-red-700 py-2 px-3 text-teal-600 rounded md:bg-transparent md:p-0 "
											: "py-2 px-3 text-black rounded md:bg-transparent md:p-0 "
									}`
								}
							>
								Shop
							</NavLink>
						</li>

						{isUserIsLogIn ? (
							<>
								<li>
									<NavLink to={"/account"}>Account</NavLink>
								</li>
								<li>
									<NavLink
										to={"/cart"}
										className=" py-2 px-3 flex  text-black rounded  md:hover:bg-transparent md:border-0 md:hover:text-[#30281d] md:p-0  md:dark:hover:text-[#30281d]  "
									>
										<FaShoppingCart size={25} />

										{item.length === 0 ? (
											<></>
										) : (
											<h1 className="ml-3.5 absolute top-0 p-[0px] px-[8px] py-[0.5px] rounded-full mt-0.5 text-white bg-red-500">
												{item.length}
											</h1>
										)}
									</NavLink>
								</li>
							</>
						) : (
							<>
								<button
									onClick={() => {
										navigate("/login");
									}}
									className="bg-[#30281d] text-white px-4 py-1 rounded-lg shadow-lg shadow-[#30281d] "
								>
									Log in{" "}
								</button>
								<button
									onClick={() => {
										navigate("/signup");
									}}
									className="bg-[#30281d] text-white px-4 py-1 rounded-lg shadow-lg shadow-[#30281d] "
								>
									sign up{" "}
								</button>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navber;
