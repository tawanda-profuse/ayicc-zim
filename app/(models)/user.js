import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, default: "user", enum: ["user", "admin"] },
    isVerified: { type: Boolean, default: false },
    userType: {
      type: String,
      default: "Innovator",
      enum: [
        "Innovator",
        "Funding Partner",
        "Expert",
        "Private Sector",
        "NGO",
        "Community Group",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
