const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const LuongSchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        unique:true,
        required:true
    },   
    SDT: {
        type:String,
        ref:'NhanVien',
        required:true
    },    
    LUONG:{
        type:Number,
        required:true
    }
})
LuongSchema.plugin(uniqueValidator);
const Luong = mongoose.model('Luong',LuongSchema);
module.exports = Luong;