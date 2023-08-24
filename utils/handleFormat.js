const format = (line) => {
  if (
    line[1] &&
    typeof line[1] === "string" &&
    line[2] &&
    typeof Number(line[2]) === "number" &&
    !isNaN(Number(line[2])) &&
    line[3] &&
    line[3].length == 32 &&
    line[3] !== null
  ) {
    return {
      text: line[1],
      number: Number(line[2]),
      hex: line[3],
    };
  }
};

const handleFileFormat = (file) => {
  if (!file) {
    return;
  }
  const data = file.split("\n");
  const finalData = [];

  data.forEach((line) => {
    const addLine = format(line.split(","));
    if (addLine !== undefined) {
      finalData.push(addLine);
    }
  });

  return finalData;
};

module.exports = { handleFileFormat };
