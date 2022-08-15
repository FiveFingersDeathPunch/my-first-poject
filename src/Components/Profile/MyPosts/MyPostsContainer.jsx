import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts"

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());

            }

            let OnPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);

            }
            return <MyPosts updateNewPostTextActionCreator={OnPostChange}
                addPostActionCreator={addPost}
                postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText}
                profilePage={state} />
        }
        }
    </StoreContext.Consumer>

}




export default MyPostsContainer;

