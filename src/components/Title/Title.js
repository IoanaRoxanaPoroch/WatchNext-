import classes from "./Title.module.css";

const Title = ({ children, className }) => {
  return <h2 className={`${classes.title} ${className}`}>{children}</h2>;
};
export default Title;
