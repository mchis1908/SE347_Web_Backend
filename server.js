const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const DoanhThuRoute = require("./routes/DoanhThuRoute");
const HoaDonRoute = require("./routes/HoaDonRoute");
const KhachHangRoute = require("./routes/KhachHangRoute");
const LuongRoute = require("./routes/LuongRoute");
const NhanVienRoute = require("./routes/NhanVienRoute");
const SanPhamRoute = require("./routes/SanPhamRoute");
const TaiKhoanRoute = require("./routes/TaiKhoanRoute");
const ThamSoRoute = require("./routes/ThamSoRoute");
const BaoCaoDTThangRoute = require("./routes/BaoCaoDTThangRoute");
const BaoCaoHDNgayRoute = require("./routes/BaoCaoHDNgayRoute");
const BaoCaoSPNhanBanRoute = require("./routes/BaoCaoSPNhanBanRoute");

const app = express();
mongoose.connect('mongodb+srv://MinhChis19:Mhchi1908@cluster0.xqsjeav.mongodb.net/planB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!");
}).catch(err => {
  console.log("Connection failed: " + err);
});

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());


// app.use("/v1/doanhthu", DoanhThuRoute);
app.use("/v1/hoadon", HoaDonRoute);
app.use("/v1/khachhang", KhachHangRoute);
app.use("/v1/luong", LuongRoute);
app.use("/v1/nhanvien", NhanVienRoute);
app.use("/v1/sanpham", SanPhamRoute);
app.use("/v1/taikhoan", TaiKhoanRoute);
app.use("/v1/thamso", ThamSoRoute);
app.use("/v1/baocaodtthang", BaoCaoDTThangRoute);
app.use("/v1/baocaohdngay", BaoCaoHDNgayRoute);
app.use("/v1/baocaospnhanban", BaoCaoSPNhanBanRoute);

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});