import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Widget from "../../components/widget_dashboard";
import Googlemap from "../../components/dashboardmap";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import axios from "axios";

import { Link } from "react-router-dom";

// import {Link}from "react-router-dom";

import "./dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [deliveriesCount, setDeliveriesCount] = useState(0);
  const [pickupCount, setPickupCount] = useState(0);
  const [pickupLocations, setPickupLocations] = useState([]);
  const [deliveryLocations, setDeliveryLocations] = useState([]);

  const getToday = () => {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const today = [year, month, day].join("-");
    return today;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllDeliveryCountByDate/${getToday()}`)
      .then((res) => {
        setDeliveriesCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8080/getPickupsCountByDate/${getToday()}`)
      .then((res) => {
        setPickupCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8080/getInvoiceLocations/${getToday()}`)
      .then((res) => {
        setDeliveryLocations(
          res.data.map((row) => {
            return {
              lng: parseFloat(row.longitude),
              lat: parseFloat(row.latitude),
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8080/getPickupLocations/${getToday()}`)
      .then((res) => {
        setPickupLocations(
          res.data.map((row) => {
            return {
              lng: parseFloat(row.longitude),
              lat: parseFloat(row.latitude),
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="dashboardData">
        <div className="dashboard_widgets">
          <Widget
            icon={<ReceiptLongIcon />}
            value={deliveriesCount + pickupCount}
            description="total"
          />
          <Link to="/deliveries" className="item">
            <Widget
              icon={<CallReceivedIcon />}
              value={deliveriesCount}
              description="deliveries"
            />
          </Link>
          <Link to="/pickups" className="item">
            <Widget
              icon={<CallMadeIcon />}
              value={pickupCount}
              description="pickups"
            />
          </Link>
        </div>

        <div className="googlemap">
          <Googlemap
            pickupLocations={pickupLocations}
            deliveryLocations={deliveryLocations}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
