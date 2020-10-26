import React, {useState} from 'react';

import Card from '../../atoms/Card/index';

import CardTitle from '../../atoms/Text/CardTitle';
import CardAddress from '../../atoms/Text/CardAddress';
import CardBalance from '../../atoms/Text/CardBalance';
import EditForm from '../Foms/EditForm';

import {usdFormatter, cryptoFormatter} from '../../../util/index';

// import CardAddress from '../../atoms/Text/CardAddress';


import ContainedBtn from '../../atoms/Button/Contained';
// import OutlinedBtn from '../../atoms/Button/Outlined';
// import TextIconBtn from '../../atoms/Button/TextIcon';

const weiToEth = (wei) => {
    // console.log("wei: ", wei/Math.pow(10,18));
    // console.log("crypto: ",cryptoFormatter(wei/Math.pow(10,18)));
    return cryptoFormatter(wei/Math.pow(10,18));
}

const WalletCard = (props) => {

    const [showEditForm, setShowEditForm] = useState(false);

    const editWallet = () => {
      setShowEditForm(true);
    }
  
    const cancelEditWallet = () => {
      setShowEditForm(false);
    }
    

    // console.log("wallet card: ", props.walletData);

    // pull out the properties
    // these are in object?
    const walletFields = Object.keys(props.walletData)
        .map(fieldKey => {
            
            switch(fieldKey){
                case 'address':
                    return <CardAddress>
                        <span style={{textTransform: 'capitalize'}}>{fieldKey}</span>: {props.walletData[fieldKey]}
                        </CardAddress>;

                case 'name':
                    return <CardTitle>
                        <span style={{textTransform: 'capitalize'}}>{fieldKey}</span>: {props.walletData[fieldKey]}
                        </CardTitle>;

                case 'balance':
                    return <CardBalance>
                        <span style={{textTransform: 'capitalize'}}>{fieldKey}</span>: {weiToEth(props.walletData[fieldKey])}
                        </CardBalance>;

                case 'currency':
                    return <div key={fieldKey}>
                    <span style={{textTransform: 'capitalize'}}>{fieldKey}</span>: {props.walletData[fieldKey]}
                        </div>
                default:
                    return <div key={fieldKey}>
                    <span style={{textTransform: 'capitalize'}}>{fieldKey}</span>: {props.walletData[fieldKey]}
                        </div>
            }

            });

    return (

        <Card>
            {walletFields}
            <div>USD: {props.rate}</div>
            <div className="btnContainer">
            <EditForm show={showEditForm} cancel={cancelEditWallet}/>

            <ContainedBtn onClick={editWallet}> Edit </ContainedBtn>
            <ContainedBtn> Remove </ContainedBtn>
            </div>

            {/* <OutlinedBtn>outlined</OutlinedBtn>
            <TextIconBtn>text icon</TextIconBtn> */}

        </Card>
    );

}

export default WalletCard;