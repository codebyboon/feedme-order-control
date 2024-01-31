import React from "react";
import axios from "axios";

const AddVIPOrder = ({ addOrder }) => {
  // Handle the click event on the "Add VIP Order" button
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/orders/vip");

      if (response.status === 200) {
        console.log("Added VIP order successfully.");
      }

      // Newly added to fetch the pending order whenever there is new order
      const order = await axios.get("http://localhost:3001/orders");
      addOrder(order.data);
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
