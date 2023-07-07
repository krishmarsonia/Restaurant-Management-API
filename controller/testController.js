const mongoose = require('mongoose');

const TestProduct = require("../model/testProductModel");


exports.testAddProducts = (req, res, next) => {
    const product = new TestProduct({
      name: "FGH",
      status: true,
      items: [{ foodName: "CAM", Price: 56 }],
    });
    product
      .save()
      .then((result) => {
        console.log(result);
        res.json("succedded");
      })
      .catch((err) => {
        console.log(err);
        res.json("failed");
      });
  };
  
  exports.testSingleAddProduct = (req, res, next) => {
    const commentId = new mongoose.Types.ObjectId();

    const di = commentId.toString()
    // const obj2 = new Product({
    //   items: {
    //     foodName: "KO",
    //     Price: 99,
    //   },
    // });
    // TestProduct.findById("640337e498c3b94ebe9c5327").then(result => {
    //   console.log(result);
    // }).catch(err => console.log(err))
    const obj2 = {
      _id: di,
      foodName: "KO",
      Price: 99,
    };
    TestProduct.findOneAndUpdate(
      { _id: "640337e498c3b94ebe9c5327" },
      { $push: { items: obj2 } }
    )
      .then((result) => {
        console.log(result);
        res.json("updated successfully");
      })
      .catch((err) => {
        console.log(err);
        res.json("Failed");
      });
  };
  
  exports.deleteFoodItem = (req, res, next) => {
    const itemId = req.body.itemId;
    TestProduct.findOneAndUpdate(
      { _id: "640337e498c3b94ebe9c5327" },
      { $pull: {items: {_id: itemId}} }
    ).then((result) => {
      console.log(result);
    }).catch(err => console.log(err))
  };
  
  exports.updateTestFoodItem = (req, res, next) => {
    TestProduct.updateOne({_id: '640337cce8b9cb1947d2be8d', "items._id": "640337cce8b9cb1947d2be8e"}, {
      $set: {
        "items.$.foodName": "Starter",
        "items.$.Price": 206
      }
    }).then(() => {
      console.log("success");
    }).catch(err => console.log(err))
  }

  exports.generateId = (req, res, next) => {
    const commentId = new mongoose.Types.ObjectId();

    const di = commentId.toString()
    res.json({di});
  }