import { NavLink } from "react-router-dom";

import Logo from "UI/Logo/Logo";

import classes from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <nav>
      <ul className={classes["user-header-ul"]}>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.active ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/categories"
            className={(navData) => (navData.active ? classes.active : "")}
          >
            Categories
          </NavLink>
        </li>

        <Logo className={classes["user-header-logo"]} />

        <li>
          <NavLink
            to="/watch-list"
            className={(navData) => (navData.active ? classes.active : "")}
          >
            Watchlist
          </NavLink>
        </li>

        <li>
          <NavLink
            to="contact"
            className={(navData) => (navData.active ? classes.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default UserHeader;
