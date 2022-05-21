const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const adminSchema = new Schema(
     {
         email: { type:String},
         password: { type:String},
         status : {type:Number},
     },
     {
        timestamps:true,
     }
 );

 module.exports = mongoose.model("Admin", adminSchema, "admin");