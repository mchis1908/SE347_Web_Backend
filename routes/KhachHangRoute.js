const KhachHangController = require('../controllers/KhachHangController');
const router = require('express').Router()

router.post('/themkhachhang', KhachHangController.DangKyKhachHang);
router.get('/getkhachhang', KhachHangController.GetKhachHang)
router.delete('/deletekhachhang/:sdt', KhachHangController.DeleteKhachHang)
router.patch('/updatekhachhang/:sdt', KhachHangController.UpdateKhachHang)
router.get('/searchkhachhang/:sdt', KhachHangController.SearchKhachHang);

module.exports = router