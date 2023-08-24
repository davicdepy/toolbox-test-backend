const { listFiles, filesData } = require("../services");
const { handleHttpError } = require("../utils/handleError");
const { handleFileFormat } = require("../utils/handleFormat");

const processData = async (file) => {
  const perFile = handleFileFormat(await filesData(file));
  if (perFile.length !== 0) {
    return {
      file: file,
      lines: perFile,
    };
  }
};

const getList = async (request, response) => {
  try {
    const data = await listFiles();
    const jsonData = JSON.parse(data)?.files;
    const finalData = [];
    for (let item = 0; item < jsonData.length; item++) {
      const perFile = await processData(jsonData[item]);
      if (perFile !== undefined) {
        finalData.push(perFile);
      }
    }

    response.setHeader("Content-Type", "application/json");
    response.send(finalData);
  } catch (error) {
    handleHttpError(response, "ERROR_WHEN_LISTING_FILES");
  }
};

const getAllFiles = async (request, response) => {
  try {
    const data = await listFiles();
    response.setHeader("Content-Type", "application/json");
    response.send(data);
  } catch (error) {
    handleHttpError(response, "ERROR_WHEN_LISTING_FILES");
  }
};

const getFile = async (request, response) => {
  try {
    const { file } = request.params;
    const data = handleFileFormat(await filesData(file));
    response.setHeader("Content-Type", "application/json");
    response.send({
      file: file,
      lines: data,
    });
  } catch (error) {
    handleHttpError(response, "ERROR_WHEN_GETTING_FILE");
  }
};

module.exports = { getList, getAllFiles, getFile };
