import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Client", "Lawyer"], required: true },
    fcmToken: { type: String }, // For Firebase notifications
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
