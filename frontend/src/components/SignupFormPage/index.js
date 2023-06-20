import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SignupForm.css";

import { Field, Form, Formik } from "formik";
import { initialSignupValues } from "../../validations";
import { Link } from "react-router-dom";

export default function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (event) => {
  };

  return (
		<Formik initialValues={initialSignupValues}>
			{({ values, handleChange, handleBlur }) => (
				<Form>
					<label htmlFor="username">Username</label>
					<Field
						name="username"
						id="username"
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.username}
					/>

					<label htmlFor="email">Email</label>
					<Field
						name="email"
						id="email"
						type="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>

					<label htmlFor="password">Password</label>
					<Field
						name="password"
						id="password"
						type="text"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>

					<label htmlFor="confirmPassword">Confirm password</label>
					<Field
						name="confirmPassword"
						id="confirmPassword"
						type="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.confirmPassword}
					/>

					<button type="submit">SIGNUP</button>
					<Link to="/login">
						Already have an account? Login here!
					</Link>
				</Form>
			)}
		</Formik>
  );
};
