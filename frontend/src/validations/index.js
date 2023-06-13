import * as yup from "yup";

// validation schema for the login form
export const loginValidationSchema = yup.object().shape({
	credential: yup
		.string()
		.required("Your username or email address is required."),
	password: yup.string().required("Your password is required."),
});

export const initialLoginValues = {
	credential: "",
	password: "",
};

// validation schema for the signup form
export const signupValidationSchema = yup.object().shape({
	username: yup
		.string()
		.min(4, "Your username must be at least 4 characters long.")
		.max(30, "Your username must be less than 30 characters long.")
		.required("required"),
	email: yup
		.string()
		.email("Your email must be a valid email.")
		.min(3, "Your password must be between 3 and 56 characters long.")
		.max(56, "Your password must be between 3 and 56 characters long.")
		.required("required"),
	password: yup
		.string()
		.min(6, "Your password must be between 6 and 20 characters long.")
		.max(20, "Your password must be between 6 and 20 characters long.")
		.required("Your password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Your passwords must match.")
		.required("Confirm your password."),
});

export const initialSignupValues = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};
