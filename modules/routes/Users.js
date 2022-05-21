'use strict';
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");

router.get("/", (req,res) => {
    res.render("user-login");
});

router.post("/", UserController.userLogin);

router.get("/getUsers",UserController.getUsers);

module.exports = router;