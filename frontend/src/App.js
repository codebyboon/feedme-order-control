import React, { useState } from "react";
import PendingOrders from "./Lists/PendingOrders";
import CompletedOrders from "./Lists/CompletedOrders";
import BotsList from "./Lists/BotsList";
import AddNormalOrder from "./Buttons/AddNormalOrder";
import AddVIPOrder from "./Buttons/AddVIPOrder";
import AddBot from "./Buttons/AddBot";
import RemoveBot from "./Buttons/RemoveBot";

function App() {
  const [orders, setOrders] = useState([]);
  const [bots, setBots] = useState([]);

  const updateBot = (botData) => {
    if (Array.isArray(botData)) {
      // If botData is an array, replace the whole bots array
      setBots(botData);
    } else {
      // If botData is a single bot object, update that specific bot
      setBots((prevBots) =>
        prevBots.map((bot) => (bot.id === botData.id ? botData : bot))
      );
    }
  };

  const updateOrder = (orderData) => {
    setOrders(orderData);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <PendingOrders orders={orders} />
        <CompletedOrders />
        <BotsList
          bots={bots}
          pendingOrders={orders}
          updateBot={updateBot}
          updateOrder={updateOrder}
        />
      </div>
      <div className="flex flex-row absolute bottom-10 justify-between">
        <AddNormalOrder addOrder={setOrders} />
        <AddVIPOrder addOrder={setOrders} />
        <AddBot addBot={setBots} />
        <RemoveBot removeBot={setBots} />
      </div>
    </div>
  );
}

export default App;
