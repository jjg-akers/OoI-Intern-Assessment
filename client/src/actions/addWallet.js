export default async (data) => {
    let res, wallets;
    try {
      res = await fetch("/api/wallets/addWallet", {
          method: 'POST',
          body: JSON.stringify(data)
      });
      wallets = await res.json();
    } catch (e) {
      return console.log(e);
    }
    return wallets;
  };
  