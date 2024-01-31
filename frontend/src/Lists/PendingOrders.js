import React from "react";

/**
 * * SUMMARY
 * * To display the pending orders for both normal & VIP orders
 */

const PendingOrders = ({ orders }) => {
  /**
   * ! Deprecated due to the constant fetching of the pending orders
   const [orders, setOrders] = useState([]);

  To update the pending orders whenever new order is added
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/orders");
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders: ", err);
      }
    };

    fetchData();
  }, [orders]);*/

  // To render the pending orders list
  return (
    <div className="ml-3">
      <h1 className="text-xl font-bold">PENDING</h1>
      <p>======================</p>
      <div className="flex flex-row">
        <div className="mr-10">
          <div className="font-semibold underline text-lg">Order</div>
          {orders.map((order, index) => (
            <div key={order.id}>Order {order.id}</div>
          ))}
        </div>
        <div className="ml-10">
          <div className="font-semibold underline text-lg">Order Type</div>
          {orders.map((order, index) => (
            <div key={order.id}>{order.orderType}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
