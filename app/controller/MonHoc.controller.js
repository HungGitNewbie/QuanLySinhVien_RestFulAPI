const MonHoc = require('../model/MonHoc.model');

module.exports  = {
    getAllMonHoc: (req, res) => {
        MonHoc.getAllMonHoc((result) => {
            res.json(result);
        });
    },
    getByMaMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        MonHoc.getByMaMonHoc(mamon, (result) => {
            res.json(result);
        });
    },
    addMonHoc: (req, res) => {
        const monhoc = req.body;
        MonHoc.addMonHoc(monhoc, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Môn học đã được thêm' });
        });
    },
    updateMonHoc: (req, res) => {
        const mamon = req.body.MaMonHoc;
        const monhoc = req.body;
        MonHoc.updateMonHoc(mamon, monhoc, (err, result) => {
            if (err) console.error(err);;
            res.json({ message: 'Môn học đã được cập nhật' });
        });
    },
    deleteMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        MonHoc.deleteMonHoc(mamon, (err, result) => {
            if (err) throw err;
            res.json({ message: 'Môn học đã được xóa' });
        });
    }
}
