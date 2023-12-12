import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.profile.posts
        .map(p => <Post message={p.text} like={p.likes} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}></textarea><br/>
                <button onClick={ addPost }>Add post</button>
                <button>Remove all</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;