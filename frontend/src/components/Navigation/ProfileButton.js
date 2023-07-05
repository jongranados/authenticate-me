import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/sessionSlice";

export default function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (!showMenu) setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => setShowMenu(false);

		document.addEventListener("click", closeMenu);

		// cleanup function
		return () => document.removeEventListener("click", closeMenu);
	}, [showMenu]);

	const logout = (event) => {
		event.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<div className="relative flex flex-col justify-start items-end p-4">
			<button
				onClick={openMenu}
				className="px-6 py-3 shadow-lg rounded-lg cursor-pointer text-lg text-white bg-[#FF5F01] hover:bg-orange-600"
			>
				<i className="fas fa-user-circle" />{" "}
				<span className="font-bayon">&nbsp; Profile</span>
			</button>
			{showMenu && (
				<ul className="absolute z-50 top-20 flex flex-col items-end py-4 px-8 font-poppins font-light bg-white rounded-2xl shadow-xl">
					<li className="">{user.username}</li>
					<li className="">{user.email}</li>
					<li className="">
						<button
							onClick={logout}
							className="px-4 py-2 mt-2 w-max rounded-lg cursor-pointer font-bayon bg-[#FF5F01] hover:bg-orange-600 text-white"
						>
							Log Out
						</button>
					</li>
				</ul>
			)}
		</div>
	);
}
