import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/sessionSlice";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  // check to see if session user already exists
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
		isLoaded && (
			<div className="min-h-screen flex flex-col justify-center">
				<Routes>
					<Route
						path="/"
						element={<Navigation isLoaded={isLoaded} />}
					>
						<Route path="/login" element={<LoginFormPage />} />
						<Route path="/signup" element={<SignupFormPage />} />
					</Route>
				</Routes>
			</div>
		)
  );
}

export default App;
