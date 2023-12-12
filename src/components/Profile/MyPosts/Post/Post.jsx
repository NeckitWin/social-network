import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hWgIeheNx1UyrJ0StbFyAV2i7J735jcdvkfvNrUX0Dv-1d2S8KlaDLv7PrzvB5-8Gx4&usqp=CAU" alt=""/>
            <div>
                <span>{props.message}</span><br/>
                <span>Like: {props.like}</span>
            </div>
        </div>
    );
}

export default Post;