import { Routes, Route, useLocation } from "react-router-dom";
import Navber from "./components/Navber";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signin from "./pages/signin";
import Account from "./pages/account";
import ChangeEmail from "./pages/changeEmail";
import ForgetPassword from "./pages/ForgetPass";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Error404 from './pages/error404'
  function App() {
	const location = useLocation();
	const showNavbarOn = ["/", "/shop", "/cart", "/account", "/bakery", "/coffee", "/details"];
	const showFooterOn = ["/", "/shop", "/cart", "/account", "/bakery", "/coffee"];
	return (
		<>
			{showNavbarOn.includes(location.pathname) && <Navber />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signin />} />
				<Route path="/account" element={<Account />} />
				<Route path="/cart" element={<Cart />} />
  				<Route path="/account/changeemail" element={<ChangeEmail />} />
				<Route path="/account/forgetpassword" element={<ForgetPassword />} />
				<Route path="/details/:name/:id" element={<Details />} />
				<Route path="*" element={<Error404/>} />
			</Routes>
			{showFooterOn.includes(location.pathname) && <Footer />}
		</>
	);
}

export default App;
