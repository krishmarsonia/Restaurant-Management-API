const Product = require("../model/productModel");
const mongoose = require("mongoose");
const {
  addProductService,
  statusChangeService,
} = require("../services/productServices");
const { productFind } = require("../dbServices/productServicesFunctions");

exports.postAddProducts = async (req, res, next) => {
  const name = req.body.prodName;
  try {
    const result = await addProductService(name);
    console.log(result);
    res.json({ _id: result.id, name: result.name, status: result.status });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await productFind();
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.postStatusChange = async (req, res, next) => {
  const id = req.body.prodId;
  // const status = req.body.data.status;
  try {
    await statusChangeService(id);
    res.json(id);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.postUpdateProductName = (req, res, next) => {
  const id = req.body.prodId;
  const name = req.body.prodName;

  Product.findByIdAndUpdate({ _id: id }, { name: name })
    .then((response) => {
      console.log(response);
      res.json({ id: id, prodName: name });
    })
    .catch((err) => console.log(err));

  // Product.findByIdAndUpdate({ _id: id }, { name: name })
  //   .then((response) => {
  //     console.log(response);
  //     res.json({ status: "suceess" });
  //   })
  //   .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const id = req.body.prodId;
  // console.log(id);
  Product.findByIdAndDelete(id)
    .then((resu) => {
      console.log(resu);
      res.json(id);
    })
    .catch((err) => console.log(err));
};

exports.addProductItems = (req, res, next) => {
  const newItemId = new mongoose.Types.ObjectId();
  const renewedItemId = newItemId.toString();
  const productId = req.body.prodId;
  const fName = req.body.foodName;
  const price = req.body.price;
  console.log("------------------------");
  const itemObj = {
    _id: renewedItemId,
    foodName: fName,
    price: price,
    status: true,
  };

  Product.findOneAndUpdate({ _id: productId }, { $push: { items: itemObj } })
    .then((result) => {
      console.log(result);
      return res.json({ _id: productId, dataArray: itemObj });
    })
    .catch((err) => console.log(err));
};

exports.deleteItem = (req, res, next) => {
  const productId = req.body.prodId;
  const itemId = req.body.itemId;

  Product.findOneAndUpdate(
    { _id: productId },
    { $pull: { items: { _id: itemId } } }
  )
    .then(() => {
      res.send({ prodId: productId, itemId: itemId });
    })
    .catch((err) => console.log(err));
};

exports.updateItem = (req, res, next) => {
  const productId = req.body.prodId;
  const itemId = req.body.itemId;
  const fname = req.body.foodName;
  const price = req.body.price;
  Product.updateOne(
    { _id: productId, "items._id": itemId },
    {
      $set: {
        "items.$.foodName": fname,
        "items.$.price": price,
      },
    }
  )
    .then(() => {
      console.log("updated");
      return res.json("updated");
    })
    .catch((err) => console.log(err));
};

exports.postStatusItemchange = (req, res, next) => {
  const productId = req.body.productId;
  const itemId = req.body.itemId;
  const boolvalue = req.body.status;
  console.log(boolvalue);
  const updatedboolvalue = !boolvalue;
  // res.send({ prodId: productId, itemId: itemId, status: updatedboolvalue });
  Product.updateOne(
    { _id: productId, "items._id": itemId },
    {
      $set: {
        "items.$.status": updatedboolvalue,
      },
    }
  )
    .then((result) => {
      console.log(result);
      res.send({
        prodId: productId.toString(),
        itemId: itemId.toString(),
        status: updatedboolvalue,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
