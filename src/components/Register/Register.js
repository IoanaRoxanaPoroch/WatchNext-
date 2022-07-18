import Title from "components/Title/Title";
import Authentification from "UI/Authentification/Authentification";
import Logo from "UI/Logo/Logo";

import classes from "./Register.module.css";

const Register = () => {
  const submitHandler = () => {
    console.log("zzz");
  };
  return (
    <>
      <Logo />
      <Authentification>
        <Title>Let’s create your account </Title>
        <form action="" onSumbit={submitHandler}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email adress" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
          <p>Already have an account? Log in</p>
        </form>
      </Authentification>
    </>
  );
};
export default Register;
