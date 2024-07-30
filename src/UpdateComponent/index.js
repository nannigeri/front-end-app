import './index.css'

function UpdateComponent() {
    const deleteAction = ()  => {
        console.log('delete');
    }
    const cancelAction = ()  => {
        console.log('cancel');
    }
    const saveAction = ()  => {
        console.log('save');
    }

    return (<div>
        <form>
            <div>
            <label class="category" for = "name">Name: </label>
            <input class= "input-box-style" type= "text" id = "name" placeholder = "Name"></input>
            </div>
            <div>
            <label class="category" for = "email">Email: </label>
            <input class= "input-box-style" type= "text" id = "email" placeholder = "Email"></input>
            </div>
            
            <div>
            <label class="category" for = "password">Password: </label>
            <input class= "input-box-style" type= "text" id = "password" placeholder = "Password"></input>
            </div>

            
           
        </form>

        <div class = "side-by-side">
            <div class = "spacing">
            <button onClick = {deleteAction()} class = "button-style">
                Delete
            </button>
            </div>
            <div class = "spacing">
            <button onclick = {saveAction()} class ="button-style">
                Save
            </button>
            </div>
            
            <div class = "spacing">
            <button onClick = {cancelAction()} class = "button-cancel-style">
               Cancel
            </button>
            </div>
            
        </div>
    </div>);
}

export default UpdateComponent;