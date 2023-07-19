const { default: mongoose } = require("mongoose");
const Product = require("../model/productModel");

const { addProductService } = require("../services/productServices");

const createMock = jest.fn();

Product.create = createMock;

const response = {
  _id: "64b6c1070cb71359910dd418",
  name: "Italian",
  status: true,
};

const name = "Italian";

beforeAll(() => {
  jest.setTimeout(6000);
  createMock.mockResolvedValue(response);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Product Service Tests", () => {
  test("it should test the saving function", async () => {
    const expected = response;
    const result = await addProductService(name);

    //    console.log(createMock.mock.);
    expect(result).toEqual(expected);
    expect(result).toHaveProperty("name");
    expect(createMock.mock.lastCall[0].status).toEqual(true);
    expect(mongoose.model("products").create).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(Object);
  });

  test("it should throw an error if name is not passed", async () => {
    const expected = response;
    let err
    try {
        const result = await addProductService();
        error = result
    } catch (error) {
        err = error;
    }

    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toBe("name not received in params");
    expect(err.statusCode).toEqual(400);
  })
});
