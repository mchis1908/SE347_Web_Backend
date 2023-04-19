const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const TaiKhoanSchema = mongoose.Schema({
    TENTAIKHOAN: {
        type: String,
        unique: true,
        required: true
    },
    MATKHAU: {
        type: String,
        required: true
    },
    PHANQUYEN: {
        type: String,
        required: true
    },
    MANV: {
        type: String,
        ref:'NhanVien'
    }
}, { timestamps: true })

TaiKhoanSchema.plugin(uniqueValidator);
const TaiKhoan = mongoose.model('TaiKhoan', TaiKhoanSchema)
module.exports = TaiKhoan