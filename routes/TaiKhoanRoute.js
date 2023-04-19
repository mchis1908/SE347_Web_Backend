const TaiKhoanController = require('../controllers/TaiKhoanController');
const router = require('express').Router()

router.post('/dangky', TaiKhoanController.DangKyTaiKhoan);
router.get('/gettaikhoan', TaiKhoanController.GetTaiKhoan)
router.delete('/deletetaikhoan/:id', TaiKhoanController.DeleteTaiKhoan)
router.patch('/updatetaikhoan/:id', TaiKhoanController.UpdateTaiKhoan)
router.get('/search/:key', TaiKhoanController.SearchTaiKhoan);


module.exports = router