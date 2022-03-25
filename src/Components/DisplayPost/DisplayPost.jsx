import { useState } from "react";
import Post from "../Post/Post";


const DisplayPost = (props) => {
   
    return ( 
        <div>
            {props.postInfo.map((post,postIndex)=>{
                return(
                    <Post key={postIndex} postData={post} />
                );
            })}
        </div>
     );
}
 
export default DisplayPost;