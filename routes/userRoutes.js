import express from "express";
import {
  getProfile,
  updateProfile
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/profile")
  .get(protect, getProfile)    // GET /api/users/profile
  .put(protect, updateProfile); // PUT /api/users/profile

export default router;