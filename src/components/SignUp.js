import React from "react";
import axios from "axios";
import { withFormik, Formik } from "formik";
// import {Link} from 'react-router-dom';
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .max(50, "Username be less than 50 characters")
    .required("Username is Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("password required"),
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div class="w-full max-w-xs">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                className={errors.username && touched.username && "error"}
              />
              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      )}
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
      .post("url", params)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.id);
        props.history.push("/favorites");
        resetForm();
      })
      .catch((error) => {
        alert(error.message);
      });
  },
})(SignUp);
export default FormikLogin;
