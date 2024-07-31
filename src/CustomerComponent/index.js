import "./index.css"
import { useState } from 'react';


const CustomerComponent = (props) => {

    return (<div>
        <div>
            <div class='title-font'>Customer List</div>

            <div class="card-spacing scroll">

                {props.data.map(client => <div key={client.id} class={(client.id === props.formObject.id) ? " clicked-card" : "card "} onClick={() => props.handleRowClick(client)}>

                    <div class="side-by-side spacing">

                        <div class="spacing-side" >
                            <div class="category">
                                Name
                            </div>
                            {client.name}
                        </div>
                        <div class="spacing-side"><div class="category">
                            Email
                        </div> {client.email}</div>
                        <div class="spacing-side"><div class="category">
                            Password
                        </div> {client.password}</div>
                    </div>
                </div>)}
            </div>
        </div>


    </div>);
}

export default CustomerComponent;