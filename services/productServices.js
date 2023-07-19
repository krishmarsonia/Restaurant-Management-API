const mongoose = require("mongoose");
const {
  productFindById,
  productFindByIdAndUpdate,
  productUpdateOne,
} = require("../dbServices/productDBServices");
const Product = require("../model/productModel");

exports.addProductService = async (name) => {
  if (!name) {
    const err = new Error("name not received in params");
    err.statusCode = 400;
    throw err;
  }
  const product = new Product({
    name: name,
    status: true,
    items: [],
  });

  try {
    const result = await Product.create(product);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.statusChangeService = async (id) => {
  if (!id) {
    const err = new Error("Id not provided");
    err.statusCode = 400;
    throw err;
  }
  try {
    const result = await productFindById(id);
    result.status = !result.status;
    await result.save();
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.AddItemService = async (_id, foodName, price, status) => {
  if (!_id || !foodName || !price || !status) {
    const err = new Error("Parameters not provided");
    err.statusCode = 400;
    throw err;
  }
  const newItemId = new mongoose.Types.ObjectId();
  const renewedItemId = newItemId.toString();
  const itemObj = {
    _id: renewedItemId,
    foodName,
    price,
    status,
  };

  try {
    await productFindByIdAndUpdate(_id, { items: itemObj }, "$push");
    return itemObj;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.updateItemService = async (_id, itemId, fname, price) => {
  if (!_id || !itemId || !fname || !price) {
    const err = new Error("Parameters not provided");
    err.statusCode = 400;
    throw err;
  }
  try {
    await productUpdateOne(
      { _id, "items._id": itemId },
      { "items.$.foodName": fname, "items.$.price": price },
      "$set"
    );
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.itemStatusService = async (_id, itemId, statusValue) => {
  if (!_id || !itemId || (statusValue === undefined)) {
    const err = new Error("Parameters not provided");
    err.statusCode = 400;
    throw err;
  }
  const updatedStatusValue = !statusValue;

  try {
    await productUpdateOne(
      { _id, "items._id": itemId },
      { "items.$.status": updatedStatusValue },
      "$set"
    );
    return updatedStatusValue
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
