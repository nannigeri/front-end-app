import "./index.css"
import customers from  "./customers.json";

function CustomerComponent() {
    return (<div> 
        <div>
        <div class= 'title-font'>Customers</div>
        {customers.map(client => <div class="spacing"><div class='card side-by-side'>
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