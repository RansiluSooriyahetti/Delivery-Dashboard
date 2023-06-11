import Searchbar from "../searchbar";
import logo from "../../assets/logo.png";
import avatarpic from "../../assets/avatarPic.jpg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Badge from '@mui/material/Badge';
import { useLocation } from "react-router-dom";

import "./style.css";

function capitalizeWords(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="navbar">
      <div className="logobox">
        <img src={logo} alt="logo" className="logo" />
        <div className="tabname">{pathname && pathname !== '/' ? capitalizeWords(pathname.slice(1)) : 'Dashboard'}</div>
      </div>

      <div className="searchbar">
        <Searchbar />
      </div>

      <div className="notification">
        <div className="notificationicons">
          <div className="icons">
            {" "}
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="icon_value1">
            <Badge badgeContent={4} color="info" className="b"/>
            </div>
          </div>
          <div className="icons">
            {" "}
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <div className="icon_value2">
            <Badge badgeContent={10} color="error" className="b"/>
            </div>
          </div>
        </div>

        <div className="profile">
          <img src={avatarpic} alt="avatar pic" className="profilepic" />
          <div className="profilename">Ransilu</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
