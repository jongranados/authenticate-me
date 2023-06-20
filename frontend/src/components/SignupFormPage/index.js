import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from '../../store/sessionSlice';
import "./SignupForm.css";

import { Field, Form, Formik } from "formik";
import { initialSignupValues } from "../../validations";

export default function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) return <Redirect to="/" />;

  const handleFormSubmit = async (values) => {
    const { username, email, password, confirmPassword } = values; 

    if (password === confirmPassword) {
      return dispatch(sessionActions.signup({ email, username, password }))
        .unwrap()
        .catch(async (backendValidationErrors) => {
          alert(backendValidationErrors);
        });
	  }
  };

  return (
		<Formik 
      initialValues={initialSignupValues}
      onSubmit={handleFormSubmit}>
			{({ values, handleChange, handleBlur, handleSubmit }) => (
				<Form onSubmit={handleSubmit}>
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
