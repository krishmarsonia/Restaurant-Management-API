const Product = require("../model/productModel");

exports.productFind = async (query) => {
  try {
    const result = await Product.find(query);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.productFindById = async (id) => {
  if (!id) {
    const err = new Error("Id not provided");
    err.statusCode = 400;
    throw err;
  }
  try {
    const result = await Product.findById(id);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.productFindByIdAndUpdate = async (_id, data, config) => {
  console.log(data);
  if (!_id || !data) {
    const err = new Error("Id or Data not provided");
    err.statusCode = 400;
    throw err;
  }
  try {
    switch (config) {
      case "$push":
        const result = await Product.findByIdAndUpdate(
          { _id },
          { $push: data }
        );
        return result;
      case "$set":
        const result1 = await Product.findByIdAndUpdate(
          { _id },
          { $set: data }
        );
        return result1;
      case "$pull":
        const result2 = await Product.findByIdAndUpdate(
          { _id },
          { $pull: data }
        );
        return result2;
      default:
        const result3 = await Product.findByIdAndUpdate({ _id }, data);
        return result3;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.productFindByIdAndDelete = async (prodId) => {
  if (!prodId) {
    const err = new Error("Id not provided");
    err.statusCode = 400;
    throw err;
  }

  try {
    const result1 = await Product.findByIdAndDelete(prodId);
    return result1;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.productUpdateOne = async (queryData, updateData, config) => {
  try {
    switch (config) {
      case "$set":
        const result1 = await Product.updateOne(queryData, { $set: updateData });
        return result1;
      default:
        const result = await Product.updateOne(queryData, updateData);
        return result;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
