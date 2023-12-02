const SuKienController = require('../controllers/SuKienController');
const router = require('express').Router()
const upload = require("../models/middleware/uploadImage");

router.post('/themsukien', upload.single("HINHANH"), SuKienController.DangKySuKien);
router.get('/getsukien', SuKienController.GetAllSuKien);
router.get('/getsukien/:thoigian', SuKienController.GetSuKienByThoiGian);
router.get('/getsukienchuadienra', SuKienController.GetSuKienChuaDienRa);
router.delete('/deletesukien/:maSK', SuKienController.DeleteSuKien);
router.put('/updatesukien/:maSK', upload.single("HINHANH"), SuKienController.UpdateSuKien);

module.exports = router