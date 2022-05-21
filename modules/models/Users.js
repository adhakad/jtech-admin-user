const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const userSchema = new Schema(
     {
         name: { type:String},
         email: { type:String},
         password: { type:String},
         status:{type:Number},
     },
     {
        timestamps:true,
     }
 );

 module.exports = mongoose.model("User", userSchema, "users");