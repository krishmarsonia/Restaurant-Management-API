const getloop = (items) => {
  let data = "";
  console.log(items);
  for (let item of items) {
    data += `<tr>
    <th scope="row">${item.foodName}</th>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>600</td>
    </tr>`;
  }
  return data;
};

module.exports = ({ order }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Order</title>
      <style>
        body {
          margin: 75px 75px 25px 75px;
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: start;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          padding-left: 75px;
        }
        .intro {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          width: 90%;
          padding-top: 25px;
          /* border: 1px black solid; */
        }
        .W33 {
          width: 30%;
          /* border: 1px solid red; */
        }
        img {
          width: 100%;
        }
        .float-R {
          text-align: right;
        }
        
        .details {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .details > div{
          padding-right: 40px;
        }
        .order-table {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
        }
        /* table {
          width: 100%;
          border-collapse: collapse;
        } */
        .main-table{
          width: 100%;
          border-collapse: collapse;
        }
        /* th,
         td {
          padding: 8px;
          border: 1px #dee2e6 solid;
        }  */
        .main-th-td{
          padding: 8px;
          border: 1px #dee2e6 solid;
        }
        .total {
          text-align: right;
          width: 90%;
        }
        .sign {
          text-align: start;
          width: 90%;
        }
        .orderId{
          position: relative;
          bottom: 55px;
          left: 5px;
          overflow-x: hidden;
          text-align: left;
          width: 100%;
        }
      </style>
    </head>
    <body>
      <div class="main">
        <div class="intro">
          <table style="width: 100%;">
            <tr>
              <td style="width: 230px;">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg"
                  alt="Restaurant logo"
                />
              </td>
              <td  style="width: 415px;">
                <h2>Nam karan Baki che</h2>
                <h4>address pan nathi</h4>
                <p>GST IN:- 54565481584183548944</p>
              </td>
              <td style="width: 150px;" ><div class="orderId">Order Invoice:- djbcsbsiisoiblibsovsdbvb</div></td>
            </tr>
          </table>
          <!-- <div class="W33">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg"
              alt="Restaurant logo"
            />
          </div>
          <div class="W33">
            <h2>Nam karan Baki che</h2>
            <h4>address pan nathi</h4>
            <p>GST IN:- 54565481584183548944</p>
          </div>
          <div class="W33 float-R">Order Invoice:- djbcsbsiisoiblibsovsdbvb</div> -->
        </div>
        <div class="details">
          <div><h3>GST Invoice</h3></div>
          <div><h4>Ordered Items</h4></div>
        </div>
        <div class="order-table">
          <table class="main-table">
            <thead>
              <tr>
                <th class="main-th-td" scope="col">Food Name</th>
                <th class="main-th-td" scope="col">Price</th>
                <th class="main-th-td" scope="col">Quantity</th>
                <th class="main-th-td" scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="main-th-td" scope="row">Cake</th>
                <td class="main-th-td">550</td>
                <td class="main-th-td">2</td>
                <td class="main-th-td">1100</td>
              </tr>
              <tr>
                <th class="main-th-td" scope="row">Panner</th>
                <td class="main-th-td">550</td>
                <td class="main-th-td">2</td>
                <td class="main-th-td">1100</td>
              </tr>
              <tr>
                <th class="main-th-td" scope="row" colspan="4">Extra Charges</th>
              </tr>
              <tr>
                <th class="main-th-td" scope="row" colspan="3">Service Charge</th>
                <td class="main-th-td">20</td>
              </tr>
              <tr>
                <th class="main-th-td" scope="row" colspan="3">GST</th>
                <td class="main-th-td">20</td>
              </tr>
              <tr>
                <th class="main-th-td" scope="row" colspan="3">Discount</th>
                <td class="main-th-td">20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="total">
          <h2>Total: 456</h2>
        </div>
        <div class="sign">
          <p>__________________</p>
          <h5>Krish Marsonia</h5>
        </div>
        <br>
      </div>
    </body>
  </html>
      `;
};
