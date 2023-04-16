const mongoose = require('mongoose')
const JsBarcode = require('jsbarcode');

const HoaDonSchema = mongoose.Schema({
    MAHOADON: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    BARCODEHOADON: {
        type: String,
        required:true,
        unique:true
    },
    KHACHHANG: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'KhachHang',
        required: true
    },
    ITEMS: [{
        MASANPHAM: {
            type:String,
            ref:'SanPham',
            required:true
        },
        BARCODESANPHAM: {
            type: String,
            ref:'SanPham',
            required: true,
            unique: true,
        },
        QUANTITY: {
            type: Number,
            required: true
        },
        PRICE: {
            type: Number,
            required: true
        }
    }],
    SOLUONG: {
        type: Number,
        required: true,
        default:0
    },
    LOAI: {
        type: String,
        required: true,
    },
    TRANGTHAI: {
        type: String,
        required: true,
    },
    NGAYTAODON: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });


HoaDonSchema.pre('save', function (next) {
    // Sử dụng JsBarcode để tạo mã vạch từ số hóa đơn
    JsBarcode(this.MAHOADON, {
      format: "EAN13",
      displayValue: false
    }, (err, url) => {
      if (err) return next(err);
      this.BARCODEHOADON = url;
      next();
    });
  });


const HoaDon = mongoose.model('HoaDon',HoaDonSchema);
module.exports = HoaDon;