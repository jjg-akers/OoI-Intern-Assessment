export default async (data) => {
    let res, wallets;

    console.log("add wallet data: ", data);
    try {
      res = await fetch("/api/wallets/addWallet", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      wallets = await res.json();
    } catch (e) {
      return console.log(e);
    }
    return wallets;
  };
  