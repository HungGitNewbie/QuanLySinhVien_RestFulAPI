const SinhVien = require('../model/SinhVien.model');

module.exports = {
    getAllSinhVien: (req, res) => {
        SinhVien.getAllSinhVien((result) => {
            res.json(result);
        });
    },
    getByMaSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        SinhVien.getByMaSinhVien(masinhvien, (result) => {
            if (result.length === 0) {
                return res.status(404).json({ message: 'Sinh viên không tìm thấy' });
            }
            res.json(result[0]);
        });
    },
    getByMaLop: (req, res) => {
        const malop = req.params.malop;
        SinhVien.getByMaLop(malop, (result) => {
            res.json(result);
        });
    },
    addSinhVien: (req, res) => {
        const sinhVien = req.body;
        SinhVien.addSinhVien(sinhVien, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Sinh viên đã được thêm' });
        });
    },
    updateSinhVien: (req, res) => {
        const masinhvien = req.body.MaSinhVien;
        const sinhVien = req.body;
        SinhVien.updateSinhVien(masinhvien, sinhVien, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Sinh viên đã được cập nhật' });
        });
    },
    deleteSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        SinhVien.deleteSinhVien(masinhvien, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Sinh viên đã được xóa' });
        });
    }
};