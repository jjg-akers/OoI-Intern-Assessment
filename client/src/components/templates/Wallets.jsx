import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PriceInfo from "../molecules/Info/PriceInfo";
import WalletCard from '../molecules/WalletCard/WalletCard';
import ContainedBtn from '../atoms/Button/Contained';
import AddForm from '../molecules/Foms/AddForm';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
}));


export default function ({ wallets, rate }) {

  // console.log("wallets: ", wallets);

  const classes = useStyles();

  const [showAddForm, setShowAddForm] = useState(false);

  const addNewWallet = () => {
    setShowAddForm(true);
  }

  const cancelNewWallet = () => {
    setShowAddForm(false);
  }


  const ethWallets = wallets.filter(wallet => {
    // console.log("wallet: ", wallet.currency);
   return wallet.currency === 'Ethereum';
  });

  // extract wallet info and populate WalletCards
  const walletCards = wallets.map(w => {
    return <WalletCard walletData={w} rate={rate}/>
  });

  return (
    <div className={classes.root}>
      
      {walletCards}
      <ContainedBtn onClick={addNewWallet}>Add New Wallet</ContainedBtn>
      <AddForm show={showAddForm} cancel={cancelNewWallet}/>

      <Grid container>

        <Grid item xs={12}>
          <PriceInfo />
        </Grid>

      </Grid>
    </div>
  );
}
