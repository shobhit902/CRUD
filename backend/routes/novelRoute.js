import express from "express";
import {
  createNovel,
  updateNovel,
  deleteNovel,
  getAllNovel,
  getNovelById,
} from "../controllers/novel.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/user.middleware.js"; 

const router = express.Router();

router.get("/", getAllNovel);
router.get("/:id", getNovelById);

router.post("/", authenticate, authorize("create"), createNovel);
router.put("/:id", authenticate, authorize("update"), updateNovel);
router.delete("/:id", authenticate, authorize("delete"), deleteNovel);

export default router;
