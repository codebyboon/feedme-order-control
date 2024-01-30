import React from "react";
import axios from "axios";

const AddVIPOrder = () => {
  // Handle the click event on the "Add VIP Order" button
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/orders/vip");

      if (response.status === 200) {
        console.log("Added VIP order successfully.");
      }
    } catch (err) {
      console.log("Error adding VIP order: ", err);
    }
  };

  return (
    <div className="mx-3">
      <button className="border px-3" onClick={handleClick}>
        Add VIP Order
      </button>
    </div>
  );
};

export default AddVIPOrder;
