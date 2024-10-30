const DiemThi = require('../model/DiemThi.model');

module.exports = {
    getAllDiemThi: (req, res) => {
        DiemThi.getAllDiemThi((err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy dữ liệu',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy danh sách điểm thi thành công',
                data: result
            });
        });
    },

    getByMaSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        DiemThi.getByMaSinhVien(masinhvien, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy dữ liệu',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy điểm thi theo mã sinh viên thành công',
                data: result
            });
        });
    },

    getByMaMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        DiemThi.getByMaMonHoc(mamon, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy dữ liệu',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy điểm thi theo mã môn học thành công',
                data: result
            });
        });
    },

    addDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.addDiemThi(diemthi, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Hãy kiểm tra lại data vì có thể bạn đã nhập mã sinh viên hoặc mã môn chưa tồn tại'
                });
            }
            res.json({
                status: 1,
                message: 'Điểm thi đã được thêm thành công'
            });
        });
    },

    updateDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.updateDiemThi(diemthi, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ',
                });
            }
            res.json({
                status: 1,
                message: 'Điểm thi đã được cập nhật thành công',
            });
        });
    },

    deleteDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.deleteDiemThi(diemthi, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ',
                });
            }
            res.json({
                status: 1,
                message: 'Điểm thi đã được xóa thành công',
            });
        });
    }
};
