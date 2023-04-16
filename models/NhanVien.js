const mongoose = require('mongoose')

const NhanVienSchema = mongoose.Schema({
    MANV: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    HOTEN: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        required: true
    },
    EMAIL: {
        type: String,
        required: true
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

const NhanVien = mongoose.model('NhanVien',NhanVienSchema);
module.exports = NhanVien;