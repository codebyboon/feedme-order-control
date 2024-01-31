import React from "react";
import axios from "axios";

/**
 * * Button for adding a new normal order
 * * It will handle upon clicking the "Add Normal Order" button.
 */

const AddNormalOrder = ({ addOrder }) => {
  // Handle the click event on the "Add Normal Order" button
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/orders/normal");

      if (response.status === 200) {
        console.log("Added normal order successfully.");
      }

      // Newly added to fetch the pending order whenever there is new order
      const order = await axios.get("http://localhost:3001/orders");
      addOrder(order.data);
    } catch (err) {
      console.log("Error adding normal order: ", err);
    }
  };

  // Render the "Add Normal Order" button
  return (
    <div className="ml-6 mr-3">
      <button className="border px-3" onClick={handleClick}>
        Add Normal Order
      </button>
    </div>
  );
};

export default AddNormalOrder;
