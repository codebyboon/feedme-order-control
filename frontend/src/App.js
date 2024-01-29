import React from "react";
import PendingOrders from "./Lists/PendingOrders";
import CompletedOrders from "./Lists/CompletedOrders";
import BotsList from "./Lists/BotsList";
import AddNormalOrder from "./Buttons/AddNormalOrder";
import AddVIPOrder from "./Buttons/AddVIPOrder";
import AddBot from "./Buttons/AddBot";
import RemoveBot from "./Buttons/RemoveBot";

function App() {
  // const
  return (
    <div>
      <div className="flex flex-row justify-between">
        <PendingOrders />
        <CompletedOrders />
        <BotsList />
      </div>
      <div className="flex flex-row absolute bottom-10 justify-between">
        <AddNormalOrder />
        <AddVIPOrder />
        <AddBot />
        <RemoveBot />
      </div>
    </div>
  );
}

export default App;
