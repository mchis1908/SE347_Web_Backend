const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const BaoCaoDTThangSchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        unique: true,
        required:true
    },
    DOANHTHU: {
        type: Number,
        required: true
    }
})

BaoCaoDTThangSchema.plugin(uniqueValidator);
const BaoCaoDTThang = mongoose.model('BaoCaoDTThang',BaoCaoDTThangSchema);
module.exports = BaoCaoDTThang;