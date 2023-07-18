const User = require("../models/userModel");



const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email: email});
    if (!findUser) {
        // Membuat User Baru
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // User yang Sudah ada
        res.json({
            msg: "User Sudah Ada",
            success: false,
        });
    }
};

module.exports = { createUser };