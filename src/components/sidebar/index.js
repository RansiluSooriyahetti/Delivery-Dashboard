import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReviewsIcon from "@mui/icons-material/Reviews";

import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Sidebar = () => {
  const { pathname } = useLocation();
  
  const storeLocation = "store locations";
  const encodedLocation = encodeURIComponent(storeLocation);


  return (
    <div className="sidebar">
      {/* category 1 */}
      <div className="sidebar_category">
        <div className="sidebar_category_type">DASHBOARD</div>

        <div className="sidebar_category_item">
          <div className={`item ${pathname === "/" ? "item-active" : ""}`}>
            <Link to="/" className="item_link">
              <div className="item-icon">
                <HomeOutlinedIcon />
              </div>
              <div className="item-text">Dashboard</div>
            </Link>
          </div>
        </div>
      </div>
      {/* category 2*/}
      <div className="sidebar_category">
        <div className="sidebar_category_type">DELIVERY</div>

        <div className="sidebar_category_item">
          <div
            className={`item ${
              pathname === "/deliveries" ? "item-active" : ""
            }`}
          >
            <Link to="/deliveries" className="item_link">
              <div className="item-icon">
                <LocalShippingRoundedIcon />
              </div>
              <div className="item-text">Delivery</div>
            </Link>
          </div>

          <div
            className={`item ${pathname === "/pickups" ? "item-active" : ""}`}
          >
            <Link to="/pickups" className="item_link">
              <div className="item-icon">
                <LocalShippingOutlinedIcon />
              </div>
              <div className="item-text">Pickup</div>
            </Link>
          </div>

          <div
            className={`item ${pathname === "/invoices" ? "item-active" : ""}`}
          >
            <Link to="/invoices" className="item_link">
              <div className="item-icon">
                <DescriptionOutlinedIcon />
              </div>
              <div className="item-text">Invoices</div>
            </Link>
          </div>
        </div>
      </div>

      {/* category 3 */}
      <div className="sidebar_category">
        <div className="sidebar_category_type">USEFUL</div>

        <div className="sidebar_category_item">
          <div
            className={`item ${
              pathname === "/laundry_items" ? "item-active" : ""
            }`}
          >
            <Link to="/laundry_items" className="item_link">
              <div className="item-icon">
                <CheckroomIcon />
              </div>
              <div className="item-text">Laundry items</div>
            </Link>
          </div>

          <div
            className={`item ${pathname === "/ratings" ? "item-active" : ""}`}
          >
            <Link to="/ratings" className="item_link">
              <div className="item-icon">
                <ReviewsIcon />
              </div>
              <div className="item-text">Ratings</div>
            </Link>
          </div>

          <div
            className={`item ${
              pathname === "/store_locations" ? "item-active" : ""
            }`}
          >
            <Link to="/store_locations" className="item_link">
              <div className="item-icon">
                <LocationOnIcon />
              </div>
              <div className="item-text">Store locations</div>
            </Link>
          </div>
        </div>
      </div>

      {/* category 4 */}
      <div className="sidebar_category">
        <div className="sidebar_category_type">USER</div>

        <div className="sidebar_category_item">
          <div
            className={`item ${
              pathname === "/settings" ? "item-active" : ""
            }`}
          >
            <Link to="/settings" className="item_link">
              <div className="item-icon">
                <SettingsIcon />
              </div>
              <div className="item-text">Settings</div>
            </Link>
          </div>

          <div
            className={`item ${
              pathname === "/login" ? "item-active" : ""
            }`}
          >
            <Link to="/login" className="item_link">
              <div className="item-icon">
                <LogoutIcon />
              </div>
              <div className="item-text">Logout</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer">
        &copy; 2023 by Landramat.All right
        <br />
        received.
      </div>
    </div>
  );
};

export default Sidebar;
