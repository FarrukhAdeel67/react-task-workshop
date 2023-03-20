const { Users } = require("../models");
module.exports = async(req, res, next) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            throw { status: 412, mesaage: "user id is required" }
        }
        const user = await Users.findOne({
            _id: userId,
        });
        if (!user) {
            throw { status: 404, message: "User does not exist..." };
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        return res
            .status(err.status || 500)
            .send(err.message || "Something went wrong");
    }
};