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
			<div className="w-full lg:w-1/2 border-solid border-2 border-indigo-600"></div>

			<div className="w-full px-4 pb-16 lg:w-1/2 lg:mb-0 border-solid border-2 border-indigo-600">
				<div className="max-w-lg mx-auto lg:pt-24 lg:pb-4">
					<h3 className="mb-2 text-6xl text-gray-900 font-bold">
						Welcome Back!
					</h3>
					<p className="mb-8 text-lg font-light text-gray-500">
						Login below to access your account.
					</p>
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
								<div className="my-6">
									<label
										htmlFor="credential"
										className="block mb-1.5 text-sm font-light text-gray-900"
									>
										Username or email
									</label>
									<Field
										className="w-full px-4 py-3 text-sm font-light text-gray-900 border border-gray-200 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
										id="credential"
										name="credential"
										type="text"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.credential}
									/>
									<div className="h-2">
										<ErrorMessage
											name="credential"
											component="div"
											className="pt-1 text-xs font-extralight text-red-600"
										/>
									</div>
								</div>

								<div className="my-6">
									<label
										htmlFor="password"
										className="block mb-1.5 text-sm font-light text-gray-900"
									>
										Password
									</label>
									<Field
										className="w-full px-4 py-3 text-sm font-light text-gray-900 border border-gray-200 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
										id="password"
										name="password"
										type="password"
										onBlur={handleBlur}
										onChange={handleChange}
										value={values.password}
									/>
									<div className="h-2">
										<ErrorMessage
											name="password"
											component="div"
											className="pt-1 text-xs font-extralight text-red-600"
										/>
									</div>
								</div>

								<div className="my-8 flex justify-center">
									<button
										type="submit"
										className="w-full px-8 py-4 text-sm rounded-xl font-semibold text-white bg-[#FF5F01] hover:bg-orange-600"
									>
										LOGIN
									</button>
								</div>

								<div className="mt-20 text-gray-900 font-light text-sm text-center">
									Don't have an account?
									<Link
										to="/signup"
										className="font-bold text-[#FF5F01] hover:text-blue-800"
									>
										{" "}
										Create one here!
									</Link>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
  );
}
