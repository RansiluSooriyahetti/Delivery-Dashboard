import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./style.css";

const index = ({ setFilterText, value }) => {
  return (
    <form action="#" className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Search here"
        onChange={(e) => setFilterText(e.target.value)}
        value={value}
      ></input>

      <button className="searchbar-button">
        <div className="searchbar-icon">
          <SearchOutlinedIcon />{" "}
        </div>
      </button>
    </form>
  );
};

export default index;
