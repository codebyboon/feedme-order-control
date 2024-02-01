import React from "react";

const OrderList = ({ orders, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{`Order ${order.id} - ${order.type}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
