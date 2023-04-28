const BaoCaoDTThangController = require('../controllers/BaoCaoDTThangController');
const router = require('express').Router()

router.post('/themBaoCaoDTThang', BaoCaoDTThangController.DangKyBaoCaoDTThang);
router.get('/getBaoCaoDTThang/:day', BaoCaoDTThangController.GetBaoCaoDTThangbyDay)
router.get('/getBaoCaoDTThangbyyear/:year', BaoCaoDTThangController.GetBaoCaoDTThangbyYear)
router.patch('/updateBaoCaoDTThang/:tg', BaoCaoDTThangController.UpdateBaoCaoDTThang)

module.exports = router