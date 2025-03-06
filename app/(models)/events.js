import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const eventSchema = new Schema({
  title: String,
  date: Date,
  time: Time,
  location: String,
  image: {
    type: String,
    required: true,
    default: ""
  },
  description: String,
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
