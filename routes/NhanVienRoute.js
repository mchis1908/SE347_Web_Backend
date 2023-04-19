const NhanVienController = require('../controllers/NhanVienController');
const router = require('express').Router()

router.post('/themnhanvien', NhanVienController.DangKyNhanVien);
router.get('/getnhanvien', NhanVienController.GetNhanVien)
router.delete('/deletenhanvien/:id', NhanVienController.DeleteNhanVien)
router.patch('/updatenhanvien/:id', NhanVienController.UpdateNhanVien)
router.get('/search/:key', NhanVienController.SearchNhanVien);

module.exports = router