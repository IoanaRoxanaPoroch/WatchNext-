import Logo from "UI/Logo/Logo";

import classes from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <nav>
      <ul className={classes["user-header-ul"]}>
        <li>Home</li>
        <li>Categories</li>
        <Logo className={classes["user-header-logo"]} />
        <li>Watchlist</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default UserHeader;
