import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import beneficiaryRoutes from "./routes/beneficiary.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";
import verificationRoutes from "./routes/verification.routes.js";
import misRoutes from "./routes/mis.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/beneficiaries", beneficiaryRoutes);
app.use("/api/v1/feedback", feedbackRoutes);
app.use("/api/v1/verifications", verificationRoutes);
app.use("/api/v1/mis", misRoutes);

app.get("/", (req, res) => {
    res.send("SIH Backend (MVC + ESM)");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
