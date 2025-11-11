import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema({
    beneficiary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beneficiary"
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    geo: {
        lat: Number,
        lng: Number
    },
    photoPath: String,
    notes: String,
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }
});

export const Verification = mongoose.model("Verification", verificationSchema);
