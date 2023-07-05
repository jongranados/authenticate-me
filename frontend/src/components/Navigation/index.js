import React from "react";
import ProfileButton from "./ProfileButton";

export default function Navigation({sessionUser}) {

  let sessionLinks = <ProfileButton user={sessionUser} />;

  return sessionUser ? (
		<>
			<ul className="flex flex-row justify-end">
				<li>{sessionLinks}</li>
			</ul>
		</>
  ) : (
		<></>
  );
};
