const SanPhamController = require('../controllers/SanPhamController');
const router = require('express').Router()
const upload = require("../models/middleware/uploadImage");

router.post('/themsanpham', upload.single("HINHANH"), SanPhamController.DangKySanPham);
router.get('/getsanpham', SanPhamController.GetSanPham)
router.get('/getsanpham/:maSP', SanPhamController.GetSanPhambyMaSanPham)
router.get('/getsanphambytrangthai/:trangthai', SanPhamController.GetSanPhamByTrangThai)
router.get('/getsanphambymakygui/:maHD', SanPhamController.GetSanPhambyMaKyGui)
router.get('/getsanphambymabanhang/:maHD', SanPhamController.GetSanPhambyMaBanHang)
router.delete('/deletesanphambymahdkg/:maHD', SanPhamController.DeleteSanPhambymaHDKG)
router.delete('/deletesanphambymasp/:maSP', SanPhamController.DeleteSanPhambymaSP)
router.patch('/updatesanpham/:maSP', SanPhamController.UpdateSanPham)
router.patch('/updatesanphambymahd/:maHD', SanPhamController.UpdateSanPhambyMaHDKG)
router.get('/searchsanpham/:masp', SanPhamController.SearchSanPham);

module.exports = router