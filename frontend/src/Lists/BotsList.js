import React, { useState, useEffect } from "react";
import axios from "axios";

const BotsList = () => {
  const [bots, setBots] = useState([]);

  // To update the bots list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bots");
        setBots(response.data);
      } catch (err) {
        console.error("Error fetching orders: ", err);
      }
    };

    fetchData();
  }, [bots]);

  return (
    <div className="mr-3">
      <h1 className="text-xl font-bold">BOTS</h1>
      <p>=====================</p>
      <div className="flex flex-row">
        <div className="mr-10">
          <div className="font-semibold underline text-lg">Bot</div>
          {bots.map((bot, index) => (
            <div key={bot.id}>Bot {bot.id}</div>
          ))}
        </div>
        <div className="ml-10">
          <div className="font-semibold underline text-lg">Bot Status</div>
          {bots.map((bot, index) => (
            <div key={bot.id}>
              {bot.status === "IDLE" ? bot.status : "Processing order 1"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotsList;
