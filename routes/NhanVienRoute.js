const NhanVienController = require('../controllers/NhanVienController');
const router = require('express').Router()

router.post('/themnhanvien', NhanVienController.DangKyNhanVien);
router.get('/getnhanvien', NhanVienController.GetNhanVien)
router.get('/getnhanvienbysdt/:sdt', NhanVienController.GetNhanVienbysdt)
router.delete('/deletenhanvien/:sdt', NhanVienController.DeleteNhanVienbySDT)
router.patch('/updatenhanvien/:sdt', NhanVienController.UpdateNhanVien)
router.get('/searchnhanvien/:sk', NhanVienController.SearchNhanVien);

module.exports = router