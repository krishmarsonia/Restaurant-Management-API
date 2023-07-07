const getloop = (items) => {
  let data = "";
  console.log(items)
  for(let item of items){
    data += `<tr>
    <th scope="row">${item.foodName}</th>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>600</td>
    </tr>`
  }
  return data
}

module.exports = ( {order} ) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <style>
        body {
          margin: 75px 75px 25px 75px;
        }
        .mai-body {
          /* border: 1px black solid; */
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          width: 100%;
        }
        .orderId {
          text-align: right;
          /* border: 1px aqua solid; */
        }
        img {
          width: 200px;
        }
        .upperMargin{
          padding-top: 25px;
        }
      </style>
    </head>
    <body>
      <div class="mai-body">
        <div class="container text-center upperMargin">
          <div class="row">
            <div class="col">
              <img
                src="https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg"
                alt="Restaurant logo"
                class="float-start"
              />
            </div>
            <div class="col">
              <h2>Nam karan Baki che</h2>
              <h4>address pan nathi</h4>
              <p>GST IN:- 54565481584183548944</p>
            </div>
            <div class="col orderId">
              Order Invoice:- djbcsbsiisoiblibsovsdbvb
            </div>
          </div>
          <br />
          <figure class="test-center">
            <h3>GST Invoice</h3>
          </figure>
          <br />
          <figure class="test-center">
            <h4>Orderd Items</h4>
          </figure>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Food Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Cake</th>
                <td>550</td>
                <td>2</td>
                <td>1100</td>
              </tr>
              ${getloop(order)}
              <tr>
                <th scope="row">Panner</th>
                <td>550</td>
                <td>2</td>
                <td>1100</td>
              </tr>
              <tr>
                  <th scope="row" colspan="4">Extra Charges</th>
              </tr>
              <tr>
                  <th scope="row" colspan="3">Service Charge</th>
                  <td>20</td>
              </tr>
              <tr>
                  <th scope="row" colspan="3">GST</th>
                  <td>20</td>
              </tr>
              <tr>
                  <th scope="row" colspan="3">Discount</th>
                  <td>20</td>
              </tr>
            </tbody>
          </table>
          <figure class="text-end">
            <h1>Total: 2200</h1>
          </figure>
          <br />
          <figure class="text-start">
            <p>__________________</p>
            <h6>Krish Marsonia</h6>
          </figure>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};
