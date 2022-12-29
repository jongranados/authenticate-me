import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/sessionSlice";

export const ProfileButton = ({ user }) => {
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
    <div className="profile-settings-wrapper">
      <button onClick={openMenu} className="profile-icon">
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
};
