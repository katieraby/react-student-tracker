import createBlockTally from "../utils";

describe("createBlockTally", () => {
  it("when passed an empty array, returns an empty array", () => {
    expect(createBlockTally([])).toEqual([]);
  });

  it("takes one block name in an object inside an array and returns an object with a key of the block name and a value of 1", () => {
    const input = [
      {
        _id: "5e1f285f9150090a4e7239e3",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      }
    ];
    const output = createBlockTally(input);
    expect(output).toEqual({ Fundamentals: 1 });
  });
  it("takes an array of objects returns an object with keys of the block names and tallys of the number of times they appear in the array", () => {
    const input = [
      {
        _id: "5e1f285f9150090a4e7239e3",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e1f285f9150090a4e7239e3",
        number: 1,
        name: "Fundamentals",
        slug: "fun"
      },
      {
        _id: "5e1f28609150090a4e7239e4",
        number: 2,
        name: "Back End",
        slug: "be"
      },
      {
        _id: "5e1f28609150090a4e7239e5",
        number: 3,
        name: "Front End",
        slug: "fe"
      }
    ];
    const output = createBlockTally(input);
    expect(output).toEqual({ Fundamentals: 2, "Back End": 1, "Front End": 1 });
  });
});
