import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  firstName: String,
  lastName: Date,
  email: {type: String, unique: true},
  password: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

const Event = mongoose.models.Event || mongoose.model("Event", userSchema);
export default Event;
