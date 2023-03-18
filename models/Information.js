import mongoose from "mongoose";

const informationSchema = new mongoose.Schema(
  {
    supplier_name: String,
    address: String,
    phone_number: String,
  },
  { strict: false }
);

module.exports =
  mongoose.models.information ||
  mongoose.model("information", informationSchema);
