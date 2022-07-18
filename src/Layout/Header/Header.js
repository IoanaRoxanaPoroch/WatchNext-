import UserHeader from "Layout/UserHeader/UserHeader";

import classes from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={classes.header}>
      <UserHeader />
    </div>
  );
};
export default Header;
