import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.module.scss";
import MainBtn from "../Controls/MainBtn";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveLoginType } from "../../store/Auth/actions";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(saveLoginType(values));

      router.push("/");
    },
  });

  return (
    <div>
      <h3 className="text-center mb-4">LOGIN</h3>
      <form onSubmit={formik.handleSubmit} className={`${styles.loginForm}`}>
        <TextField
          fullWidth
          id="email"
          name="email"
          variant="outlined"
          placeholder="Email"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={`mb-3`}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          variant="outlined"
          placeholder="Password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          className={`mb-3`}
        />
        <div className="d-flex justify-content-center">
          <MainBtn btnText="Login" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
