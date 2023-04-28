const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const ThoiGianLamViecSchema = mongoose.Schema({
    THOIGIAN: {
        type: String,
        required: true,
        unique: true,
    },
    LAMVIEC: [[{
        gio: {
            type: Number,
            required: true
        },
        sdt: {
            type: String,
            required: true
        }
    }]]
})
ThoiGianLamViecSchema.plugin(uniqueValidator);
const ThoiGianLamViec = mongoose.model('ThoiGianLamViec',ThoiGianLamViecSchema);
module.exports = ThoiGianLamViec;