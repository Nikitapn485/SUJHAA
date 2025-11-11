import express from "express";
import { submitVerification } from "../controllers/verification.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";
import { approveVerification } from "../controllers/verification.controller.js";

const router = express.Router();

router.post("/",
    auth,
    allowRoles("FieldOfficer"),
    upload.single("photo"),
    submitVerification);
router.patch(
    "/:id/approve",
    auth,
    allowRoles("DistrictOfficer", "StateOfficer", "CentralAdmin"),
    approveVerification
);

export default router;
