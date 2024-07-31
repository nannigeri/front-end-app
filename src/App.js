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
  let mode = (formObject.id >= 0) ? "Update" : "Add"


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
  const handleInputChange = function (event){
    const name = event.target.name;
    const value = event.target.value;
    let newFormObject = {...formObject};
    newFormObject[name] = value;
    setFormObject(newFormObject);
  }

  let onDeleteClick = function() {
    if (formObject.id >= 0) {
      items.deleteById(formObject.id)
      setFormObject(blank);
    }
    else {
      setFormObject(blank);
    }
  }

  let onSaveClick = function() {
    console.log("Are you he")
    
    if (mode === "Update"){
      console.log("updte")
      items.put(formObject.id, formObject)
      setFormObject(blank);
    }
    else if (mode === "Add") {
      items.post(formObject)
      setFormObject(blank)
    }
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
      onDeleteClick = {onDeleteClick}
      onSaveClick = {onSaveClick}
      handleInputChange = {handleInputChange}
     /></div>
    </div>
  );
}

export default App;
