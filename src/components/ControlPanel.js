import React from "react";

const ControlPanel = ({ addOrder, addBot, removeBot }) => {
  return (
    <div>
      <button
        className="ml-6 mr-3 border px-3"
        onClick={() => addOrder("Normal")}
      >
        New Normal Order
      </button>
      <button className="mx-3 border px-3" onClick={() => addOrder("VIP")}>
        New VIP Order
      </button>
      <button className="mx-3 border px-3" onClick={() => addBot()}>
        + Bot
      </button>
      <button className="mx-3 border px-3" onClick={() => removeBot()}>
        - Bot
      </button>
    </div>
  );
};

export default ControlPanel;
