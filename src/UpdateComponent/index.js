import './index.css'

function UpdateComponent(props) {
    

    return (<div>
        
        <div class = "background-update">
        <div class = "title-font">{(props.mode == "Update") ? "Update" : "Add"}</div>
            <div class = "spacing">
            <label for="exampleFormControlInput1" class="category spacing">Name</label>
            <input type="text" name="name" onChange={(e) => props.handleInputChange(e)} value={props.formObject.name} id="exampleFormControlInput1" placeholder="John Smith"></input>
            </div>
            
            <div class = "spacing">
            <label for="exampleFormControlInput2" class="category spacing">Email</label>
            <input type="email" name="email" onChange={(e) => props.handleInputChange(e)} value={props.formObject.email} class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            </div>

            <div class = "spacing">
            <label for="exampleFormControlInput3" class="category spacing">Password</label>
            <input type="text" name="password" onChange={(e) => props.handleInputChange(e)} value={props.formObject.password} class="form-control" id="exampleFormControlInput3" placeholder="********"></input>
            </div>
            
            
            

            
           
       

        <div class = "side-by-side">
            
            <div class = "spacing">
            <button onClick = {props.onSaveClick}  class ="button-style">
                Save
            </button>
            </div>

            <div class = "spacing">
            <button onClick = {props.onDeleteClick} class = "button-style">
                Delete
            </button>
            </div>
    
            <div class = "spacing">
            <button onClick = {props.onCancelClick} class = "button-cancel-style">
               Cancel
            </button>
            </div>
            
        </div>
        </div>
    </div>);
}

export default UpdateComponent;