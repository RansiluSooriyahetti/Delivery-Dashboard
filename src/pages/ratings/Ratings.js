import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

import RatingWidget from "../../components/widget_rating";
import axios from "axios";

import "./ratings.css";
import { useEffect, useState } from "react";

const Invoices = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllReviews`)
      .then((res) => {
        setRatings(
          res.data.map((row) => {
            const byteCharacters = atob(atob(row.image));
            const byteArrays = [];

            for (
              let offset = 0;
              offset < byteCharacters.length;
              offset += 1024
            ) {
              const slice = byteCharacters.slice(offset, offset + 1024);

              const byteNumbers = new Array(slice.length);
              for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              const byteArray = new Uint8Array(byteNumbers);

              byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, { type: "image/jpg" });
            const blobUrl = URL.createObjectURL(blob);
            return { ...row, pic: blobUrl };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

  return (
    <div className="ratings">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="dashboardData">
        <div className="ratingBox">
          {ratings.length > 0 &&
            ratings.map((rating) => {
              return (
                <RatingWidget
                  key={rating.customerId}
                  img={rating.pic}
                  val={rating.starValue}
                  name={rating.customerName}
                  description={rating.review}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
