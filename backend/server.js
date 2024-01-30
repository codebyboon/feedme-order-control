import express from "express";
import botsRoute from "./routes/bots.js";
import ordersRoute from "./routes/orders.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3001;

app.use("/bots", botsRoute);
app.use("/orders", ordersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
