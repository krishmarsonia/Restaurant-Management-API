const Order = require("../model/orderModel");
const Table = require("../model/tableModel");
const pdf = require("../UtilBackend/pdfFormat");
const htmlPDF = require("html-pdf");
const path = require("path");

exports.newOrder = async (req, res, next) => {
  const tableId = req.body.tableId;
  const foodOrder = req.body.foodOrder;
  try {
    const tabledata = await Table.findById(tableId);
    if (tabledata.occupied === false) {
      await Table.findByIdAndUpdate(tableId, {
        $set: {
          occupied: true,
        },
      });
      const newOrder = new Order({
        tableId: tableId,
        order: foodOrder,
      });
      const result = await newOrder.save();
      console.log(result);
      return res.json("done!");
    } else {
      const orderDetails = await Order.find({ tableId: tableId });
      let newOrderData = orderDetails[0].order;
      foodOrder.map((item) => {
        let prodId = newOrderData.findIndex(
          (it) => it.foodName === item.foodName
        );
        if (prodId !== -1) {
          newOrderData[prodId].quantity =
            newOrderData[prodId].quantity + item.quantity;
        } else {
          newOrderData = [...newOrderData, item];
        }
      });
      let finaldata = await Order.findOneAndUpdate(
        { tableId: tableId },
        {
          $set: {
            order: newOrderData,
          },
        }
      );
      return res.json(finaldata);
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.fetchAllTables = async (req, res, next) => {
  try {
    const TableData = await Table.find();
    return res.json(TableData);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.getAllOrders = async (req, res, next) => {
  const tableId = req.params.TableId;
  try {
    const OrderData = await Order.findOne({ tableId });
    return res.json(OrderData);
  } catch (error) {
    return res.json(error);
  }
};

exports.sendPDF = async (req, res, next) => {
  const tableId = req.body.tableId;
  try {
    const pdfOrder = await Order.findOne({
      tableId: tableId,
    });
    const orders = pdfOrder.order;
    htmlPDF
      .create(
        pdf({
          order: orders
        }),
        {}
      )
      .toFile(`recipts/${tableId}.pdf`, (err) => {
        if (err) {
          return res.send(Promise.reject());
        }

        return res.send(Promise.resolve());
      });
  } catch (error) {
    return res.send(error);
  }

  // return res.send(pdf({order: [{foodName: "Burger", price: 150, quantity: 2}, {foodName: "Burger", price: 150, quantity: 2}]}));
};

exports.getFile = (req, res, next) => {
  const tableId = req.body.tableId
  return res.sendFile(path.join(__dirname + `../../recipts/${tableId}.pdf`));
};
