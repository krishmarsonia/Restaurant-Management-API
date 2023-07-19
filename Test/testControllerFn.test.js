const mongoose = require("mongoose");
const TestModal = require("../model/testProductModel");
const {
  getTestUser,
  addCallBack,
  addPromise,
  sinonspies,
} = require("../services/testControllerFn");

require("dotenv").config();

const findByIdMock = jest.fn();
TestModal.findById = findByIdMock;

// jest.mock("mongoose");
const response = [
  {
    _id: "64b1502d3e15df4bdb1db119",
    name: "IJK",
    status: true,
    items: [],
  },
];

const id = "64b1502d3e15df4bdb1db119";

beforeAll(() => {
  jest.setTimeout(6000);
  findByIdMock.mockResolvedValue(response);
  // findByIdMock
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("first of all", () => {
  test("should fetch a user", async () => {
    const expected = response;
    const result = await getTestUser(id);

    expect(findByIdMock.mock.calls[0][0]).toEqual(id);
    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(1)
  });

  test("should throw appropriate error when database calls fails", async () => {
    const error = new Error("It fails");
    findByIdMock.mockRejectedValue(error);

    // const result = await getTestUser(id);
    // expect(result).toThrow()
    // expect(async () => {
    //   await getTestUser(id);
    // }).toThrow(error);
    await expect(getTestUser(id)).rejects.toThrow(
      error
    );
    // console.log("done");
  });
});
