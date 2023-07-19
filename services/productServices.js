const { productFindById } = require('../dbServices/productServicesFunctions');
const Product = require('../model/productModel');

exports.addProductService = async (name) => {
    
    if(!name){
        const err = new Error("name not received in params");
        err.statusCode = 400;
        throw err;
    }
    const product = new Product({
        name: name,
        status: true,
        items: []
    });
    
    try {
        const result = await Product.create(product);
        return result;
        
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 422;
        }
        throw error;
    }
}

exports.statusChangeService = async (id) => {
    if(!id){
        const err = new Error("Id not provided");
        err.statusCode = 400;
        throw err;
    }
    try {
        const result = await productFindById(id);
        result.status = !result.status;
        await result.save();
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 422;
        }
        throw error;
    }
}