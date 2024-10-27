const db = require('../connect/connect.js');

const MonHoc = (monhoc) => {
};

MonHoc.getByMaMonHoc = (mamon, callback) => {
    const sqlString = 'SELECT * FROM MonHoc WHERE MaMonHoc = ?';
    db.query(sqlString, [mamon], (err, result) => {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

MonHoc.getAllMonHoc = (callback) => {
    const sqlString = 'SELECT * FROM MonHoc';
    db.query(sqlString, (err, result) => {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

MonHoc.addMonHoc = (monhoc, callback) => {
    const sqlString = 'INSERT INTO MonHoc SET ?';
    db.query(sqlString, monhoc, (err, result) => {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

MonHoc.updateMonHoc = (mamon, monhoc, callback) => {
    const sqlString = 'UPDATE MonHoc SET? WHERE MaMonHoc =?';
    db.query(sqlString, [monhoc, mamon], (err, result) => {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

MonHoc.deleteMonHoc = (mamon, callback) => {
    const sqlString = 'DELETE FROM MonHoc WHERE MaMonHoc =?';
    db.query(sqlString, [mamon], (err, result) => {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};

module.exports = MonHoc;
