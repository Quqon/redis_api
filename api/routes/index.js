const express = require("express");

const apiRouter = require("./router");

const router = express.Router();

router.use("/api", apiRouter);

module.exports = router;