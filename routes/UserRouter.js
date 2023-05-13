const express = require("express");
const UserRouter = express.Router();

const { register } = require("../controllers/UserController");

UserRouter.post("/register", register);
