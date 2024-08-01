import "./index.css"
import { useState } from 'react';


const CustomerComponent = (props) => {

    return (<div>
        <div>
            <div class='title-font'>Customer List - Neha Annigeri</div>

            <div class="card-spacing scroll">

                {props.data.map(client => <div key={client.id} class={(client.id === props.formObject.id) ? " clicked-card flex-container" : "card flex-container"} onClick={() => props.handleRowClick(client)}>

                    <div class="side-by-side spacing">

                    <div class={(client.id === props.formObject.id) ? "bold-click spacing-side" : "spacing-side"}>
                            <div class="category">
                                Name
                            </div>
                            {client.name}
                        </div>
                        <div class={(client.id === props.formObject.id) ? "bold-click spacing-side" : "spacing-side"}><div class="category">
                            Email
                        </div> {client.email}</div>
                        <div class={(client.id === props.formObject.id) ? "bold-click spacing-side" : "spacing-side"}><div class="category">
                            Password
                        </div> {client.password}</div>
                    </div>
                </div>)}
            </div>
        </div>


    </div>);
}

export default CustomerComponent;