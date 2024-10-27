const db = require('../connect/connect.js');

const LopSinhHoat = (lopsinhhoat) => {
};

LopSinhHoat.getAllLopSinhHoat = (callback) => {
    const sqlString = 'SELECT * FROM LopSinhHoat';
    db.query(sqlString, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(result);
    });
};


LopSinhHoat.addLopSinhHoat = (lopsinhhoat, callback) => {
    const sqlString = 'INSERT INTO LopSinhHoat SET ?';
    db.query(sqlString, lopsinhhoat, (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result.insertId);
    });
};

LopSinhHoat.updateLopSinhHoat = (malop, lopsinhhoat, callback) => {
    const sqlString = 'UPDATE LopSinhHoat SET ? WHERE MaLop = ?';
    db.query(sqlString, [lopsinhhoat, malop], (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result.affectedRows);
    });
};

LopSinhHoat.deleteLopSinhHoat = (malop, callback) => {
    const sqlString = 'DELETE FROM LopSinhHoat WHERE MaLop = ?';
    db.query(sqlString, [malop], (err, result) =>
    {
        if(err){
            console.error(err);
            return callback(err);
        }
        callback(null, result.affectedRows);
    });
};

module.exports = LopSinhHoat;