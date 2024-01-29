let orderList = [];
let normalOrder = [];
let vipOrder = [];

let id = 0;

const getOrders = (req, res) => {
  orderList = vipOrder.concat(normalOrder);
  res.json(orderList);
  //   res.send("All orders");
};

const addNormalOrder = (req, res) => {
  id++;

  normalOrder.push({ id: id, orderType: "Normal" });
  res.send("Normal order added");
};

const addVipOrder = (req, res) => {
  id++;

  vipOrder.push({ id: id, orderType: "VIP" });
  res.send("VIP order added");
};

export { getOrders, addNormalOrder, addVipOrder };
