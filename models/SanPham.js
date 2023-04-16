const mongoose = require('mongoose')

const SanPhamSchema = mongoose.Schema({
    MASANPHAM: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique: true
    },
    BARCODESANPHAM: {
        type: String,
        required: true,
        unique: true,
    },
    KHACHHANG: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'KhachHang',
        required: true
    },
    MAHOADON: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'HoaDon',
        required:true
    },
    BARCODEHOADON: {
        type: String,
        ref:'HoaDon',
        required: true,
        unique: true,
    },
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
    HINHANH: {
        type: String,
        required: true,
    },
    
});

SanPhamSchema.pre('save', function (next) {
    // Sử dụng JsBarcode để tạo mã vạch từ số hóa đơn
    JsBarcode(this.MASANPHAM, {
      format: "EAN13",
      displayValue: false
    }, (err, url) => {
      if (err) return next(err);
      this.BARCODESANPHAM = url;
      next();
    });
  });

const SanPham = mongoose.model('SanPham',SanPhamSchema);
module.exports = SanPham;