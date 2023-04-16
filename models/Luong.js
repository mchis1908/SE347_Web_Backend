const mongoose = require('mongoose')

const LuongSchema = mongoose.Schema({
    MANV: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    GIOLAMVIEC: {
        type: Number,
        required: true
    },
    THOIGIAN: {
        type: String,
        default: 0
    },
})

const KhachHang = mongoose.model('KhachHang',KhachHangSchema);
module.exports = KhachHang;