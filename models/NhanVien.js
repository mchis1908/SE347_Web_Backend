const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const NhanVienSchema = mongoose.Schema({
    HOTEN: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        unique: true,
        required: true
    },
    EMAIL: {
        type: String,
    },
    LUONGCOBAN: {
        type: Number,
        required: true
    },
    LUONGTHEOGIO: {
        type: Number,
        required: true
    },
})

NhanVienSchema.plugin(uniqueValidator);
const NhanVien = mongoose.model('NhanVien',NhanVienSchema);
module.exports = NhanVien;