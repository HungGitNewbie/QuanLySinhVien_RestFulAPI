const MonHoc = require('../model/MonHoc.model');

module.exports = {
    getAllMonHoc: (req, res) => {
        MonHoc.getAllMonHoc((err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy danh sách môn học',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy danh sách môn học thành công',
                data: result
            });
        });
    },

    getByMaMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        MonHoc.getByMaMonHoc(mamon, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 0,
                    message: 'Lỗi server khi lấy dữ liệu môn học',
                    data: null
                });
            }
            if (result.length === 0) {
                return res.status(404).json({
                    status: 0,
                    message: 'Không tìm thấy môn học với mã này',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Lấy thông tin môn học thành công',
                data: result
            });
        });
    },

    addMonHoc: (req, res) => {
        const monhoc = req.body;
        MonHoc.addMonHoc(monhoc, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi thêm môn học'
                });
            }
            res.json({
                status: 1,
                message: 'Môn học đã được thêm thành công'
            });
        });
    },

    updateMonHoc: (req, res) => {
        const mamon = req.body.MaMonHoc;
        const monhoc = req.body;
        MonHoc.updateMonHoc(mamon, monhoc, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi cập nhật môn học',
                    data: null
                });
            }
            res.json({
                status: 1,
                message: 'Môn học đã được cập nhật thành công'
            });
        });
    },

    deleteMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        MonHoc.deleteMonHoc(mamon, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: 0,
                    message: 'Dữ liệu không hợp lệ hoặc lỗi khi xóa môn học'
                });
            }
            res.json({
                status: 1,
                message: 'Môn học đã được xóa thành công'
            });
        });
    }
};
