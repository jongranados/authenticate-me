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
