// const chai = require("chai");
// const expect = chai.expect;
// const chaiAsPromised = require("chai-as-promised");
// const sinon = require("sinon");
// const sinonChai = require("sinon-chai");
// chai.use(chaiAsPromised);
// chai.use(sinonChai);

// var mongoose = require("mongoose");

// var testFn = require("../controllerFunctions/testControllerFn");
// var TestModal = require("../model/testProductModel");

// var sandbox = sinon.createSandbox();

// describe("test", () => {
//   let findStub;
//   let sampleArgs;
//   let sampleTest;

//   beforeEach(() => {
//     sampleTest = {
//       _id: "64b1502d3e15df4bdb1db119",
//       name: "IJK",
//       status: true,
//       items: [],
//     };

//     findStub = sandbox.stub(mongoose.Model, "findById").resolves(sampleTest);
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it("Should run the test", (done) => {
//     testFn.getTestUser(null, (err, result) => {
//         console.log(result);
//         expect(err).to.exist;
//         done();
//     });
//   });
// });
