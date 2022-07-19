import UserHeader from "Layout/UserHeader/UserHeader";

import classes from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={classes.header}>
      <UserHeader />
    </header>
  );
};
export default Header;
