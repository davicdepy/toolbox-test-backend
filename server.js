const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

const port = process.env.PORT || 10001;

server.get("/", function (req, res) {
  res.status(200).send("API is Running");
});

server.use("/files", require("./routes/data"));

server.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});

module.exports = server;
