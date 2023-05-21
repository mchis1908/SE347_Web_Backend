const TaiKhoanController = require('../controllers/TaiKhoanController');
const router = require('express').Router()

router.post('/dangky', TaiKhoanController.DangKyTaiKhoan);
router.get('/gettaikhoan', TaiKhoanController.GetTaiKhoan)
router.delete('/deletetaikhoan/:sdt', TaiKhoanController.DeleteTaiKhoanbySDT)
router.patch('/updatetaikhoan/:sdt', TaiKhoanController.UpdateTaiKhoan)
router.get('/search/:key', TaiKhoanController.SearchTaiKhoan);
router.get('/searchtaikhoan/:sk', TaiKhoanController.SearchTaiKhoanbysk);


module.exports = router