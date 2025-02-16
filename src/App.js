import React, { useState, useEffect } from "react";
import OrderList from "./components/OrderList";
import BotList from "./components/BotList";
import ControlPanel from "./components/ControlPanel";
import { addBot, removeBot } from "./utilities/BotsUtil";
import { addOrder, processOrder, removeOrder } from "./utilities/OrdersUtil";

function App() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState([]);
  const [lastOrderId, setLastOrderId] = useState(1);

  const [removingOrder, setRemovingOrder] = useState([]);

  const [bots, setBots] = useState([]);

  // Add a new order
  const handleAddOrder = (orderType) => {
    addOrder(
      orderType,
      lastOrderId,
      pendingOrders,
      setPendingOrders,
      setLastOrderId
    );
  };

  // Remove order when an in-process order has been put back to PENDING
  const handleRemoveOrder = () => {
    removeOrder(
      completedOrders,
      removingOrder,
      setCompletedOrders,
      setRemovingOrder
    );
  };

  // Update the orders from pending > processing > completed after 10 seconds and it's relevant bots' status
  const handleProcessingOrder = () => {
    processOrder(
      bots,
      pendingOrders,
      setPendingOrders,
      setProcessingOrders,
      setCompletedOrders
    );
  };

  // Add a bot
  const handleAddBot = () => {
    addBot(bots, setBots);
  };

  // Remove a bot
  const handleRemoveBot = () => {
    removeBot(
      bots,
      setBots,
      processingOrders,
      setPendingOrders,
      setProcessingOrders,
      setRemovingOrder
    );
  };

  // Constantly check to process order and remove order whenever there are changes in bots list, pending orders list & processing orders list
  useEffect(() => {
    handleProcessingOrder();
    handleRemoveOrder();
  }, [bots, pendingOrders, processingOrders]);

  return (
    <div>
      <div className="flex flex-row justify-evenly">
        <OrderList orders={pendingOrders} title="PENDING" />
        <OrderList orders={completedOrders} title="COMPLETED" />
        <BotList bots={bots} />
      </div>
      <div className="flex justify-center fixed bottom-10 left-0 right-0 mx-auto">
        <ControlPanel
          addOrder={handleAddOrder}
          addBot={handleAddBot}
          removeBot={handleRemoveBot}
        />
      </div>
    </div>
  );
}

export default App;
