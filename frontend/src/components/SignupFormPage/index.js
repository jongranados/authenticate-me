import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from '../../store/sessionSlice';
import "./SignupForm.css";
import abstractPapercut from "../LoginFormPage/abstractPapercut.jpg";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialSignupValues, signupValidationSchema } from "../../validations";

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
		<section className="relative py-20 overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-wrap">
						<div className="hidden w-1/2 lg:block px-4">
							<div
								style={{
									backgroundImage: `url(${abstractPapercut})`,
								}}
								className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full bg-center bg-cover rounded-3xl"
							>
								<div className="flex flex-col items-center w-full absolute bottom-1/3 text-white">
									<h1 className="w-3/4 text-6xl text-[#E8E9DB] font-bayon [text-shadow:_0_5px_0_rgb(122_33_1_/_40%)]">
										Authenticate Me
									</h1>
									<p className="w-3/4 text-lg leading-tight text-[#E8E9DB] font-poppins font-light">
										A simple full-stack application
										demonstrating a common authentication
										pattern.
									</p>
								</div>
							</div>
						</div>

						<div className="w-full px-4 pb-16 lg:w-1/2 lg:mb-0">
							<div className="max-w-lg mx-auto lg:pt-24 lg:pb-4">
								<h3 className="mb-2 text-5xl text-gray-900 font-bold">
									Welcome!
								</h3>
								<p className="mb-8 text-lg font-light text-gray-500">
									Create a new account by signing up below.
								</p>
								<Formik
									onSubmit={handleFormSubmit}
									initialValues={initialSignupValues}
									validationSchema={signupValidationSchema}
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
											<div className="my-8">
												<label
													htmlFor="username"
													className="block mb-1.5 text-normal font-light text-gray-900"
												>
													Username
												</label>
												<Field
													className="w-full px-4 py-3 text-normal font-light text-gray-900 border border-gray-400 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
													name="username"
													id="username"
													type="text"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.username}
												/>
												<div className="h-2">
													<ErrorMessage
														name="username"
														component="div"
														className="pt-1 text-sm font-extralight text-red-600"
													/>
												</div>
											</div>

											<div className="my-8">
												<label
													htmlFor="email"
													className="block mb-1.5 text-normal font-light text-gray-900"
												>
													Email
												</label>
												<Field
													className="w-full px-4 py-3 text-normal font-light text-gray-900 border border-gray-400 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
													name="email"
													id="email"
													type="email"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
												/>
												<div className="h-2">
													<ErrorMessage
														name="email"
														component="div"
														className="pt-1 text-sm font-extralight text-red-600"
													/>
												</div>
											</div>

											<div className="my-8">
												<label
													htmlFor="password"
													className="block mb-1.5 text-normal font-light text-gray-900"
												>
													Password
												</label>
												<Field
													className="w-full px-4 py-3 text-normal font-light text-gray-900 border border-gray-400 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
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
														className="pt-1 text-sm font-extralight text-red-600"
													/>
												</div>
											</div>

											<div className="my-8">
												<label
													htmlFor="confirmPassword"
													className="block mb-1.5 text-normal font-light text-gray-900"
												>
													Confirm password
												</label>
												<Field
													className="w-full px-4 py-3 text-normal font-light text-gray-900 border border-gray-400 rounded-lg focus:shadow-lg focus:border-[#FF5F01] focus:outline-none"
													name="confirmPassword"
													id="confirmPassword"
													type="password"
													onChange={handleChange}
													onBlur={handleBlur}
													value={
														values.confirmPassword
													}
												/>
												<div className="h-2">
													<ErrorMessage
														name="confirmPassword"
														component="div"
														className="pt-1 text-sm font-extralight text-red-600"
													/>
												</div>
											</div>

											<div className="mt-20 flex justify-center">
												<button
													type="submit"
													className="w-full px-8 py-4 text-lg font-poppins rounded-xl text-white bg-[#FF5F01] hover:bg-orange-600"
												>
													SIGNUP
												</button>
											</div>

											<div className="mt-20 text-gray-900 font-light text-normal text-center">
												Already have an account?
												<Link
													to="/login"
													className="font-bold text-[#FF5F01] hover:text-blue-800"
												>
													{" "}
													Login here!
												</Link>
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};
