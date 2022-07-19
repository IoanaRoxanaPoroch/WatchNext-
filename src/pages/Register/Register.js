import { Fragment } from "react";
import { Link } from "react-router-dom";

import Title from "components/Title/Title";
import Authentification from "UI/Authentification/Authentification";
import Button from "UI/Button/Button";
import Logo from "UI/Logo/Logo";

import classes from "./Register.module.css";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.register}>
      <Logo className={classes["register-logo"]} />
      <Authentification>
        <Title className={classes["register-title"]}>
          Let’s create your account{" "}
        </Title>
        <form
          action=""
          onSubmit={submitHandler}
          className={classes["register-form"]}
        >
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email adress" />

          <input type="password" placeholder="Password" />

          <Button type="btn-primary">Register</Button>

          <p className={classes["register-text"]}>
            Already have an account?{" "}
            <span>
              <Link to="/login" className={classes["register-login-link"]}>
                Log in
              </Link>
            </span>
          </p>
        </form>
      </Authentification>
    </section>
  );
};
export default Register;
