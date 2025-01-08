import React, { useEffect, useState } from "react";
import Img from "../assets/hero-img.jpeg";
import Img2 from "../assets/mixture-of-different-kinds-of-coffee-beans-on-wooden-background-coffee-background-photo.jpg";
import { listForHomePage } from "../appwrite/dataBases";
import { useNavigate, NavLink } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import { ADD_TO_CART } from "../redux/features/cartSilce";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { BarLoader } from "react-spinners";
function Home() {
	const dispatch = useDispatch();
	const [data, setdata] = useState([]);
	const [Info, setInfo] = useState([]);
	const navigate = useNavigate();
	const aa = async () => {
		let b = await listForHomePage();

		setdata(b.documents);
	};
	useEffect(() => {
		aa();
	}, []);
	const notify = () => toast("item add!");

	const Loader = () => {
		return (
			<div className="h-full w-full items-center justify-center flex flex-wrap">
				<Skeleton num={8} />
			</div>
		);
	};
	return (
		<div className="h-full w-full">
			{data.length === 0 && (
				<div className="h-[5px] w-full flex items-center justify-center fixed">
					<BarLoader color="#c1121f" width={"100%"} />
				</div>
			)}
			<div
				className="h-[92vh] w-[100%] flex items-center justify-start p-16 bg-fixed "
				style={{ backgroundImage: `url(${Img})`, backgroundSize: "cover" }}
			>
				<div className="h-[450px] w-[700px] z-auto text-white text-left p-5 flex items-center  ml-5">
					<div className="p-5 h-[260px]">
						<h3 className="text-2xl font-semibold  mt-2">Welcome</h3>
						<h1 className="text-4xl mt-1 font-semibold">
							We serve the <span className="text-[#30281d] font-bold">richest</span>{" "}
							coffee
						</h1>
						<h1 className="text-4xl mt-1 font-semibold"> in the city!</h1>
						<button
							onClick={() => {
								navigate("/shop");
							}}
							className="p-2 mt-4 px-5 rounded-3xl bg-white font-semibold text-[#30281d] shadow-[#30281d]  shadow-xl"
						>
							Order Now
						</button>
					</div>
				</div>
			</div>
			<div className="w-[100%]  max-h-max  flex flex-wrap p-5 items-center justify-between gap-3">
				{data.length === 0 && <Loader />}
				{data.map((item) => {
					return (
						<div
							key={item.$id}
							className="border-2   w-[350px] h-[500px] p-3 rounded-lg shadow-xl"
						>
							<NavLink to={`/details/${item.name}/${item.$id}`} key={item.$id}>
								<img
									src={item.img}
									className="h-[350px] rounded-lg  w-full  "
									alt=""
								/>
								<h1 className="text-2xl text-[#30281d] font-medium">{item.name}</h1>
								<h2 className="text-xl text-[#30281d] font-semibold mt-1">
									{" "}
									₹ {item.price}
								</h2>
							</NavLink>
							<button
								onClick={() => {
									dispatch(ADD_TO_CART(item));
									notify();
								}}
								className="bg-[#30281d] px-5 w-full py-2 mt-2 text-white rounded-lg "
							>
								add to cart
							</button>
						</div>
					);
				})}
			</div>
			<div
				className="h-screen w-full grid items-center justify-center text-center  "
				style={{
					backgroundImage: `url(https://img.freepik.com/premium-vector/engraved-coffee-shop-related-objects-background-kraft-paper-texture_281653-1168.jpg?semt=ais_hybrid)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					width: "100%",
					objectFit: "cover",
					textAlign: "center",
				}}
			>
				<div className="">
					<h1 className="text-[#30281d] text-4xl font-bold text-center">
						Check out our best coffee betans
					</h1>
					<p className="text-center mt-10 w-[80vw]">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odio sed
						nobis accusantium nisi quaerat odit corporis tenetur nihil placeat, cumque
						voluptatem similique est exercitationem! Ab expedita deserunt neque
						laudantium?
					</p>
					<button className="mt-10 bg-white  px-8 py-2 text-[#3028id] font-semibold rounded-3xl">Expolore</button>
				</div>
			</div>
			{/* <div className="w-full h-[800px]    bg-red-300"></div>
			<div className="w-full h-[800px]    bg-red-300"></div>
			<div className="w-full h-[800px]   bg-emerald-300"></div> */}
			<div className="w-full h-full  bg-sky-700">
				<h1>section 2</h1>
			</div>
			<ToastContainer position="top-left" />
		</div>
	);
}

export default Home;
