const db = require('../connect/connect.js');

const DiemThi = (diemthi) => {};

DiemThi.getAllDiemThi = (callback) => {
    const sqlString = 'SELECT * FROM DiemThi';
    db.query(sqlString, (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.getByMaMonHoc = (mamon, callback) => {
    const sqlString = 'SELECT * FROM DiemThi WHERE MaMonHoc = ?';
    db.query(sqlString, [mamon], (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.getByMaSinhVienAndMaMonHoc = (masinhvien, mamon, callback) => {
    const sqlString = 'SELECT * FROM DiemThi WHERE MaSinhVien =? AND MaMonHoc =?';
    db.query(sqlString, [masinhvien, mamon], (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.getByMaSinhVien = (masinhvien, callback) => {
    const sqlString = 'SELECT * FROM DiemThi WHERE MaSinhVien = ?';
    db.query(sqlString, [masinhvien], (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.addDiemThi = (diemthi, callback) => {
    if (!diemthi.MaSinhVien ||!diemthi.MaMonHoc ||!diemthi.Diem) {
        return callback({ error: 'Invalid data' });
    }
    const sqlString = 'INSERT INTO DiemThi SET?';
    db.query(sqlString, diemthi, (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.updateDiemThi = (diemthi, callback) => {
    if (!diemthi.MaSinhVien ||!diemthi.MaMonHoc ||!diemthi.Diem) {
        return callback({ error: 'Invalid data' });
    }
    // Báo người dùng cập nhật điểm nếu dữ liệu điểm thi đã từng được nhập trước đó
    DiemThi.getByMaSinhVienAndMaMonHoc(diemthi.MaMonHoc, diemthi.MaSinhVien, (err, diem) => {
        if (err) return callback(err);
        if (diem.length > 0) {
            return callback({ error: 'Điểm đã tồn tại' });
        }
        // Nếu điểm chưa tồn tại, thì tiếp tục cập nhật điểm
    });
    const sqlString = 'UPDATE DiemThi SET Diem = ? WHERE MaMonHoc = ? AND MaSinhVien = ?';
    db.query(sqlString, [diemthi.Diem, diemthi.MaMonHoc, diemthi.MaSinhVien], (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

DiemThi.deleteDiemThi = (diemthi, callback) => {
    const sqlString = 'DELETE FROM DiemThi WHERE MaSinhVien = ? AND MaMonHoc = ?';
    db.query(sqlString, [diemthi.MaSinhVien, diemthi.MaMonHoc], (err, result) => {
        if (err) {
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = DiemThi;