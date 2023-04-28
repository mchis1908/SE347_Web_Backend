const BaoCaoSPThangController = require('../controllers/BaoCaoSPThangController');
const router = require('express').Router()

router.post('/themBaoCaoSPThang', BaoCaoSPThangController.DangKyBaoCaoSPThang);
router.get('/getBaoCaoSPThang/:month', BaoCaoSPThangController.GetBaoCaoSPThangbyMonth)
router.patch('/updateBaoCaoSPThang/:tg', BaoCaoSPThangController.UpdateBaoCaoSPThang)

module.exports = router