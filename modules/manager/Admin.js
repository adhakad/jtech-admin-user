'use strict';
const UserModel = require("../models/Users");
const md5 = require("md5");
const BadRequestError = require("../errors/badRequestError");

let addUser = async (req,res) => {
    const { body } = req;
    ["email", "password"].forEach((x) => {
        if(!body[x]) {
            throw new BadRequestError(x, "is required");
        }
    });
    
    let user = await UserModel.findOne({ email:body.email });
    if (user) {
        return res.status(400).json({
          status: 400,
          message: "user already exists",
        });
      }


    let createData = {
        name: body.name,
        email:body.email,
        password:md5(body.password),
        status:0,
    }

    try{
        const d = await UserModel.create(createData);
        return d;

    }catch(error){
        console.log(error);
    }
}


let getUsers = async () => {
    let users = await UserModel.find({});
      let userList = users.map((user) => {
        return user;
      });
    return userList;
}

let active = async (id) => {
    let users = await UserModel.findByIdAndUpdate(id,{status:0});
    let Allusers = await UserModel.find({});
      let userList = Allusers.map((user) => {
        return user;
      });
    return userList;
}

let inactive = async (id) => {
  let users = await UserModel.findByIdAndUpdate(id,{status:1});
  let Allusers = await UserModel.find({});
    let userList = Allusers.map((user) => {
      return user;
    });
  return userList;
}



module.exports = {
    addUser,
    getUsers,
    active,
    inactive,
}