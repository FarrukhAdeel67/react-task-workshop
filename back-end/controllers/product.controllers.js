const mongoose = require("mongoose");
const Products = require("../models/product");

module.exports = {
    post: async(req, res) => {
        try {
            const { title, price, description, category, image } = req.body;

            if (!title || !price || !description || !category || !image) {
                throw { status: 412, message: "Required fields cannot be empty." };
            }
            const product = new Products({
                _id: new mongoose.Types.ObjectId(),
                title,
                price,
                description,
                category,
                image,
            });
            await product.save();

            res.status(200).send({ createdProduct: product });
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    getAll: async(req, res) => {
        try {
            const products = await Products.find();
            res.status(200).send({
                products,
            });
            if (!products) {
                throw { status: 404, message: "Products do not exist..." };
            }
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
    getSingle: async(req, res) => {
        try {
            const { productId } = req.params;
            const product = await Products.findById(productId);
            if (!product) {
                throw { status: 404, message: "Product does not exist..." };
            }
            res.status(200).send({ product });
        } catch (err) {
            console.log(err);
            res.status(500).send("Something went wrong!");
        }
    },
};