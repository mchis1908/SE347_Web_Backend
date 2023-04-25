const BaoCaoHDNgayController = require('../controllers/BaoCaoHDNgayController');
const router = require('express').Router()

router.post('/themBaoCaoHDNgay', BaoCaoHDNgayController.DangKyBaoCaoHDNgay);
router.get('/getBaoCaoHDNgay', BaoCaoHDNgayController.GetBaoCaoHDNgay)
router.patch('/updateBaoCaoHDNgay/:id', BaoCaoHDNgayController.UpdateBaoCaoHDNgay)

module.exports = router