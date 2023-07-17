const User = require("../models/useModel");



const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne(email);
    if (!findUser) {
        // Membuat User Baru
        const newUser = User.create(req.body);
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