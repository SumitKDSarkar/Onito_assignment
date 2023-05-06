// import mongoose  from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Fname: {
        type: String, 
      },
      dobOrAge: {
        type: Number,
      },
      sex: {
        type: String,
        
      },
      email: {
        type: String,
        required: false,
      },
      mobile: {
        type: String,
        required: false,
      },
      emergencyContact: {
        type: String,
        required: false,
      },
      country: {
          type:String
      },
      state: {
          type:String
      },
      religion: {
          type:String
      },
      address: {
          type:String
      },
      pincode: {
          type:String
      },
      city: {
          type:String
      },
      bloodGroup: {
          type:String
      },
      maritalStatus: {
          type:String
      },
      guardianTitle:{
        type:String
      },
      guardianName:{
        type:String
      },
      occupation: {
          type:String
      },
      idType: {
        type: String,
        required: false,
      },
      id: {
        type: String,
        required: false,
      },
      nationality:{
        type:String,
      },
});
const user = mongoose.model("user", userSchema);

module.exports = { user };
