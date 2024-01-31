let botsList = [];
let id = 0;

const getBots = (req, res) => {
  res.json(botsList);
};

const addBots = (req, res) => {
  id++;

  botsList.push({ id: id, status: "IDLE" });
  res.json(botsList);
};

const removeBots = (req, res) => {
  if (id > 1) {
    id--;
    botsList.pop();
    res.json(botsList);
  }
};

const getIdleBots = () => {
  return botsList.find((bot) => bot.status === "IDLE");
};

function updateBots(index, idleBot) {
  const updateStatus = { id: idleBot.id, status: idleBot.status };
  botsList.splice(index, 1, updateStatus);

  return botsList;
}

export { getBots, addBots, removeBots, getIdleBots, updateBots };
