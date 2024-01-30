import React from "react";
import axios from "axios";

const RemoveBot = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/bots/remove");

      if (response.status === 200) {
        console.log("Removed bot successfully.");
      }
    } catch (err) {
      console.log("Error removing bot: ", err);
    }
  };
  return (
    <div className="mx-3">
      <button className="border px-3" onClick={handleClick}>
        Remove Bot
      </button>
    </div>
  );
};

export default RemoveBot;
