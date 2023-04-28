const BaoCaoSPNgayController = require('../controllers/BaoCaoSPNgayController');
const router = require('express').Router()

router.post('/themBaoCaoSPNgay', BaoCaoSPNgayController.DangKyBaoCaoSPNgay);
router.get('/getBaoCaoSPNgay/:day', BaoCaoSPNgayController.GetBaoCaoSPNgaybyDay)
router.get('/getBaoCaoSPNgaybyMMYY/:mmyy', BaoCaoSPNgayController.GetBaoCaoSPNgaybyMMYY)
router.patch('/updateBaoCaoSPNgay/:tg', BaoCaoSPNgayController.UpdateBaoCaoSPNgay)

module.exports = router