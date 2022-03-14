import React, { useState } from "react";
import "../Profile/Dialog.css";
import Upload_a_file from "./Upload_a_file";
import List from "../List/List";
function Upload() {
  const [isOpen, setopen] = useState(false);
  const handleChange = () => {
    setopen(true);
  };
  const handleClick = () => {
    setopen(false);
  };
  return (
    <div>
      <div className="Dialog_header">
        <div className="Submit_btn">
          <button onClick={handleChange}>Uploaded Files</button>
        </div>

        <div className="Submit_btn">
          <button onClick={handleClick}>Upload a File</button>
        </div>
      </div>
      <div className="Upload_main">
        {isOpen && <List />}
        {!isOpen && <Upload_a_file />}
      </div>
    </div>
  );
}

export default Upload;
