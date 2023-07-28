"use client";
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login(props) {
	const [isMousedOver, setMouseOver] = useState(false);

	function handleMouseOut() {
		setMouseOver(false);
	}

	function handleMouseOver() {
		setMouseOver(true);
	}

	const [user, setUser] = useState({
		// the purpose of this is to store the user's input
		username: "",
		password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setUser((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	return (
		<div className={styles.loginPage}>
			<h1>Hello {user.username} </h1>
			<form className={styles.loginForm}>
				<input name="username" placeholder="Username" onChange={handleChange} />
				<input name="password" placeholder="Password" onChange={handleChange} />

				{!props.isRegistered && (
					<input type="password" placeholder="Confirm Password" />
				)}
				<button
					type="submit"
					className={styles.loginButton}
					style={{ backgroundColor: isMousedOver ? "lightgrey" : "white" }}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					{props.isRegistered ? "Login" : "Register"}
				</button>
			</form>
		</div>
	);
}
