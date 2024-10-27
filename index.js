const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const LopSinhHoatRouter = require('./app/router/LopSinhHoat.router');
app.use('/', LopSinhHoatRouter);
const SinhVienRouter = require('./app/router/SinhVien.router');
app.use('/', SinhVienRouter);
const MonHocRouter = require('./app/router/MonHoc.router');
app.use('/', MonHocRouter);
const DiemThiRouter = require('./app/router/DiemThi.router');
app.use('/', DiemThiRouter);


app.listen(port, function(){
    console.log("RESTful API server started on: " + port);
});

