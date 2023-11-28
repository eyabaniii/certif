const express = require("express");
const connect = require("./connectDB");
const cors = require("cors");
// create instance
const app = express();
// midlware
app.use(express.json()); //teste le requiste de user  si  le elle passer ou nn et return le respense
// require dotnev
app.use(cors());
require("dotenv").config();
//connecting   to bd
connect();
//create port
const PORT = process.env.PORT;
//create server

// require routes
app.use("/api/product", require("./Routes/ProductRoutes"));
app.use("/api/user", require("./Routes/UserRoutes"));
app.use("/api/cart", require("./Routes/CartRoutes"));
app.use("/api/order", require("./Routes/OrderRoutes"));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server in running on port ${PORT}`);
});
