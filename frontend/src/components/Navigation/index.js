import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink className="signup-link" to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
		<>
			<ul>
				<li className="navigation-wrapper">
					<NavLink exact to="/">
						Home
					</NavLink>
					{isLoaded && sessionLinks}
				</li>
			</ul>
      <Outlet/>
		</>
  );
};
