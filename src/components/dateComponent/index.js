import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import "./style.css";
import { useEffect } from "react";
import { set } from "date-fns";

const DateComponent = ({ setSelectedDate }) => {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  const today = [year, month, day].join("-");
  return (
    <div className="datebox">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            defaultValue={dayjs(today)}
            onChange={(newValue) => {
              var d = new Date(newValue.$d),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear();

              if (month.length < 2) month = "0" + month;
              if (day.length < 2) day = "0" + day;
              const formattedDate = [year, month, day].join("-");

              setSelectedDate(formattedDate);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DateComponent;
