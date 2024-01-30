import { Router } from "express";
import {
  getOrders,
  getCompletedOrders,
  addNormalOrder,
  addVipOrder,
} from "../controller/ordersController.js";
const router = Router();

router.get("/", getOrders);

router.get("/completed", getCompletedOrders);

router.post("/normal", addNormalOrder);

router.post("/vip", addVipOrder);

export default router;
