const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const HoaDonSchema = mongoose.Schema({
    MAHOADON: {
        type: String,
        unique: true,
        required: true
    },
    SDT: {
        type: String,
        ref:'KhachHang',
        required: true
    },
    SOLUONG: {
        type: Number,
        default:0
    },
    LOAI: {
        type: String
    },
    TRANGTHAI: {
        type: String,
    },
    NGAYTAODON: {
        type: String,
    },
    NGAYTHANHTOAN: {
        type: String,
        default:'',
    },
    
}, { timestamps: true });

HoaDonSchema.plugin(uniqueValidator);
const HoaDon = mongoose.model('HoaDon',HoaDonSchema);
module.exports = HoaDon;