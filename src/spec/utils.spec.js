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
});
