const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const SuKienSchema = mongoose.Schema({
    THOIGIANBATDAU: {
        type: String,
        required: true,
    },
    THOIGIANKETTHUC: {
        type: String,
        required: true,
    },
    HINHANH: {
        type: String,
    },
    TIEUDE: {
        type: String,
        required: true
    },
    MOTA: {
        type: String,
        required: true
    },
})
SuKienSchema.plugin(uniqueValidator);
const SuKien = mongoose.model('SuKien',SuKienSchema);
module.exports = SuKien;