import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserList } from "../ContactList.js";
import { UserView } from "../secondview";

export const Home = () => (
	<div className="text-center mt-5">
		<UserList />
		
	</div>
);
