const express = require("express");
const { getList, getAllFiles, getFile } = require("../controllers/data");

const router = express.Router();

router.get("/list", getAllFiles);
router.get("/data", getList);
router.get("/data/:file", getFile);

module.exports = router;
