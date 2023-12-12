import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.banner}
                    src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYANuEZlRY89MbBZGbB03TL7pGDPeb11CkdQJhamTfLVYfEGR0DP.jpg"
                    alt=""/>
            </div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
}

export default Profile;