import React from "react";
import axios from "axios";
import { withFormik, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .max(50, "Username be less than 50 characters")
    .required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("password required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});
const SignUp = () => (
  <div>
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Enter Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                  <div>{errors.username}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
                <p className="text-red-500 text-xs italic"></p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/signup"
                >
                  Sign up Here!
                </Link>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  </div>
);
const FormikLogin = withFormik({
  mapPropsToValues({ user, email, password }) {
    return {
      user: user || "",
      email: email || "",
      password: password || "",
    };
  },
  handleSubmit(values, { props, resetForm }) {
    const params = {
      username: values.user,
      email: values.email,
      password: values.password,
    };
    axios
      .post(
        "https://ttw4-mud-server--staging.herokuapp.com/api/accounts/login/",
        params
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.id);
        props.history.push("/game");
        resetForm();
      })
      .catch((error) => {
        alert(error.message);
      });
  },
})(SignUp);
export default FormikLogin;
