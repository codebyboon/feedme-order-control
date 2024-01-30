import { getIdleBots } from "../controller/botsController.js";

let orderList = [];
let normalOrder = [];
let vipOrder = [];
let completedOrders = [];

let id = 0;

let messageStatus = "";

const getOrders = (req, res) => {
  orderList = vipOrder.concat(normalOrder);
  res.json(orderList);
  //   res.send("All orders");
};

const getCompletedOrders = (req, res) => {
  res.json(completedOrders);
};

const addNormalOrder = (req, res) => {
  id++;

  normalOrder.push({ id: id, orderType: "Normal" });
  messageStatus = processOrder();
  res.status(201).send(messageStatus);
};

const addVipOrder = (req, res) => {
  id++;

  vipOrder.push({ id: id, orderType: "VIP" });
  messageStatus = processOrder();
  res.status(201).send(messageStatus);
};

const processOrder = (req, res) => {
  const idleBot = getIdleBots();

  if (!idleBot) {
    return "No idle bots available.";
  }

  const orderToProcess = orderList.shift();
  if (!orderToProcess) {
    return "No orders to process.";
  }

  idleBot.status = "Busy processing " + orderToProcess;
  setTimeout(() => {
    completedOrders.push({ ...orderToProcess });
    idleBot.status = "IDLE";
  }, 10000);
};

export {
  getOrders,
  getCompletedOrders,
  addNormalOrder,
  addVipOrder,
  processOrder,
};
