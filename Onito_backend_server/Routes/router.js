const express = require("express");
const route = express.Router();
const { user } = require("../Model/User");

// .................get...............
route.get("/getUser", async (req, res) => {
  try {
    const data = await user.find({});

    return res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// const getAllUserDetails = async (req, res) => {
//   try {
//     const allUserDetails = await UserDetail.find({});

//     return res.status(200).send(allUserDetails);
//   } catch (err) {
//     response.status(500).send(err.message);
//   }
// };
// ...............post............
route.post("/user", async (req, res) => {
  try {
    

   

    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
