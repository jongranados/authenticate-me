import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from '../../store/sessionSlice'; 
import abstractPapercut from './abstractPapercut.jpg'

import "./LoginForm.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialLoginValues, loginValidationSchema } from '../../validations';

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/" />;

  const handleFormSubmit = async(values, onSubmitProps) => {
	const { 
		credential, 
		password
	} = values;

	return await dispatch(sessionActions.login({ credential, password }))
		.unwrap() 
		.catch(async backendValidationErrors => alert(backendValidationErrors)); 
  };
  return (
		<div className="flex flex-row">
			<div className="w-full lg:w-1/2 border-solid border-2 border-indigo-600">
			</div>

			<div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0 border-solid border-2 border-indigo-600">
				<div className="max-w-lg mx-auto lg:pt-8 lg:pb-8">
					<h3 className="mb-4 text-5xl text-gray-900 font-bold">Welcome Back!</h3>
					<p className="mb-15 text-lg text-gray-500">Login below if you already have an account.</p>
					<Formik
						onSubmit={handleFormSubmit}
						initialValues={initialLoginValues}
						validationSchema={loginValidationSchema}
					>
						{({
							values,
							errors,
							touched,
							handleBlur,
							handleChange,
							handleSubmit,
						}) => (
							<Form onSubmit={handleSubmit}>
								<label htmlFor="credential">
									Username or email
								</label>
								<Field
									id="credential"
									name="credential"
									type="text"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.credential}
								/>
								<ErrorMessage name="credential" />

								<label htmlFor="password">Password</label>
								<Field
									id="password"
									name="password"
									type="password"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.password}
								/>
								<ErrorMessage name="password" />

								<button type="submit">LOGIN</button>
								<Link to="/signup">
									Don't have an account? Sign up here!
								</Link>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
  );
}
