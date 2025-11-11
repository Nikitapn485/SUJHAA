import Sentiment from "sentiment";
import { Feedback } from "../models/feedback.model.js";

export const submitFeedback = async (req, res) => {
    const { beneficiaryId, text } = req.body;

    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);

    const feedback = await Feedback.create({
        beneficiary: beneficiaryId,
        submittedBy: req.user.id,
        text,
        sentimentScore: result.score
    });

    res.json({ message: "Feedback received", feedback });
};
