import React from "react";
import axios from "axios";

const AddBot = ({ addBot }) => {
  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/bots/add");
      addBot(response.data);
    } catch (err) {
      console.log("Error adding bot: ", err);
    }
  };
  return (
    <div className="mx-3">
      <button className="border px-3" onClick={handleClick}>
        Add Bot
      </button>
    </div>
  );
};

export default AddBot;
