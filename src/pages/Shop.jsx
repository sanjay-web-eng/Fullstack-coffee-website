import React, { useEffect, useState } from "react";
import { getAllData, listForcategory } from "../appwrite/dataBases";
import { NavLink } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/features/cartSilce";
import { ToastContainer, toast } from "react-toastify";

function Shop() {
	const [data, setdata] = useState([]);
	const [listForCoffee, setlistForCoffee] = useState([]);
	const [listForBread, setlistForBread] = useState([]);
	const dispatch = useDispatch();
	const notify = () => toast("Item add ");

	const FunForData = async () => {
		let getDataForDB = await getAllData();
		setdata(getDataForDB);
	};
	console.log(data);
	async function getCoffee() {
		const list = await listForcategory("coffee");
		setlistForCoffee(list.documents);
		//console.log(list);
	}
	async function getbread() {
		const list = await listForcategory("bread");
		setlistForBread(list.documents);
		//console.log(list);
	}
	useEffect(() => {
		FunForData();
		getCoffee();
		getbread();
	}, []);

	const AllListData = ({ item }) => {
		return (
			<div>
				<Button />
				<div className="p-2  w-full items-center justify-center flex flex-wrap gap-2">
					{item.length === 0 && <Loader />}
					{item.map((item) => {
						return (
							<div
								key={item.$id}
								className="border-2 w-[350px] h-[520px] p-3 rounded-lg shadow-xl"
							>
								<NavLink key={item.$id} to={`/details/${item.name}/${item.$id}`}>
									<img
										src={item.img}
										className="h-[350px] rounded-lg  w-full  "
										alt=""
									/>
									<h1 className="text-2xl text-[#30281d]  font-medium">
										{item.name}
									</h1>
									<h2 className="text-xl  text-[#30281d] font-semibold mt-1">
										{" "}
										₹ {item.price}
									</h2>
									<h1>{item.category}</h1>
								</NavLink>
								<button
									className="bg-[#30281d] px-5 py-2 mt-2 w-full text-white rounded-lg "
									onClick={() => {
										dispatch(ADD_TO_CART(item));
										notify();
									}}
								>
									add to cart
								</button>
							</div>
						);
					})}
				</div>
				<ToastContainer position="top-left" />
			</div>
		);
	};

	const Loader = () => {
		return (
			<div className="h-full w-full items-center justify-center flex flex-wrap">
				<Skeleton num={16} />
			</div>
		);
	};

	const Button = () => {
		return (
			<div className=" border-2 backdrop-blur-lg py-0.5 sticky top-14 shadow-xl ">
				<button
					onClick={() => {
						setnum(0);
					}}
					className=" border-4 forced-colors:hidden   active:bg-slate-500   ml-3 p-1 px-4 rounded-lg"
				>
					Clear
				</button>
				<button
					onClick={() => {
						setnum(1);
					}}
					className="border-4   active:bg-slate-500 ml-3  p-1 px-4 rounded-lg"
				>
					Coffee
				</button>
				<button
					onClick={() => {
						setnum(2);
					}}
					className=" border-4  active:bg-slate-500 ml-3   p-1 px-4 rounded-lg"
				>
					Bread
				</button>
			</div>
		);
	};

	const [num, setnum] = useState(0);
	switch (num) {
		case 0:
			return <AllListData item={data} />;
		case 1:
			return <AllListData item={listForCoffee} />;
		case 2:
			return <AllListData item={listForBread} />;
	}

	return <div className="w-full h-full  flex flex-wrap justify-center gap-3 p-5"></div>;
}

export default Shop;
