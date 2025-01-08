import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listForDetailsPage } from "../appwrite/dataBases";
import { ADD_TO_CART } from "../redux/features/cartSilce";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Navber from "../components/Navber";
function Details() {
	const dispatch = useDispatch();
	const [data, setdata] = useState([]);
	const { id } = useParams();
	const aa = async () => {
		let b = await listForDetailsPage(id);
		setdata(b.documents);
	};
	const notify = () => toast("Item add ");

	useEffect(() => {
		aa();
	}, []);
	const Loader = () => {
		return (
			<div className="h-full w-full items-center justify-center flex bg-white m-auto p-10">
				<div className="w-full h-full p-3 rounded-lg flex flex-col justify-center text-center animate-pulse">
					<div className="h-[600px] w-full p-2 flex items-center justify-center">
						<div className="w-[500px] max-h-full h-full bg-gray-200 rounded-xl"></div>
					</div>
					<div className="w-full bg-slate-300 h-[1px]"></div>
					<div className="mt-1 h-full p-2 w-full">
						<div className="text-left w-full text-[#30281d] ml-4 text-3xl font-semibold h-6 mb-2 bg-gray-200 rounded"></div>
						<div className="text-left w-full text-[#30281d] ml-4 mt-2 text-xl font-medium h-4 mb-2 bg-gray-200 rounded"></div>
						<div className="text-left w-full text-[#30281d] text-2xl ml-4 mt-2 font-bold h-5 mb-2 bg-gray-200 rounded"></div>
						<div className="bg-[#30281d] rounded-lg text-lg h-10"></div>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<Navber />
			<div className="h-full   w-full items-center justify-center flex p-2 gap-5">
				{data.length === 0 && <Loader />}
				{data.map((item) => {
					return (
						<div
							key={item.$id}
							className=" w-full h-full p-3 rounded-lg  items-cente flex-col flex  justify-center text-center "
						>
							<div className=" h-[600px] w-full p-2 flex items-center justify-center">
								<img
									src={item.img}
									className="w-[500px] max-h-full  h-full  object-contain rounded-xl"
									alt=""
								/>
							</div>
							<div className="w-full bg-slate-300 h-[1px]"></div>
							<div className=" mt-2 h-full p-2  w-full">
								<h1 className="text-left text-[#30281d] ml-4 text-3xl font-semibold">
									Name : {item.name}
								</h1>
								<h3 className="text-left text-[#30281d] ml-4 mt-2 text-xl font-medium">
									Description :{item.dec}
								</h3>
								<h1 className="text-left text-[#30281d] text-2xl ml-4 mt-2 font-bold">
									₹{item.price}
								</h1>
								<button
									onClick={() => {
										dispatch(ADD_TO_CART(item)), notify();
									}}
									className="bg-[#30281d] text-white shadow-2xl shadow-[#30281d] px-40 py-2 rounded-lg text-lg "
								>
									add to cart
								</button>
							</div>
							<ToastContainer position="top-left" />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Details;
