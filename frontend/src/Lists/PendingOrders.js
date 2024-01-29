import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/orders");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching orders: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-3">
      <h1 className="text-xl font-bold">PENDING</h1>
      <p>=================</p>
      <div className="flex flex-row">
        <div className="mr-10">
          <div>Order</div>
          {data.map((order, index) => (
            <div key={order.id}>Order {order.id}</div>
          ))}
        </div>
        <div className="ml-10">
          <div>Order Type</div>
          {data.map((order, index) => (
            <div key={order.id}>{order.orderType}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
