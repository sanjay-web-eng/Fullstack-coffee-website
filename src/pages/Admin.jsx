import React, { useState } from "react";
import { storeAlldData } from "../appwrite/dataBases";
import { ToastContainer, toast } from 'react-toastify';

  
function admin() {
	const [imgUrl, setimgUrl] = useState("");
	const [name, setname] = useState("");
	const [dec, setdec] = useState("");
	const [price, setprice] = useState(0);
	const [category, setcategory] = useState("");
	const additem = () => {
		storeAlldData(name, dec, price, imgUrl, category);
	};
	console.log(category);
	const notify = () => toast("item add!");
	return (
		<div className="p-2 h-full w-full ">
			<div className="h-full w-full items-center justify-center flex ">
				<div className="p-8 m-3 rounded-lg shadow-lg bg-slate-500 max-h-full grid items-center justify-center gap-3 w-[550px] h-[650px]">
					<div className="">
						<label className="mb-2">Name</label>
						<input
							type="text"
							placeholder="name"
							className="h-[45px] w-[500px] pl-2 mt-1 rounded-lg"
							onChange={(e) => {
								setname(e.target.value);
							}}
						/>
					</div>
					<div className="">
						<label>Price</label>
						<input
							type="number"
							className="h-[45px] w-[500px] pl-2 mt-1 rounded-lg"
							placeholder="price"
							onChange={(e) => {
								setprice(e.target.value);
							}}
						/>
					</div>
					<div>
						<label>description</label>
						<textarea
							maxLength={2000}
							minLength={0}
							type="text"
							className="h-[300px] w-[500px] mt-1 pl-2 rounded-lg"
							placeholder="description"
							onChange={(e) => {
								setdec(e.target.value);
							}}
						/>
					</div>
					<div className="">
						<label>item category :</label>
						<select
							onChange={(e) => {
								setcategory(e.target.value);
							}}
							className="w-[500px] h-[45px] p-1 rounded-lg mt-1"
						>
							<option value="coffee">Coffee</option>
							<option value="bread">Bread</option>
						</select>
					</div>
				</div>
				<div className="p-3 m-3 rounded-lg shadow-lg bg-slate-500 max-h-full grid gap-3 w-[550px] h-[650px]">
					<input
						type="text"
						placeholder="image URL"
						className="h-[45px] pl-2 rounded-lg"
						onChange={(e) => {
							setimgUrl(e.target.value);
						}}
					/>
					<div className="h-[550px] overflow-hidden border-2 border-black rounded-lg">
						{imgUrl.length === 0 ? (
							<>
								<h1 className=" w-full h-full items-center justify-center flex text-4xl font-medium text-[#acacacb2]">Image Preview :)</h1>
							</>
						) : (
							<>
								{" "}
								<img src={imgUrl} className="w-full h-full object-cover" alt="" />
							</>
						)}
					</div>
				</div>
			</div>
			<div className="h-[1px] bg-slate-400"></div>
			<div className="  p-2 flex items-center justify-center ">
				<button
					onClick={() => {
						additem();
						notify()
					}}
					className="bg-red-500 mt-1 py-1.5 px-[530px] rounded-lg"
				>
					add item
				</button>
				<ToastContainer />
			</div>
		</div>
	);
}

export default admin;
