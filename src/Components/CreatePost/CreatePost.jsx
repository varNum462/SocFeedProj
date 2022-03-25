import { useState } from "react";
import './CreatePost.css'

const CreatePost = (props) => {

    const [userName,setUserName] = useState('');
    const [newMessage,setNewMessage] = useState('');
    const today = new Date();
    const date = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName,
            newMessage,
            datePosted: date
        }
        props.addNewPost(newPost);
        setUserName("");
        setNewMessage("");
    }

    return ( 
        <div>
            <div className="m-3 container">
                <h2>Create a Post</h2>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">User Name</label>
                        <input type="text" className="form-control" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Message</label>
                        <textarea className="form-control" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-warning" value="Create Post" />
                    </div>
                </form>
            </div>
            <hr />
        </div>
     );
}
 
export default CreatePost;