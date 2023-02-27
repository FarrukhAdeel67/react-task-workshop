const express = require("express");
const app = express();
const port = 4001;
const router = require("./routes/index");
const cors = require("cors");
app.use(cors());
require("./config/dbConfig");
app.use(
    express.json()
);
app.use("/api", router);
app.listen(port, () => {
    console.log(`
Example app listening on port ${port}!`);
});