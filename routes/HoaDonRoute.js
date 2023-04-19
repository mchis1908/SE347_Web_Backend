const HoaDonController = require('../controllers/HoaDonController');
const router = require('express').Router()

router.post('/themhoadon', HoaDonController.DangKyHoaDon);
router.get('/gethoadon', HoaDonController.GetHoaDon)
router.delete('/deletehoadon/:id', HoaDonController.DeleteHoaDon)
router.patch('/updatehoadon/:id', HoaDonController.UpdateHoaDon)
router.get('/search/:key', HoaDonController.SearchHoaDon);

module.exports = router