const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const LuongSchema = mongoose.Schema({
    THOIGIAN: [{
        THANGNAM: {
            type:String,
            required:true,
            unique:true
        },
        NGAY: [{
            NGAY: {
                type:String,
                required:true
            },
            SDT: {
                type:String,
                ref:'NhanVien',
                required:true
            },
            GIOLAMVIEC: {
                type: Number,
                default:0
            },
        }],
    }],
})
LuongSchema.plugin(uniqueValidator);
const Luong = mongoose.model('Luong',LuongSchema);
module.exports = Luong;