import { Router } from "express";
import {
  getOrders,
  getCompletedOrders,
  addNormalOrder,
  addVipOrder,
  processOrder,
} from "../controller/ordersController.js";
const router = Router();

router.get("/", getOrders);

router.get("/completed", getCompletedOrders);

router.post("/normal", addNormalOrder);

router.post("/vip", addVipOrder);

router.post("/process", processOrder);

export default router;
