import React, {useState} from 'react';

import './AddForm.css';


const AddForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCurrency, setEnteredCurrency] = useState('');

   const putDataHandler = (event) =>{
      event.preventDefault();

      fetch('/updateWallet', {
        method: 'PUT'
      })
      .then(response => {
        return (response.json());
      })
      .then(data => console.log(data))
      .then(props.cancel);
  }

  
const submitHandler = event => {
    event.preventDefault();
    console.log("form submitted");
};

  return (
    <div className="Modal" 
    show={props.show}
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1': '0'
    }}
    >
        <form onSubmit={submitHandler}>
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
            <button type="submit" onClick={putDataHandler}>SUBMIT</button>
            <button onClick={props.cancel}>CANCEL</button>
          </div>
        </form>
    </div>
  );
};

export default AddForm;
