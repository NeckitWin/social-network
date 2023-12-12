import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Banner from "./Banner/Banner";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <Banner />
            <ProfileInfo />
            <MyPosts profile={props.profile} newPostText={props.profile.newPostText} addPost={props.addPost} updateNewPostText={updateNewPostText} />
        </div>
    );
}

export default Profile;