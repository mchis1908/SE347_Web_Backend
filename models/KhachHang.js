const mongoose = require('mongoose')

const KhachHangSchema = mongoose.Schema({
    MAKH: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    HOTEN: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        required: true
    },
    LANDENGANNHAT: {
        type: String,
        required: true
    },
    SODONKYGUI: {
        type: Number,
        default: 0
    },
})

const KhachHang = mongoose.model('KhachHang',KhachHangSchema);
module.exports = KhachHang;