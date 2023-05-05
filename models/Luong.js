const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const LuongSchema = mongoose.Schema({
    THOIGIAN: {
        type: String,
        required: true,
        unique: true,
    },
    LAMVIEC: [{
        sdt: {
            type: String,
            required: true
        },
        gio: {
            type: Number,
            required: true
        }
    }]
})
LuongSchema.plugin(uniqueValidator);
const Luong = mongoose.model('Luong',LuongSchema);
module.exports = Luong;