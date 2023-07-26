import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserList } from "../UserList.js";
import { UserView } from "../UserView";

export const Home = () => (
	<div className="text-center mt-5">
		<UserList />
	</div>
);
