import React, { useState, useEffect } from "react";
import { getUserInfo } from "../appwrite/auth";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ITEM, increaseItem, decreaseItem, clearCart } from "../redux/features/cartSilce";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Cart() {
	const navigate = useNavigate();
	const [item, setitem] = useState([]);
	const dispatch = useDispatch();
	const [userData, setuserData] = useState([]);
	const Cart = useSelector((state) => state.cart.cart);
	const TotalAmount = useSelector((state) => state.cart.totalAmount);
	async function getInfo() {
		let info = await getUserInfo();
		setuserData(info);
	}
	useEffect(() => {
		getInfo();
		setitem(Cart);
	}, []);
	return (
		<div className=" h-full w-full flex justify-center items-center">
			{Cart.length === 0 ? (
				<>
					<div className="w-full h-screen flex items-center justify-center">
						<div className="text-center">
							<h1>your Cart is empte :(</h1>
							<button
								className="bg-[#30281d] text-white px-10 py-2 rounded-lg mt-6"
								onClick={() => {
									navigate("/shop");
								}}
							>
								go to shop
							</button>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="h-full w-full  grid items-center justify-centers ">
						<div className="p-2">
							<h1 className="text-3xl font-medium pl-5">Hi {userData.name} 👋</h1>
						</div>
						<div className=" border-t-2 border-b-2 flex items-center justify-between py-2.5 px-24 sticky top-14 bg-white w-full">
							<h1>Image</h1>
							<h1>Name</h1>
							<h1>Price</h1>
							<h1>Category</h1>
							<h1>Quantity</h1>
							<h1>Total</h1>
							<h1>Remove</h1>
						</div>

						{Cart.map((elm) => {
							return (
								<div className="m-1 p-1">
									<div className="flex gap-7 items-center justify-between px-16">
										<img
											src={elm.img}
											className="h-[100px] w-[100px] object-contain m-1"
											alt=""
										/>
										<h1>{elm.name}</h1>
										<h1>₹{elm.price}</h1>
										<h1>{elm.category}</h1>
										<div className="flex items-center justify-center gap-4">
											<button
												className="border-2 px-3 rounded-lg bg-slate-100"
												onClick={() => {
													dispatch(increaseItem(elm.$id));
												}}
											>
												+
											</button>
											<h1>{elm.quantity}</h1>

											<button
												className="border-2 px-3 rounded-lg bg-slate-100"
												onClick={() => {
													dispatch(decreaseItem(elm.$id));
												}}
											>
												-
											</button>
										</div>
										<h1>₹{elm.quantity * elm.price}</h1>
										<button
											className="bg-red-500 text-white font-medium cursor-pointer px-5 py-1 rounded-lg"
											onClick={() => {
												dispatch(REMOVE_ITEM(elm.$id));
											}}
										>
											<MdDelete size={22} />
										</button>
									</div>

									<hr />
								</div>
							);
						})}

						<div className="border-t-2 h-[300px] w-full p-2 items-center text-center justify-center grid">
							<h1></h1>
							<div className="">
								{" "}
								<h1 className="text-right pr-12 text-xl font-medium">
									₹{TotalAmount}
								</h1>
							</div>
							<div>
								<h1 className="text-right pr-12 p-2">
									Delivery fee <span className="font-medium">₹40</span>
								</h1>
							</div>
							<h1 className="text-right pr-48 p-1 text-xl">+</h1>
							<div className="h-[1px] bg-black w-[1000px]"></div>
							<div>
								<h1 className="text-right pr-12 p-2 text-2xl font-bold">
									₹{TotalAmount + 40}
								</h1>
							</div>
							<div className="mt-3 p-2 items-center justify-end pr-12  flex">
								<button
									className=" mr-6 p-1 px-6 rounded-lg  bg-red-500 text-white font-medium items-center justify-center flex "
									onClick={() => {
										dispatch(clearCart());
									}}
								>
									Clear cart
								</button>
								<button className="  p-1 px-6 rounded-lg bg-blue-500 text-white font-medium items-center justify-center flex ">
									Buy
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Cart;
