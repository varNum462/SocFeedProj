import { useState } from "react";
import "./LikeDislike.css"

const LikeDislike = (props) => {

    const [likeClass, setLikeClass] = useState("");
    const [dislikeClass, setDislikeClass] = useState("");

    function handleLikes(){
       if(likeClass === "" && dislikeClass === ""){
            setLikeClass("fas fa-thumbs-up like");
            setDislikeClass("fas fa-thumbs-down")
       }else{
            setLikeClass("fas fa-thumbs-up");
       }
    }
    return ( 
        <div className="rate_post">                     
            <i className="fas fa-thumbs-up" onClick={handleLikes}></i>
            <i className="fas fa-thumbs-down" onClick={handleLikes}></i>              
        </div>
     );
}
 
export default LikeDislike;