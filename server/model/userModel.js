const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  certificate: {
    status: {
      type: Boolean,
    },
    userName: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    roll: {
      type: String,
    },
    regNo: {
      type: String,
    },
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
});

module.exports = mongoose.model("User", studentsSchema);
