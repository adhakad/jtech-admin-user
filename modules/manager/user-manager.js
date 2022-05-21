'use strict';
const UserModel = require("../models/Users");
const md5 = require("md5");
const BadRequestError = require("../errors/badRequestError");

let getUsers = async () => {
    let users = await UserModel.find({});
      let userList = users.map((user) => {
        return user;
      });
    return userList;
}

let userLogin = async (req,res) => {
    const { body } = req;
    ["email", "password"].forEach((x) => {
        if (!body[x]) {
            throw new BadRequestError(x + " is required");
          }
    });
    let user = await UserModel.findOne({email: body.email,password:md5(body.password)});
    if(!user) {
        return res.status(400).json({
            status:400,
            message:"User doesn't exist"
        });
    }

    let userPermission = await UserModel.findOne({email: body.email,password:md5(body.password),status:1});
    if(!userPermission) {
        var abc =  res.status(400).json({
            message:"Permission deny from admin"
        });
        return abc;
    }
    
    let userData = await UserModel.find({});
    return userData;
};

module.exports = {
    userLogin,
    getUsers,
}