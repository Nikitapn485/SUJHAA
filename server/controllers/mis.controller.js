import { Beneficiary } from "../models/beneficiary.model.js";
import { Verification } from "../models/verification.model.js";
import { Feedback } from "../models/feedback.model.js";

export const getMISReport = async (req, res) => {
    const totalBeneficiaries = await Beneficiary.countDocuments();
    const totalVerifications = await Verification.countDocuments();

    const verificationStats = await Verification.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    const sentimentStats = await Feedback.aggregate([
        {
            $group: {
                _id: null,
                avgSentiment: { $avg: "$sentimentScore" },
                totalFeedbacks: { $sum: 1 }
            }
        }
    ]);

    res.json({
        beneficiaries: {
            total: totalBeneficiaries,
        },
        verifications: {
            total: totalVerifications,
            breakdown: verificationStats
        },
        feedback: sentimentStats[0] || { avgSentiment: 0, totalFeedbacks: 0 }
    });
};
