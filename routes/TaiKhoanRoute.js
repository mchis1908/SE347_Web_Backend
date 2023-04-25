const TaiKhoanController = require('../controllers/TaiKhoanController');
const router = require('express').Router()

router.post('/dangky', TaiKhoanController.DangKyTaiKhoan);
router.get('/gettaikhoan', TaiKhoanController.GetTaiKhoan)
router.delete('/deletetaikhoan/:sdt', TaiKhoanController.DeleteTaiKhoanbySDT)
router.patch('/updatetaikhoan/:id', TaiKhoanController.UpdateTaiKhoan)
router.get('/search/:key', TaiKhoanController.SearchTaiKhoan);


module.exports = router