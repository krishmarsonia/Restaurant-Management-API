const TestProduct = require("../model/testProductModel");

// exports.extractTestAddProductParams = () => {

// }

exports.testAddingFn = async () => {
  const product = new TestProduct({
    name: "IJK",
    status: true,
    items: [{ foodName: "CAM", Price: 56 }],
  });
  try {
    const result = await product.save();
    return result;
  } catch (error) {
    return error;
  }
};

exports.getTestUser = async (id) => {
  try {
    const result = await TestProduct.findById(id);
    return result;
    
  } catch (error) {
    throw error;
  }
  // TestProduct.findById(id, (err, result) => {
  //   if(!id){
  //     return callback(new Error("Invalid"));
  //   }
  //   if(err){
  //     return callback(err);
  //   }

  //   return callback(null, result);
  // })
}

exports.addCallBack = function(a, b, cb) {
  setTimeout(() => {
    return cb(null, a + b);
  }, 500);
}

exports.addPromise = (a,b) => {
  return Promise.resolve(a + b);
}

exports.sinonspies = () => {
  console.log("Hii there");
}