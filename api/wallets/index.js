const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Wallet Routes");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

  // console.log("wallets: ", wallets);
});

router.post("/addWallet", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  try {
    wallets = await app.addWallet(req.body);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

  // console.log("wallets: ", wallets);
});

router.put("/updateWallet", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  try {
    wallets = await app.updateWallet(req.body);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

  // console.log("wallets: ", wallets);
});

router.delete("/deleteWallet", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  try {
    wallets = await app.deleteWallet(req.body);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

  // console.log("wallets: ", wallets);
});

module.exports = router;
