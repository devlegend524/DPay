import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema(
  {
    content: String,
    date: Number,
    InscriptionId: String,
    price: Number,
    tag: String,
    tx: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
