const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
dbConnect();

app.use('/', (req, res) => {
    res.send("Halo Pharmadent");
});


app.use('app/user', authRouter);
app.listen(PORT, () => {
    console.log(`Server Berjalan pada PORT ${PORT}`);
});