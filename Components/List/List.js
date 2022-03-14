import React, { useState } from "react";
import ListItem from "./ListItem";
import { useEffect, useContext } from "react";
import axios from "axios";
import { authContext } from "../../Context/authContext";

function List() {
  const [items, setItems] = useState([]);
  const { token } = useContext(authContext);
  const dataFetch = async () => {
    axios
      .get("http://localhost:4000/fileUpload/uploads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          setItems(res.data.items[0]);
          return res.data;
        }
      });
  };
  useEffect(() => {
    let mount = true;
    if (mount) {
      dataFetch();
    }
    return () => {
      mount = false;
    };
  }, []);
  return (
    <div>
      {items.map((item) => {
        return (
          <ListItem
            titleLink={item.productName}
            nameofFile={item._id}
            key={item._id}
            label={item.name}
            description={item.description}
            userName={item.user}
          />
        );
      })}
    </div>
  );
}

export default List;
