const UserModel = require("../models/UserModel");

const register = async(req, res) => {
    const { username, password, email } = req.body;
    let userobj = {
        username: username,
        password: password,
        email: email,
    };

    UserModel.find({ email }).then((data) => {
        if(data.length == 0) {
            UserModel(userobj).save()
                .then((data) => 
                    res.send({message: "User registration successful!...", data})
                )
        }else {
            res.json({messgae: "User with email already exists !..."})
        }
    });
};

const userLogin = async(req, res) => {
    UserModel.find({ username: req.params.username }).then((data) => {

    })
};

module.exports = {
    register
}