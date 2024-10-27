const router = require('express').Router();
const sinhViencontroller = require('../controller/SinhVien.controller');

router.get('/sinhvien', sinhViencontroller.getAllSinhVien);
router.get('/sinhvien/:msv', sinhViencontroller.getByMaSinhVien);
router.get('/sinhvien/malop/:malop', sinhViencontroller.getByMaLop);
router.post('/sinhvien', sinhViencontroller.addSinhVien);
router.put('/sinhvien', sinhViencontroller.updateSinhVien);
router.delete('/sinhvien/:msv', sinhViencontroller.deleteSinhVien);

module.exports = router;