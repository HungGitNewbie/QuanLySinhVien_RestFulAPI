const LopSinhHoat = require('../model/LopSinhHoat.model');

module.exports = {
    getAllLopSinhHoat: (req, res) => {
        LopSinhHoat.getAllLopSinhHoat((result) => {
            res.json(result);
        });
    },

    addLopSinhHoat: (req, res) => {
        const lop = req.body;
        LopSinhHoat.addLopSinhHoat(lop, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Lớp sinh hoạt đã được thêm' });
        });
    },
    updateLopSinhHoat: (req, res) => {
        const malop = req.body.MaLop;
        const lop = req.body;
        LopSinhHoat.updateLopSinhHoat(malop, lop, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Lớp sinh hoạt đã được cập nhật' });
        });
    },
    deleteLopSinhHoat: (req, res) => {
        const malop = req.params.id;
        LopSinhHoat.deleteLopSinhHoat(malop, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Lớp sinh hoạt đã được xóa' });
        });
    }
};
