import { Router } from "express";
import { getBots, addBots, removeBots } from "../controller/botsController.js";
const router = Router();

router.get("/", getBots);

router.post("/add", addBots);

router.post("/remove", removeBots);

export default router;
