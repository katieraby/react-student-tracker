const createBlockTally = blockArray => {
  if (!blockArray.length) {
    return [];
  }

  console.log(blockArray);

  const newObj = { totalTimeAtNorthcoders: 0 };
  blockArray.map(blockInfo => {
    if (blockInfo.name !== "Graduated") newObj.totalTimeAtNorthcoders += 3;
    return newObj.hasOwnProperty(blockInfo.name)
      ? (newObj[blockInfo.name] += 1)
      : (newObj[blockInfo.name] = 1);
  });

  delete newObj.graduated;
  newObj.totalTimeAtNorthcoders = newObj.totalTimeAtNorthcoders + " weeks";
  return newObj;
};

export default createBlockTally;
