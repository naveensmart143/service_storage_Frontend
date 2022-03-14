// import { Description } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import { authContext } from "../../Context/authContext";
import Model from "../Home.js/model";
import "./ListItem.css";

function ListItem({ titleLink, nameofFile, label, description, userName }) {
  const [open, setopen] = useState(false);
  const { userId } = useContext(authContext);
  const handleChange = () => {
    setopen((prev) => !prev);
  };
  return (
    <div className="List">
      <div className="listName" onClick={handleChange}>
        <img src={titleLink} alt=" provided " />
        <div className="Edit_status">
          {userId === userName
            ? "You can Edit the Label  "
            : "you can't edit the Label"}
        </div>
        <div className="Label_class">{label}</div>
        <div className="Description_class">{description}</div>
      </div>
      {open && userId === userName && (
        <div className="BackDrop" onClick={handleChange}>
          <Model handleChange={handleChange} productId={nameofFile} />
        </div>
      )}
    </div>
  );
}

export default ListItem;
