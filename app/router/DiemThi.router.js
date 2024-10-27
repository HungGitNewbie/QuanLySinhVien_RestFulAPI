const router = require('express').Router();
const diemThiController = require('../controller/DiemThi.controller');

router.get('/diemthi', diemThiController.getAllDiemThi);
router.get('/diemthi/:msv', diemThiController.getByMaSinhVien);
router.get('/diemthi/mamon/:mamon', diemThiController.getByMaMonHoc);
router.post('/diemthi', diemThiController.addDiemThi);
router.put('/diemthi', diemThiController.updateDiemThi);
router.delete('/diemthi', diemThiController.deleteDiemThi);

module.exports = router;