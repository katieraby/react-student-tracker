const createBlockTally = blockArray => {
  if (!blockArray.length) {
    return [];
  }
  const newObj = {};
  blockArray.map(blockInfo => {
    return newObj.hasOwnProperty(blockInfo.name)
      ? (newObj[blockInfo.name] += 1)
      : (newObj[blockInfo.name] = 1);
  });
  return newObj;
};

/*
[
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
          },
          {
            _id: "5e1f28609150090a4e7239e6",
            number: 4,
            name: "Project Phase",
            slug: "proj"
          },
          {
            _id: "5e1f28609150090a4e7239e7",
            number: 5,
            name: "Graduated",
            slug: "grad"
          }
        ],*/

export default createBlockTally;
