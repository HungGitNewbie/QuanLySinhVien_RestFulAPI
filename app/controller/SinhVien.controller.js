const SinhVien = require('../model/SinhVien.model');

module.exports = {
    getAllSinhVien: (req, res) => {
        SinhVien.getAllSinhVien((result) => {
            res.json({
                status: 1,
                message: 'Lấy danh sách sinh viên thành công',
                data: result
            });
        });
    },
    getByMaSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        SinhVien.getByMaSinhVien(masinhvien, (result) => {
            // if (err) {
            //     console.error(err);
            //     return res.status(500).json({ error: 'Lỗi server khi lấy dữ liệu' });
            // }
            if (result.length === 0) {
                return res.status(404).json({
                    status: 0,
                    message: 'Sinh viên không tìm thấy'
                });
            }
            res.json({
                status: 1,
                message: 'Lấy sinh viên thành công',
                data: result[0]
            });
        });
    },
    getByMaLop: (req, res) => {
        const malop = req.params.malop;
        SinhVien.getByMaLop(malop, (result) => {
            res.json({
                status: 1,
                message: 'Lấy danh sách sinh viên theo lớp thành công',
                data: result
            });
        });
    },
    addSinhVien: (req, res) => {
        const sinhVien = req.body;
        SinhVien.addSinhVien(sinhVien, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi khi thêm sinh viên'
                });
            }
            res.json({
                status: 1,
                message: 'Sinh viên đã được thêm thành công'
            });
        });
    },
    updateSinhVien: (req, res) => {
        const masinhvien = req.body.MaSinhVien;
        const sinhVien = req.body;
        SinhVien.updateSinhVien(masinhvien, sinhVien, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi khi cập nhật sinh viên'
                });
            }
            res.json({
                status: 1,
                message: 'Sinh viên đã được cập nhật thành công'
            });
        });
    },
    deleteSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        SinhVien.deleteSinhVien(masinhvien, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi khi xóa sinh viên'
                });
            }
            res.json({
                status: 1,
                message: 'Sinh viên đã được xóa thành công'
            });
        });
    }
};
