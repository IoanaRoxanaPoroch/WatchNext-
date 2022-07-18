import logo from "assets/logo.png";

import classes from "./Logo.module.css";

const Logo = ({ className }) => {
  return (
    <div>
      <img src={logo} alt="Logo" className={`${classes.logo} ${className}`} />
    </div>
  );
};
export default Logo;
