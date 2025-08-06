import express from "express";
import {
  createNovel,
  updateNovel,
  deleteNovel,
  getAllNovel,
  getNovelById,
} from "../controllers/novel.controller.js";

const router = express.Router();

router.get("/", getAllNovel);

router.get("/", getNovelById);

router.post("/", createNovel);

router.put("/", updateNovel);

router.delete("/", deleteNovel);

export default router;
