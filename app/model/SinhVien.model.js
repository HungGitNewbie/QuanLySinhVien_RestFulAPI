const db = require('../connect/connect.js');

const SinhVien = (sinhvien) => {

};

SinhVien.getByMaSinhVien = (msv, callback) =>{
    const sqlString = 'SELECT * FROM SinhVien WHERE MaSinhVien = ?';
    db.query(sqlString, [msv], (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};


SinhVien.getByMaLop = (malop, callback) =>{
    const sqlString = 'SELECT * FROM SinhVien WHERE MaLop = ?';
    db.query(sqlString, malop, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

SinhVien.getAllSinhVien = (callback) => {
    const sqlString = 'SELECT * FROM SinhVien';
    db.query(sqlString, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

SinhVien.addSinhVien = (sinhvien, callback) => {
    const sqlString = 'INSERT INTO SinhVien SET ?';
    db.query(sqlString, sinhvien, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

SinhVien.updateSinhVien = (msv, sinhvien, callback) => {
    const sqlString = 'UPDATE SinhVien SET ? WHERE MaSinhVien =?';
    db.query(sqlString, [sinhvien, msv], (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

SinhVien.deleteSinhVien = (id, callback) => {
    const sqlString = 'DELETE FROM SinhVien WHERE MaSinhVien = ?';
    db.query(sqlString, id, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = SinhVien;


