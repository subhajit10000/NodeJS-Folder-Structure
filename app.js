const express = require("express");
const router= require("./routes/auth.routes.js")
const app = express();

app.use(express.json());

app.use("/auth/route", router)



module.exports = app;
