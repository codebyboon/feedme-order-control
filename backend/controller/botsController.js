import { processOrder } from "../controller/ordersController.js";
let botsList = [];
let id = 0;

const getBots = (req, res) => {
  res.json(botsList);
};

const addBots = (req, res) => {
  id++;

  botsList.push({ id: id, status: "IDLE" });
  processOrder();
  res.status(201).send();
};

const removeBots = (req, res) => {
  id--;
  botsList.pop();
  res.status(204).send();
};

const getIdleBots = () => {
  return botsList.find((bot) => bot.status === "IDLE");
};

export { getBots, addBots, removeBots, getIdleBots };
