import { Beneficiary } from "../models/beneficiary.model.js";
import { generateDigitalId } from "../utils/generateDigitalId.js";

export const createBeneficiary = async (req, res) => {
    const { name, casteCategory, address, district, state } = req.body;

    const digitalId = generateDigitalId();

    const beneficiary = await Beneficiary.create({
        digitalId,
        name,
        casteCategory,
        address,
        district,
        state
    });

    res.json({ message: "Beneficiary created", beneficiary });
};

export const uploadDocument = async (req, res) => {
    const beneficiary = await Beneficiary.findById(req.params.id);

    beneficiary.documents.push({
        label: req.body.label || "document",
        filePath: req.file.path,
        uploadedAt: new Date()
    });

    await beneficiary.save();

    res.json({ message: "Uploaded", documents: beneficiary.documents });
};
