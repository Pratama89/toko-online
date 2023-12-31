const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await User.findOne({email: email});
        if (!findUser) {
            // Membuat User Baru
            const newUser = await User.create(req.body);
            res.json(newUser);
        } else {
            // User Sudah ada
            throw new Error("User Sudah Ada");
        }
    
        // const newUser = await User.create(req.body);
        //     res.json(newUser);
    }
);

const loginUserCtrl = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
});

module.exports = { createUser, loginUserCtrl };