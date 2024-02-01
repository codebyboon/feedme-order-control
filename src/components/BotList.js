import React from "react";

const BotList = ({ bots }) => {
  return (
    <div>
      <h2>Bots Status</h2>
      {bots.map((bot) => (
        <div key={bot.id}>{`Bot ${bot.id} - ${bot.status}`}</div>
      ))}
    </div>
  );
};

export default BotList;
