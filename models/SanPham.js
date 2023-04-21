const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const SanPhamSchema = mongoose.Schema({
    MASANPHAM: {
        type: String,
        unique: true,
        required: true
    },
    TENSANPHAM: {
        type:String,
        required:true
    },
    MAHOADON: {
        type:String,
        required:true
    },
    LOAI: {
        type: String,
        required: true
    },
    TRANGTHAI: {
        type: String,
        required: true
    },
    HINHANH: {
        type: String,
        required: true
    },
    GIA: {
        type: Number,
        required: true
    },
    
});

SanPhamSchema.plugin(uniqueValidator);
const SanPham = mongoose.model('SanPham',SanPhamSchema);
module.exports = SanPham;