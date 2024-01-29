import { Router } from "express";
import {
  getOrders,
  addNormalOrder,
  addVipOrder,
} from "../controller/ordersController.js";
const router = Router();

router.get("/", getOrders);

router.post("/normal", addNormalOrder);

router.post("/vip", addVipOrder);

export default router;
