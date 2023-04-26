const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoSPThangSchema = mongoose.Schema({
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

BaoCaoSPThangSchema.plugin(uniqueValidator);
const BaoCaoSPThang = mongoose.model('BaoCaoSPThang',BaoCaoSPThangSchema);
module.exports = BaoCaoSPThang;