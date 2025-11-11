import express from "express";
import { submitFeedback } from "../controllers/feedback.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", auth, allowRoles("Beneficiary"), submitFeedback);

export default router;
