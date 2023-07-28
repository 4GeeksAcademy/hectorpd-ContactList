import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { UserList } from "./UserList.js";
//import { Demo } from "./views/demo";
//import { Single } from "./views/single";
import { UserView } from "./UserView.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
// const {usersId} = useParams();
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						{/* <Route path="/users/*" element={<UserList />} /> */}
						<Route path="/users/:userId" element={<UserView />} />
						{/*<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />*/}
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
