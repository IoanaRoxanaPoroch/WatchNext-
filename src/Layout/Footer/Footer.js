import { NavLink } from "react-router-dom";

import { pink } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Logo from "UI/Logo/Logo";

import classes from "./Footer.module.css";

function FacebookIcon(props) {
  return (
    <SvgIcon {...props}>
      <FacebookRoundedIcon />
    </SvgIcon>
  );
}

function Twitter(props) {
  return (
    <SvgIcon {...props}>
      <TwitterIcon />
    </SvgIcon>
  );
}
const Footer = () => {
  const theme = createTheme();

  return (
    <footer className={classes.footer}>
      <div className={classes["footer-infos"]}>
        <Logo className={classes["footer-logo"]} />

        <ul className={classes["footer-ul"]}>
          <li>Press Room</li>

          <li>Advertising</li>

          <li>Jobs</li>

          <li>Contact Us</li>

          <li>
            <NavLink
              to="/register"
              className={(navData) => (navData.active ? classes.active : "")}
            >
              Register
            </NavLink>
          </li>

          <li>News</li>

          <li>Conditions of Use</li>

          <li>Privacy Policy</li>

          <li>Interest-Based Ads</li>
        </ul>
      </div>

      <div className={classes["footer-social"]}>
        <p>Copyright © 1990-2019 Moovie.com, Inc.</p>

        <div className={classes["footer-social-icons"]}>
          <p>Follow us on social media</p>
          <FacebookIcon sx={{ color: pink[500], margin: theme.spacing(2) }} />

          <Twitter sx={{ color: pink[500], margin: theme.spacing(2) }} />

          <YouTubeIcon sx={{ margin: theme.spacing(2) }} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
