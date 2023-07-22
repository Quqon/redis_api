const express = require("express");
const {Controller} = require("../controllers");
const apiRouter = express.Router();

apiRouter.get("", Controller.getApi);

module.exports = apiRouter;