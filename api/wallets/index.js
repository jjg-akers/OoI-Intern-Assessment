const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Wallet Routes");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  // console.log("hit get route");

  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

  // console.log("wallets: ", wallets);
});

module.exports = router;
