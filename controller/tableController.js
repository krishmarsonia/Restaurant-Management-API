const Table = require("../model/tableModel");

exports.postNewTable = (req, res, next) => {
  const tableNo = req.body.tableNumber;

  const table = new Table({ tableNumber: tableNo });

  table
    .save()
    .then((result) => {
      console.log(result);
      return res.json({ result });
    })
    .catch((err) => {
      console.log(err);
      return res.json({err})
    });
};
