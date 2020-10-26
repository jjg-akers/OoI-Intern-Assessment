import React, { useState } from "react";
import PageLayout from "../templates/Page";
import Wallets from "../templates/Wallets";

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(["Ethereum Wallets", "Bitcoin Wallets"]);
  const [currentTab, setCurrentTab] = useState(1);

  console.log("current tab: ", currentTab);

  return (
    <PageLayout tabs={tabs} settab={setCurrentTab}>
      <Wallets wallets={wallets} rate={ethRate} tab={currentTab}/>

      <Wallets wallets={wallets} rate={btcRate} tab={currentTab}/>
    </PageLayout>
  );
}
