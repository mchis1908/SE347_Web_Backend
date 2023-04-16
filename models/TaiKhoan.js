const mongoose = require('mongoose')

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
        require: true
    }
}, { timestamps: true })

const TaiKhoan = mongoose.model('TaiKhoan', TaiKhoanSchema)
module.exports = TaiKhoan