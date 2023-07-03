import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/sessionSlice";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
	// attempt to restore session user tied to cookie
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	const sessionUser = useSelector((state) => state.session.user);

	return (
		isLoaded && (
			<Routes>
				<Route
					path="/"
					element={<Layout sessionUser={sessionUser} />}
				>
					<Route
						path="/"
						element={
							sessionUser ? (
								<Home sessionUser={sessionUser} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route
						path="/login"
						element={
							sessionUser ? (
								<Navigate to="/" />
							) : (
								<LoginFormPage />
							)
						}
					/>
					<Route
						path="/signup"
						element={
							sessionUser ? (
								<Navigate to="/" />
							) : (
								<SignupFormPage />
							)
						}
					/>
				</Route>
			</Routes>
		)
	);
}

export default App;
