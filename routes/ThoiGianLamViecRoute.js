const ThoiGianLamViecController = require('../controllers/ThoiGianLamViecController');
const router = require('express').Router()

router.post('/themThoiGianLamViec', ThoiGianLamViecController.DangKyThoiGianLamViec);
router.get('/getThoiGianLamViecbyTG/:tg', ThoiGianLamViecController.GetThoiGianLamViecbyThoiGian)
router.patch('/updateThoiGianLamViec/:tg', ThoiGianLamViecController.UpdateThoiGianLamViec)

module.exports = router