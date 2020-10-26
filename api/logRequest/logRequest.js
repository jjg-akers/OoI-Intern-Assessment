const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("logRequest");

router.all("/", async (req, res) => {
    const app = req.app.get("app");

    logger.info(`logging someting`);
    app.logRequest(req,res);


    // console.log("wallets: ", wallets);
  });

  module.exports = router;