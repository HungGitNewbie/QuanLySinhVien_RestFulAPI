const LopSinhHoat = require('../model/LopSinhHoat.model');

module.exports = {
    getAllLopSinhHoat: (req, res) => {
        LopSinhHoat.getAllLopSinhHoat((err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy danh sách lớp sinh hoạt',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy danh sách lớp sinh hoạt thành công',
                data: result
            });
        });
    },

    addLopSinhHoat: (req, res) => {
        const lop = req.body;
        LopSinhHoat.addLopSinhHoat(lop, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi thêm lớp sinh hoạt',
                });
            }
            res.json({
                status: 1,
                message: 'Lớp sinh hoạt đã được thêm thành công',
            });
        });
    },

    updateLopSinhHoat: (req, res) => {
        const malop = req.body.MaLop;
        const lop = req.body;
        LopSinhHoat.updateLopSinhHoat(malop, lop, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi cập nhật lớp sinh hoạt',
                });
            }
            res.json({
                status: 1,
                message: 'Lớp sinh hoạt đã được cập nhật thành công',
            });
        });
    },

    deleteLopSinhHoat: (req, res) => {
        const malop = req.params.id;
        LopSinhHoat.deleteLopSinhHoat(malop, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi xóa lớp sinh hoạt',
                });
            }
            res.json({
                status: 1,
                message: 'Lớp sinh hoạt đã được xóa thành công',
            });
        });
    }
};
