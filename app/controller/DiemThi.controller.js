const DiemThi = require('../model/DiemThi.model');

module.exports = {
    getAllDiemThi: (req, res) => {
        DiemThi.getAllDiemThi((result) => {
            res.json(result);
        });
    },
    getByMaSinhVien: (req, res) => {
        const masinhvien = req.params.msv;
        DiemThi.getByMaSinhVien(masinhvien, (err, result) => {
            if(err){
                console.error(err);
                return res.status(500).json({ error: 'Lỗi server khi lấy dữ liệu' });
            }
            res.json(result);
        });
    },
    getByMaMonHoc: (req, res) => {
        const mamon = req.params.mamon;
        DiemThi.getByMaMonHoc(mamon, (err, result) => {
            if(err){
                console.error(err);
                return res.status(500).json({ error: 'Lỗi server khi lấy dữ liệu' });
            }
            res.json(result);
        });
    },
    addDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.addDiemThi(diemthi, (err, result) => {
            if (err){
                console.error(err);
                return res.status(400).json({ error: 'Hãy kiểm tra lại data vì có thể bạn đã nhập mã sinh viên hoặc mã môn chưa tồn tại' });
            } 
            res.json({ message: 'Điểm thi đã được thêm' });
        });
    },
    updateDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.updateDiemThi(diemthi, (err, result) => {
            if (err){
                console.error(err);
                return res.status(400).json({ error: 'Invalid data' });
            }
            res.json({ message: 'Điểm thi đã được cập nhật' });
        });
    },
    deleteDiemThi: (req, res) => {
        const diemthi = req.body;
        DiemThi.deleteDiemThi(diemthi, (err, result) => {
            if (err){
                console.error(err);
                return res.status(400).json({ error: 'Invalid data' });
            }
            res.json({ message: 'Điểm thi đã được xóa' });
        });
    }
}