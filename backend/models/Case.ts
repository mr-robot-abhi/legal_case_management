import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    caseName: { type: String, required: true },
    caseNumber: { type: String, required: true, unique: true },
    caseDate: { type: Date, required: true },
    advocateOnRecord: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courtType: { type: String, required: true },
    hearingDate: { type: Date, required: true },
    outcome: { type: String },
    nextHearingDate: { type: Date },
    actionRequired: { type: String },
    requiredDocuments: [
      {
        name: String,
        description: String,
        fileUrl: String,
      },
    ],
    additionalLawyers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Case", CaseSchema);
