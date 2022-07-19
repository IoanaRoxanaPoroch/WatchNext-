import classes from "./Button.module.css";

const Button = ({ type, children }) => {
  return <button className={`${classes[type]}`}>{children}</button>;
};
export default Button;
