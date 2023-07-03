import React from "react";
import { Outlet } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

export default function Navigation({sessionUser}) {

  let sessionLinks = <ProfileButton user={sessionUser} />;

  return sessionUser ? (
		<>
			<ul>
				<li>{sessionLinks}</li>
			</ul>
			<Outlet />
		</>
  ) : (
		<>
			<Outlet />
		</>
  );
};
