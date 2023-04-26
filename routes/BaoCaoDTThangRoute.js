const BaoCaoDTThangController = require('../controllers/BaoCaoDTThangController');
const router = require('express').Router()

router.post('/themBaoCaoDTThang', BaoCaoDTThangController.DangKyBaoCaoDTThang);
router.get('/getBaoCaoDTThang', BaoCaoDTThangController.GetBaoCaoDTThang)
router.get('/getBaoCaoDTThang/:day', BaoCaoDTThangController.GetBaoCaoDTThangbyDay)
router.patch('/updateBaoCaoDTThang/:tg', BaoCaoDTThangController.UpdateBaoCaoDTThang)

module.exports = router