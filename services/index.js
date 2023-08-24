const https = require("https");

const url = "https://echo-serv.tbxnet.com/v1/secret";

const listFiles = () => {
  return new Promise((resolve, reject) => {
    const request = https
      .get(
        {
          host: "echo-serv.tbxnet.com",
          port: 443,
          path: "/v1/secret/files",
          headers: { Authorization: "Bearer aSuperSecretKey" },
        },
        function (resp) {
          let data = "";
          resp.on("data", (serverData) => {
            data += serverData;
          });
          resp.on("end", () => {
            resolve(data);
          });
        }
      )
      .on("error", (err) => {
        reject(err.message);
      });

    request.end();
  });
};

const filesData = (file) => {
  return new Promise((resolve, reject) => {
    const request = https
      .get(
        {
          host: "echo-serv.tbxnet.com",
          port: 443,
          path: `/v1/secret/file/${file}`,
          headers: { Authorization: "Bearer aSuperSecretKey" },
        },
        function (resp) {
          let data = "";
          resp.on("data", (serverData) => {
            data += serverData;
          });
          resp.on("end", () => {
            resolve(data);
          });
        }
      )
      .on("error", (err) => {
        reject(err.message);
      });

    request.end();
  });
};

module.exports = { listFiles, filesData };
