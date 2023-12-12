import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hWgIeheNx1UyrJ0StbFyAV2i7J735jcdvkfvNrUX0Dv-1d2S8KlaDLv7PrzvB5-8Gx4&usqp=CAU"
                alt=""/>
            ava+description
        </div>
    );
}

const Profile = () => {
    return (
        <div>
            <img className={s.banner}
                 src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYANuEZlRY89MbBZGbB03TL7pGDPeb11CkdQJhamTfLVYfEGR0DP.jpg"
                 alt=""/>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
}

export default Profile;