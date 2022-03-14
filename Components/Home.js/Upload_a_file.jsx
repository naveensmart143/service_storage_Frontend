import React, { useContext, useState } from "react";
import "../Profile/Dialog.css";
import axios from "axios";
import { authContext } from "../../Context/authContext";

function Upload_a_file() {
  const { userId, token } = useContext(authContext);
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    let formdata = new FormData();
    formdata.append("fileName", state);
    formdata.append("userId", userId);

    axios
      .post("http://localhost:4000/fileUpload/", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("File has been uploaded Successfully");
        setState(null);
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      {" "}
      <div className="Dialog_Body">
        <form onSubmit={handleSubmit}>
          <div className="Email_div">
            <label>File Location</label>
            <input onChange={handleChange} type="file" id="file" />
          </div>
          <div className="Submit_btn">
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload_a_file;
