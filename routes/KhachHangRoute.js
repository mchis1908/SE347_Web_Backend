const KhachHangController = require('../controllers/KhachHangController');
const router = require('express').Router()

router.post('/themkhachhang', KhachHangController.DangKyKhachHang);
router.get('/getkhachhang', KhachHangController.GetKhachHang)
router.delete('/deletekhachhang/:id', KhachHangController.DeleteKhachHang)
router.patch('/updatekhachhang/:sdt', KhachHangController.UpdateKhachHang)
router.get('/search/:key', KhachHangController.SearchKhachHang);

module.exports = router