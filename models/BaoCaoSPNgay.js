const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoSPNgaySchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        unique: true,
        required:true
    },
    SLSANPHAMNHAN: {
        type: Number,
        required: true
    },
    SLSANPHAMBAN: {
        type: Number,
        required: true
    },
})

BaoCaoSPNgaySchema.plugin(uniqueValidator);
const BaoCaoSPNgay = mongoose.model('BaoCaoSPNgay',BaoCaoSPNgaySchema);
module.exports = BaoCaoSPNgay;