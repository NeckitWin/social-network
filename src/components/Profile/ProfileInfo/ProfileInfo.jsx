import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.descriptionBlock}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hWgIeheNx1UyrJ0StbFyAV2i7J735jcdvkfvNrUX0Dv-1d2S8KlaDLv7PrzvB5-8Gx4&usqp=CAU"
                alt=""/>
            <div>description</div>
        </div>
    );
}

export default ProfileInfo;