const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoHDNgaySchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        unique: true,
        required:true
    },
    SLHOADONKYGUI: {
        type: Number,
        required: true
    },
    SLHOADONBANHANG: {
        type: Number,
        required: true
    },
})

BaoCaoHDNgaySchema.plugin(uniqueValidator);
const BaoCaoHDNgay = mongoose.model('BaoCaoHDNgay',BaoCaoHDNgaySchema);
module.exports = BaoCaoHDNgay;