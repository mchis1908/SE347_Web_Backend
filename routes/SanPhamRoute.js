const SanPhamController = require('../controllers/SanPhamController');
const router = require('express').Router()
const upload = require("../models/middleware/uploadImage");

router.post('/themsanpham', upload.single("HINHANH"), SanPhamController.DangKySanPham);
router.get('/getsanpham', SanPhamController.GetSanPham)
router.get('/getaproduct/:maHD', SanPhamController.GetaProduct)
router.delete('/deletesanpham/:id', SanPhamController.DeleteSanPham)
router.patch('/updatesanpham/:id', SanPhamController.UpdateSanPham)
router.patch('/updatesanphambymahd/:maHD', SanPhamController.UpdateSanPhambyMaHD)
router.get('/search/:key', SanPhamController.SearchSanPham);

module.exports = router