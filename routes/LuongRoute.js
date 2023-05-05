const LuongController = require('../controllers/LuongController');
const router = require('express').Router()

router.post('/themLuong', LuongController.DangKyLuong);
router.get('/getLuongbyTG/:tg', LuongController.GetLuongbyThoiGian)
router.patch('/updateLuong/:tg', LuongController.UpdateLuong)

module.exports = router