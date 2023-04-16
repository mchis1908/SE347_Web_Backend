const mongoose = require("mongoose");

const ThamSoSchema = mongoose.Schema({
  TENTHAMSO: {
    type: String,
    required: true,
  },
  GIATRITHAMSO: {
    type: Number,
    required: true,
  },
});

const ThamSo = mongoose.model("ThamSo", ThamSoSchema);
module.exports = ThamSo;
