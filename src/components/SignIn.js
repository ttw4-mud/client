import React, { useState, useEffect } from "react";
import axiosWithAuth from "../auth/index.js";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignIn = ({
  status,
  history,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      history.push("/game");
    }
  }, []);

  return (
    <div className="w-full max-w-xs">
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <Field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            id="username"
            type="text"
            placeholder="Enter Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username && <div>{errors.username}</div>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <Field
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
          <Field
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/signup"
          >
            Sign up Here
          </Link>
        </div>
      </Form>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ user, email, password }) {
    return {
      user: user || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(50, "Username be less than 50 characters")
      .required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string()
      .required("password required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  }),
  handleSubmit(values, { props, resetForm }) {
    const params = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://ttw4-mud-server--staging.herokuapp.com/api/accounts/login/",
        params
      )
      .then((response) => {
        localStorage.setItem("key", response.data.key);
        props.history.push("/game");
        resetForm();
      })
      .catch((error) => {
        alert(error.message);
      });
  },
})(SignIn);
export default FormikLogin;
