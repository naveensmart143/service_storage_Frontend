import React from "react";
import "../List/ListItem.css";
function Model({ handleChange, productId }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const label = document.getElementById("Label").value;
    const description = document.getElementById("Description").value;
    console.log(productId);
    let requestBody = {
      label,
      description,
      productId,
    };
    fetch("http://localhost:4000/fileUpload/label", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resData) => {
        if (resData.status !== 200 && resData.status !== 201) {
          throw new Error("Page Not Found");
        }
        return resData.json();
      })
      .then((res) => {
        // console.log(res.token);
        alert(
          "Labeling and description are added and go back and login again to see the changes"
        );

        handleChange();
      })
      .catch((err) => {
        alert("Please Provide the Valid Credentials ");
      });
  };
  return (
    <div className="Model__Class">
      <form onSubmit={handleSubmit}>
        <div className="Email_div">
          <label htmlFor="label">Label</label>
          <input type="text" id="Label" required placeholder="Label" />
        </div>
        <div className="Email_div">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            id="Description"
            required
            placeholder="Description"
          />
        </div>
        <div className="Submit_btn">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default Model;
