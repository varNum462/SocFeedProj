import { useState } from "react";

const CreatePost = (props) => {

    const [userName,setUserName] = useState('');
    const [newMessage,setNewMessage] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            userName,
            newMessage
        }
        console.log(newPost);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <label>Message</label>
            <textarea cols="30" rows="10" onChange={(event) => setNewMessage(event.target.value)} >{newMessage}</textarea>
            <input type="submit" value="Create Post" />
        </form>
     );
}
 
export default CreatePost;