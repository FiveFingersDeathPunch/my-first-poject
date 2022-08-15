import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    ;

    let postsElements = props.postsData.map(posts => <Post message={posts.message}
        key={"post_" + posts.id} id={posts.id}
        LikesKount={posts.LikesKount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPostActionCreator();


    }

    let OnPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);


    }

    return <div className={p.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={OnPostChange}
                    ref={newPostElement}
                    value={props.newPostText} />
            </div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={p.posts}>
            {postsElements}
        </div>
    </div>


}
export default MyPosts;

