const router = require('express').Router();
const lopSinhHoatcontroller = require('../controller/LopSinhHoat.controller');

router.get("/LopSinhHoat", lopSinhHoatcontroller.getAllLopSinhHoat);
router.post("/LopSinhHoat", lopSinhHoatcontroller.addLopSinhHoat);
router.put("/LopSinhHoat", lopSinhHoatcontroller.updateLopSinhHoat);
router.delete("/LopSinhHoat/:id", lopSinhHoatcontroller.deleteLopSinhHoat);

module.exports = router;
