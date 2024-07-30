import "./index.css"
import customers from  "./customers.json";

function CustomerComponent() {
    return (<div>
        <div>Customers</div>
        <ul>
        {customers.map(client => <li>
            <div>{client.name}</div>
            <div>{client.email}</div>
            <div>{client.password}</div>
            </li>)}
        </ul>
       
        
    </div>);
}

export default CustomerComponent;