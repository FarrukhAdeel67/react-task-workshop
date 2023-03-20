const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const Users = require("../models/user");
module.exports = {
    signUp: async(req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                throw { status: 412, messge: "required field cannot be empty" };
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new Users({
                _id: mongoose.Types.ObjectId(),
                name,
                email,
                password: hashedPassword,
            });
            await user.save();
            res.status(200).send({ createdUser: user });
        } catch (err) {
            console.log(err);
            res.status(err.message || 500).message("Something went wrong");
        }
    },
    logIn: async(req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw { status: 412, messge: "required field cannot be empty" };
            }
            let user = await Users.findOne({
                email,
            });
            if (!user) {
                throw { status: 404, message: "User does not exist." };
            }
            const result = await bcrypt.compare(password, user.password);
            if (!result) {
                throw { status: 401, message: "Incorrect Password" };
            }
            user = user.toJSON();
            delete user.password;
            const token = jwt.sign({ user }, "jwt-secret");
            res.status(200).send({ user, token });
        } catch (err) {
            console.log(err);
            return res
                .status(err.status || 500)
                .send(err.message || "Something went wrong!");
        }
    },
    getAll: async(req, res) => {
        try {
            const users = await Users.find();
            res.status(200).send({ users });
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    }
};