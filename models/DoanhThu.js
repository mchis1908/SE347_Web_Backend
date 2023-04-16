const mongoose = require('mongoose')

const DoanhThuSchema = mongoose.Schema({
    THOIGIAN: {
        type:String,
        required:true
    },
    TONGLUONG: {
        type: Number,
        required: true
    },
    DoanhThuSP: {
        type: Number,
        required: true
    },
})

const DoanhThu = mongoose.model('DoanhThu',DoanhThuSchema);
module.exports = DoanhThu;