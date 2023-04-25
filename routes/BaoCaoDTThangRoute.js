const BaoCaoDTThangController = require('../controllers/BaoCaoDTThangController');
const router = require('express').Router()

router.post('/themBaoCaoDTThang', BaoCaoDTThangController.DangKyBaoCaoDTThang);
router.get('/getBaoCaoDTThang', BaoCaoDTThangController.GetBaoCaoDTThang)
router.patch('/updateBaoCaoDTThang/:id', BaoCaoDTThangController.UpdateBaoCaoDTThang)

module.exports = router