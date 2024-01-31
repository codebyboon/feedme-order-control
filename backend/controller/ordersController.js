import { updateBots } from "./botsController.js";

let orderList = [];
let completedOrders = [];

let id = 0;

let messageStatus = "";

const getOrders = (req, res) => {
  res.json(orderList);
  //   res.send("All orders");
};

const getCompletedOrders = (req, res) => {
  res.json(completedOrders);
};

const addNormalOrder = (req, res) => {
  id++;

  orderList.push({ id: id, orderType: "Normal" });
  res.status(201).send(messageStatus);
};

const addVipOrder = (req, res) => {
  id++;

  orderList.unshift({ id: id, orderType: "VIP" });
  res.status(201).send(messageStatus);
};

const processOrder = (req, res) => {
  let botsList;
  const idleBot = req.body;

  const orderToProcess = orderList.shift();

  if (!orderToProcess) {
    return;
  }

  idleBot.status = "Busy processing Order " + orderToProcess.id;
  setTimeout(() => {
    completedOrders.push({ ...orderToProcess });
    idleBot.status = "IDLE";
    botsList = updateBots(index, idleBot);
  }, 10000);

  const index = orderList.indexOf(orderToProcess);
  botsList = updateBots(index, idleBot);
  res.json({ orderList: orderList, botsList: botsList });
};

export {
  getOrders,
  getCompletedOrders,
  addNormalOrder,
  addVipOrder,
  processOrder,
};
