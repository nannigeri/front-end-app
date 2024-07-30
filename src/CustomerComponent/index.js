import "./index.css"
import {useState} from 'react';


const CustomerComponent = (props) => {

  return (<div> 
        <div>
        <div class= 'title-font'>Customer List</div>
        {props.data.map(client =><div key ={client.id} class="spacing" onClick = {() => props.handleRowClick(client)}><div class='card side-by-side'>
            <div class = "spacing-side" >
                <div class= "category"> 
               Name
               </div> {client.name}
                </div>
            <div class = "spacing-side"><div class= "category"> 
               Email
               </div> {client.email}</div>
            <div class= "spacing-side"><div class= "category"> 
               Password
               </div> {client.password}</div>
            </div>
            </div>)}
        </div>
       
        
    </div>);
}

export default CustomerComponent;