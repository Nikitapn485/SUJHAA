import { Verification } from "../models/verification.model.js";

export const submitVerification = async (req, res) => {
    const { beneficiaryId, lat, lng, notes } = req.body;

    const verification = await Verification.create({
        beneficiary: beneficiaryId,
        submittedBy: req.user.id,
        geo: { lat, lng },
        photoPath: req.file?.path,
        notes
    });

    res.json({ message: "Verification submitted", verification });
};

export const approveVerification = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
        return res.status(400).json({ message: "Status must be Approved or Rejected" });
    }

    const verification = await Verification.findById(id);
    if (!verification) {
        return res.status(404).json({ message: "Verification not found" });
    }

    verification.status = status;
    await verification.save();

    res.json({
        message: `Verification ${status}`,
        verification
    });
};