import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";

import { Formik, Form, Field } from "formik";
import { initialLoginValues, loginValidationSchema } from '../../validations';


export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const handleFormSubmit = (event) => {
  };

  return (

		<Formik
			onSubmit={handleFormSubmit}
			initialValues={initialLoginValues}
			validationSchema={loginValidationSchema}
		>
			{({
				values,
				handleBlur,
				handleChange,
				handleSubmit,
			}) => (
				<Form
					onSubmit={handleSubmit}
				>
					<label htmlFor="credential">Username or email</label>
					<Field
						id="credential"
						name="credential"
						type="text"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.credential}
					/>

					<label htmlFor="password">Password</label>
					<Field
						id="password"
						name="password"
						type="password"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.password}
					/>

					<button type="submit">LOGIN</button>
					<Link to="/signup">
						Don't have an account? Sign up here!
					</Link>
				</Form>
			)}
		</Formik>
  );
}
