import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: String,
    image: {
      type: String,
      default:
        "https://github.com/tawanda-profuse/ayicc-zim/blob/master/public/images/ayicc-logo.png?raw=true",
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
