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
    if(!id){
        const err = new Error("Id not provided");
        err.statusCode = 400;
        throw err;
    }
    try {
        const result = await Product.findById(id);
        return result;
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 422;
        }
        throw error; 
    }
}
