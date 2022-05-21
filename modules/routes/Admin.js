'use strict';
const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/Admin");

router.get("/", AdminController.getUsers);
router.get("/addUser", (req,res) => {
    res.render("add-user", {message:''});
});
router.get("/active/:id", AdminController.active);
router.get("/inactive/:id",  AdminController.inactive);

router.post("/addUser", AdminController.addUser);





module.exports = router;