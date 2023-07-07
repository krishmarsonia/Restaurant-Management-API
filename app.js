const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require('./routes/products');
const reactQueryRoutes = require('./routes/reactquery');
const testRoutes = require('./routes/testRoutes');
const orderRoutes = require('./routes/order');
const tableRoutes = require('./routes/table');

require("dotenv").config();

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

app.use(productRoutes);
app.use(reactQueryRoutes);
app.use(orderRoutes);
app.use(tableRoutes);
app.use('/test', testRoutes);

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    app.listen(5050, () => {
      console.log("server running successfully");
    });
  })
  .catch((err) => console.log(err));
