const BaoCaoSPNgayController = require('../controllers/BaoCaoSPNgayController');
const router = require('express').Router()

router.post('/themBaoCaoSPNgay', BaoCaoSPNgayController.DangKyBaoCaoSPNgay);
router.get('/getBaoCaoSPNgay', BaoCaoSPNgayController.GetBaoCaoSPNgay)
router.get('/getBaoCaoSPNgay/:day', BaoCaoSPNgayController.GetBaoCaoSPNgaybyDay)
router.get('/getBaoCaoSPNgaybymonth/:year/:month', BaoCaoSPNgayController.GetBaoCaoSPNgaybyMonth)
router.patch('/updateBaoCaoSPNgay/:tg', BaoCaoSPNgayController.UpdateBaoCaoSPNgay)

module.exports = router