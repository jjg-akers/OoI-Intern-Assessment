import React, {useState} from 'react';

import './AddForm.css';

import {editWallet} from '../../../actions';

const AddForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCurrency, setEnteredCurrency] = useState('');

   const putDataHandler = (event) =>{

    let data = {
      name: enteredName,
      address: enteredAddress,
      currency: enteredCurrency
    };

      event.preventDefault(data);
      editWallet(data)
      .then(props.cancel);
  }

  return (
    <div className="Modal" 
    show={props.show}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
    }}
    >
        <form onSubmit={putDataHandler}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
                id="name" 
                value={enteredName}
                onChange={event => {
                  setEnteredName(event.target.value);
                }}
                />

                  </div>
          <div className="form-control">
            <label htmlFor="adress">Address</label>
            <input 
              type="text" 
              id="address" 
              value={enteredAddress}
              onChange={event => {
                setEnteredAddress(event.target.value);
              }}          
                />
          </div>
          <div className="form-control">
            <label htmlFor="currency">Currency</label>
            <input 
              type="number" 
              id="currency" 
              value={enteredCurrency}
              onChange={event => {
                setEnteredCurrency(event.target.value);
              }}          
                />
          </div>
          <div className="form__action">
            <button type="submit">SUBMIT</button>
            <button onClick={props.cancel}>CANCEL</button>
          </div>
        </form>
    </div>
  );
};

export default AddForm;
