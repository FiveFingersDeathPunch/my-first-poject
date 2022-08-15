import React from "react";
import p from "./Post.module.css"



const Post = (props) =>{
   
    return (
            <div className={p.item}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
                {props.message}
                <div>
                <span>Like </span> {props.LikesKount}
                
                </div>
            </div>
            
        )
    
  
}
export default Post;
      
    