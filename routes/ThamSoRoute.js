const ThamSoController = require("../controllers/ThamSoController");
const router = require('express').Router()

router.post('/dangky', ThamSoController.DangKyThamSo);
router.get('/getthamso/:ts', ThamSoController.get_ThamSo_bytents);
router.patch('/updatethamso/:ts', ThamSoController.update_ThamSo);

module.exports = router;
