const HoaDonController = require('../controllers/HoaDonController');
const router = require('express').Router()

router.post('/themhoadon', HoaDonController.DangKyHoaDon);
router.get('/gethoadon', HoaDonController.GetHoaDon)
router.get('/gethoadon/:maHD', HoaDonController.GetHoaDon_bymahd)
router.get('/gethoadonbanhangbytg/:tg', HoaDonController.GetHoaDonBanHang_bythoigian)
router.delete('/deletehoadon/:id', HoaDonController.DeleteHoaDon)
router.patch('/updatehoadon/:maHD', HoaDonController.UpdateHoaDon)
router.get('/searchhoadon/:mahd', HoaDonController.SearchHoaDon);
router.patch('/updatehoadon1', HoaDonController.UpdateHoaDon1)

module.exports = router