import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("This is bot page");
});

router.get("/addbot", (req, res) => {});

router.get("/removebot", (req, res) => {});

export default router;
