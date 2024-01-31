import React, { useState, useEffect } from "react";
import axios from "axios";

const BotsList = ({ bots, pendingOrders, updateBot, updateOrder }) => {
  // To update the bots list
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const bots = await axios.get("http://localhost:3001/bots");
        const idleBot = bots.find((bot) => bot.status === "IDLE");

        if (idleBot && pendingOrders.length > 0) {
          const response = await axios.post(
            "http://localhost:3001/orders/process",
            {
              id: idleBot.id,
              status: idleBot.status,
            }
          );
          updateBot(response.data.botsList);
          updateOrder(response.data.orderList);
        }
      } catch (err) {
        console.error("Error fetching orders: ", err);
      }
    };

    fetchData();
  }, [bots, pendingOrders, updateBot]);

  // Handle polling bot statuses
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await axios.get("http://localhost:3001/bots");

        updateBot(response.data); // Update bots with the latest statuses
      } catch (err) {
        console.error("Error fetching bot statuses: ", err);
      }
    }, 10000); // Poll every 10 seconds, adjust as needed

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [updateBot]);

  return (
    <div className="mr-3">
      <h1 className="text-xl font-bold">BOTS</h1>
      <p>=====================</p>
      <div className="flex flex-row">
        <div className="mr-10">
          <div className="font-semibold underline text-lg">Bot</div>
          {bots.map((bot) => (
            <div key={bot.id}>Bot {bot.id}</div>
          ))}
        </div>
        <div className="ml-10">
          <div className="font-semibold underline text-lg">Bot Status</div>
          {bots.map((bot) => (
            <div key={bot.id}>{bot.status}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotsList;
