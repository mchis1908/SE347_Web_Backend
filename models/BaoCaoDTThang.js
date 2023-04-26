const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoDTThangSchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        required:true
    },
    DOANHTHU: {
        type: Number,
        required: true
    },
    SANPHAM: {
        type: [],
        default:[]
    }
})

BaoCaoDTThangSchema.plugin(uniqueValidator);
const BaoCaoDTThang = mongoose.model('BaoCaoDTThang',BaoCaoDTThangSchema);
module.exports = BaoCaoDTThang;