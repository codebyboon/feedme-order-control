import React, { useState, useEffect } from "react";
import axios from "axios";

const CompletedOrders = () => {
  const [completed, setCompleted] = useState([]);

  // To update the pending orders whenever new order is added
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/orders/completed"
        );
        setCompleted(response.data);
      } catch (err) {
        console.error("Error fetching orders: ", err);
      }
    };

    fetchData();
  }, [completed]);
  return (
    <div className="ml-3">
      <h1 className="text-xl font-bold">COMPLETED</h1>
      <p>=====================</p>
      <div className="flex flex-row">
        <div className="mr-10">
          <div className="font-semibold underline text-lg">Order</div>
          {completed.map((order, index) => (
            <div key={order.id}>Order {order.id}</div>
          ))}
        </div>
        <div className="ml-10">
          <div className="font-semibold underline text-lg">Order Type</div>
          {completed.map((order, index) => (
            <div key={order.id}>{order.orderType}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedOrders;
