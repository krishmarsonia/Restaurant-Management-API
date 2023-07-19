const {
  addProductService,
  statusChangeService,
  AddItemService,
  updateItemService,
  itemStatusService,
} = require("../services/productServices");
const {
  productFind,
  productFindByIdAndUpdate,
  productFindByIdAndDelete,
} = require("../dbServices/productDBServices");

exports.postAddProducts = async (req, res, next) => {
  const name = req.body.prodName;
  try {
    const result = await addProductService(name);
    console.log(result);
    return res.json({
      _id: result.id,
      name: result.name,
      status: result.status,
    });
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
    return next(error);
  }
};

exports.postStatusChange = async (req, res, next) => {
  const id = req.body.prodId;
  try {
    await statusChangeService();
    return res.json(id);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.postUpdateProductName = async (req, res, next) => {
  const id = req.body.prodId;
  const name = req.body.prodName;

  try {
    const result = await productFindByIdAndUpdate(id, { name });
    console.log(result);
    return res.json({ id, name });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const id = req.body.prodId;
  try {
    await productFindByIdAndDelete(id);
    return res.json(id);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.addProductItems = async (req, res, next) => {
  const productId = req.body.prodId;
  const fName = req.body.foodName;
  const price = req.body.price;
  try {
    const result = await AddItemService(productId, fName, price, true);
    return res.json({ _id: productId, dataArray: result });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.deleteItem = async (req, res, next) => {
  const productId = req.body.prodId;
  const itemId = req.body.itemId;
  try {
    await productFindByIdAndUpdate(
      productId,
      { items: { _id: itemId } },
      "$pull"
    );
    return res.json({ prodId: productId, itemId: itemId });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.updateItem = async (req, res, next) => {
  const productId = req.body.prodId;
  const itemId = req.body.itemId;
  const fname = req.body.foodName;
  const price = req.body.price;
  try {
    await updateItemService(productId, itemId, fname, price);
    return res.json("Updated");
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.postStatusItemchange = async (req, res, next) => {
  const productId = req.body.prodId;
  const itemId = req.body.itemId;
  const boolvalue = req.body.status;
  try {
    const result = await itemStatusService(productId, itemId, boolvalue);
    return res.json({
      prodId: productId.toString(),
      itemId: itemId.toString(),
      status: result,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};
