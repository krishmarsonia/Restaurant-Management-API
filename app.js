const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require("./routes/products");
const reactQueryRoutes = require("./routes/reactquery");
const testRoutes = require("./routes/testRoutes");
const orderRoutes = require("./routes/order");
const tableRoutes = require("./routes/table");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(productRoutes);
app.use(reactQueryRoutes);
app.use(orderRoutes);
app.use(tableRoutes);
app.use("/test", testRoutes);

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 422;
  const message = error.message;
  const err = new Error(message);
  err.statusCode = status;
  res.status(status).json({error: {message: err.message, statusCode: err.statusCode}});
})

if (mongoose.connection.readyState == 0) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(5050, () => {
        console.log("server running successfully");
      });
    })
    .catch((err) => console.log(err));
}
