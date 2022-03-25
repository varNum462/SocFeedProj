import { useState } from "react";

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
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <label>Message</label>
            <textarea cols="30" rows="10" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} ></textarea>
            <input type="submit" value="Create Post" />
        </form>
     );
}
 
export default CreatePost;