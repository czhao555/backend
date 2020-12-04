const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  daysPurchased: {
    type: String,
    required: true,
  },
  pharmacyName: {
    type: String,
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  facilityID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SmsInfo", PostSchema);
