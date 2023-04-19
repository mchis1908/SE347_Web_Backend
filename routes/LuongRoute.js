const LuongController = require('../controllers/LuongController');
const router = require('express').Router()

router.post('/themluong', LuongController.DangKyLuong);
router.get('/getluong', LuongController.GetLuong)
router.delete('/deleteluong/:id', LuongController.DeleteLuong)
router.patch('/updateluong/:id', LuongController.UpdateLuong)
router.get('/search/:key', LuongController.SearchLuong);

module.exports = router