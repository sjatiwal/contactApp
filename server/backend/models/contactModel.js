const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  creatdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
