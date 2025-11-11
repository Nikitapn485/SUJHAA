import mongoose from "mongoose";

const beneficiarySchema = new mongoose.Schema({
    digitalId: { type: String, unique: true },
    name: String,
    casteCategory: String,
    address: String,
    district: String,
    state: String,
    documents: [
        {
            label: String,
            filePath: String,
            uploadedAt: Date
        }
    ]
});

export const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);
