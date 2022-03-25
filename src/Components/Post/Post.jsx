
const Post = (props) => {
    return ( 
        <div>
            <div>Username:{props.postData.userName}</div>
            <div>Message:{props.postData.newMessage}</div>
            <div>Date Posted:{props.postData.datePosted}</div>
            <div>            
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-thumbs-down"></i>
            </div>
        </div>
     );
}
 
export default Post; 