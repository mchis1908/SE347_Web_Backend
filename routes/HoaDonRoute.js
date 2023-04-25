const HoaDonController = require('../controllers/HoaDonController');
const router = require('express').Router()

router.post('/themhoadon', HoaDonController.DangKyHoaDon);
router.get('/gethoadon', HoaDonController.GetHoaDon)
router.get('/gethoadon/:maHD', HoaDonController.GetHoaDon_bymahd)
router.delete('/deletehoadon/:id', HoaDonController.DeleteHoaDon)
router.patch('/updatehoadon/:maHD', HoaDonController.UpdateHoaDon)
router.get('/search/:key', HoaDonController.SearchHoaDon);

module.exports = router