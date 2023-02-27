const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://farrukhadeel:pps993icp956@cluster0.ysuiv.mongodb.net/workshop")
    .then(result => {
        console.log("Database connected Successfully!"); // this is for connection with database
    }).catch(err => {
        console.log(err)
    })