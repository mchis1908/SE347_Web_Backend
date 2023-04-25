const SanPhamController = require('../controllers/SanPhamController');
const router = require('express').Router()
const upload = require("../models/middleware/uploadImage");

router.post('/themsanpham', upload.single("HINHANH"), SanPhamController.DangKySanPham);
router.get('/getsanpham', SanPhamController.GetSanPham)
router.get('/getsanpham/:maSP', SanPhamController.GetSanPhambyMaSanPham)
router.get('/getsanphambymakygui/:maHD', SanPhamController.GetSanPhambyMaKyGui)
router.get('/getsanphambymabanhang/:maHD', SanPhamController.GetSanPhambyMaBanHang)
router.delete('/deletesanphambymahd/:maHD', SanPhamController.DeleteSanPhambymaHD)
router.patch('/updatesanpham/:maSP', SanPhamController.UpdateSanPham)
router.patch('/updatesanphambymahd/:maHD', SanPhamController.UpdateSanPhambyMaHDKG)
router.get('/search/:key', SanPhamController.SearchSanPham);

module.exports = router