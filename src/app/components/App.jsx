"use client";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";

var userIsRegistered = false;

export default function App() {
	return (
		<div>
			{/* <Login isRegistered={userIsRegistered} /> */}
			<Home />
		</div>
	);
}
