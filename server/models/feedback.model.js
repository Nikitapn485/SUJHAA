import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    beneficiary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beneficiary"
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
    sentimentScore: Number,
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);
