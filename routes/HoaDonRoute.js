const HoaDonController = require('../controllers/HoaDonController');
const router = require('express').Router()

router.post('/themhoadon', HoaDonController.DangKyHoaDon);
router.get('/gethoadon', HoaDonController.GetHoaDon)
router.get('/gethoadon/:maHD', HoaDonController.GetHoaDon_bymahd)
router.get('/gethoadonbanhangbytg/:tg', HoaDonController.GetHoaDonBanHang_bythoigian)
router.get('/gethoadonkyguibytt', HoaDonController.GetHoaDonKyGui_bytrangthai)
router.get('/gethoadonbykhachhang/:sdtKhachHang', HoaDonController.GetHoaDonByKhachHang)
router.get('/gethoadonbykhachhang/:sdtKhachHang/:maHD', HoaDonController.GetHoaDonByMAHDKhachHang)
router.delete('/deletehoadon/:id', HoaDonController.DeleteHoaDon)
router.patch('/updatehoadon/:maHD', HoaDonController.UpdateHoaDon)
router.get('/searchhoadon/:mahd', HoaDonController.SearchHoaDon);

module.exports = router