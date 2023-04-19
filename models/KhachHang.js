const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const KhachHangSchema = mongoose.Schema({
    HOTEN: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        unique: true,
        required: true
    },
    EMAIL: {
        type: String,
    },
    LANDENGANNHAT: {
        type: String,
        default: ''
    },
    SODONKYGUI: {
        type: Number,
        default: 0
    },
})

KhachHangSchema.plugin(uniqueValidator);
const KhachHang = mongoose.model('KhachHang',KhachHangSchema);
module.exports = KhachHang;