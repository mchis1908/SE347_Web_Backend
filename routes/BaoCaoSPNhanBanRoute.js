const BaoCaoSPNhanBanController = require('../controllers/BaoCaoSPNhanBanController');
const router = require('express').Router()

router.post('/themBaoCaoSPNhanBan', BaoCaoSPNhanBanController.DangKyBaoCaoSPNhanBan);
router.get('/getBaoCaoSPNhanBan', BaoCaoSPNhanBanController.GetBaoCaoSPNhanBan)
router.patch('/updateBaoCaoSPNhanBan/:id', BaoCaoSPNhanBanController.UpdateBaoCaoSPNhanBan)

module.exports = router