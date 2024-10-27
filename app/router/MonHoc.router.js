const router = require('express').Router();
const monHoccontroller = require('../controller/MonHoc.controller');

router.get('/monhoc', monHoccontroller.getAllMonHoc);
router.get('/monhoc/:mamon', monHoccontroller.getByMaMonHoc);
router.post('/monhoc', monHoccontroller.addMonHoc);
router.put('/monhoc', monHoccontroller.updateMonHoc);
router.delete('/monhoc/:mamon', monHoccontroller.deleteMonHoc);

module.exports = router;