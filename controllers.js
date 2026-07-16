const express = require("express");

const helloguys = require("../services/authServices.js");

const hello = (req, res) => {
  const data = helloguys();
  res.send(data);
};


module.exports = hello;
