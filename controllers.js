const express = require("express");

const {registerUser} = require("services.js");


const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const user = await registerUser(name, email, password);

        res.status(201).json({
            "success": true,
            "data": user
        })

    } catch (error) {
        next(error);
    }
}


module.exports = { register, registerUser};
