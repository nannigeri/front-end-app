import logo from './logo.svg';
import './App.css';
import CustomerComponent from './CustomerComponent';
import UpdateComponent from './UpdateComponent';

import {useState, useEffect} from 'react';
import  * as items from './memdb.js';

function App() {
  let blank = {"id": -1, "name": "", "email": "", "password": ""};
  const [customer, setCustomer] = useState([]);
  const [formObject, setFormObject] = useState(blank);


  function handleRowClick(client){
    if (formObject.id === client.id){
      setFormObject(blank);
    }
    else {
      setFormObject(client);
    }
    
}
useEffect(() => {getCustomers()}, [formObject] )

const getCustomers = function () {
     setCustomer(items.getAll);
}

  function onCancelClick(){
    setFormObject(blank);
  }

  function handleFillForm(client){
   
  }
  
  return (
    <div className="App">
      <div><CustomerComponent data = {customer}
      formObject = {formObject}
      handleRowClick = {handleRowClick}
      /></div>
      <div><UpdateComponent data = {customer}
      formObject = {formObject}
      handleFillForm = {handleFillForm}
      onCancelClick = {onCancelClick}
     /></div>
    </div>
  );
}

export default App;
