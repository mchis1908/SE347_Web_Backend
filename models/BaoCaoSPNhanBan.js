const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoSPNhanBanSchema = mongoose.Schema({
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

BaoCaoSPNhanBanSchema.plugin(uniqueValidator);
const BaoCaoSPNhanBan = mongoose.model('BaoCaoSPNhanBan',BaoCaoSPNhanBanSchema);
module.exports = BaoCaoSPNhanBan;