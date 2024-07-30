import './index.css'

function UpdateComponent(props) {
    

    return (<div>
        <div class = "background-update">
        <div class = "title-font">Update</div>
        <form>
            <div class = "label-padding">
            <label class="category" for = "name">Name: </label>
            <input value= {props.formObject.name} class= "input-box-style" type= "text" id = "name" placeholder = "Name"></input>
            </div>
            <div class = "label-padding">
            <label class="category" for = "email">Email: </label>
            <input value= {props.formObject.email} class= "input-box-style" type= "text" id = "email" placeholder = "Email"></input>
            </div>
            
            <div class = "label-padding">
            <label class="category" for = "password">Password: </label>
            <input value= {props.formObject.password} class= "input-box-style" type= "text" id = "password" placeholder = "Password"></input>
            </div>

            
           
        </form>

        <div class = "side-by-side">
            
            <div class = "spacing">
            <button  class ="button-style">
                Save
            </button>
            </div>

            <div class = "spacing">
            <button  class = "button-style">
                Delete
            </button>
            </div>
            
            <div class = "spacing">
            <button class = "button-cancel-style">
               Cancel
            </button>
            </div>
            
        </div>
        </div>
    </div>);
}

export default UpdateComponent;