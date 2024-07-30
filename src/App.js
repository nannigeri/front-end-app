import logo from './logo.svg';
import './App.css';
import CustomerComponent from './CustomerComponent';
import UpdateComponent from './UpdateComponent';
import customers from './CustomerComponent/customers.json'
import {useState} from 'react';

function App() {
  let blank = {"id": -1, "name": "", "email": "", "password": ""};
  const [customer, setCustomer] = useState([]);
  const [formObject, setFormObject] = useState(blank);


  function handleRowClick(client){
    setFormObject(client);
}

  function handleFillForm(client){
   
  }
  
  return (
    <div className="App">
      <div><CustomerComponent data = {customers}
      formObject = {formObject}
      handleRowClick = {handleRowClick}
      /></div>
      <div><UpdateComponent data = {customers}
      formObject = {formObject}
      handleFillForm = {handleFillForm}
     /></div>
    </div>
  );
}

export default App;
