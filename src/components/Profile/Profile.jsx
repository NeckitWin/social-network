import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return(
        <main className={s.content}>
            <img className={s.banner} src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYANuEZlRY89MbBZGbB03TL7pGDPeb11CkdQJhamTfLVYfEGR0DP.jpg" alt=""/>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hWgIeheNx1UyrJ0StbFyAV2i7J735jcdvkfvNrUX0Dv-1d2S8KlaDLv7PrzvB5-8Gx4&usqp=CAU" alt=""/>
                ava+description
            </div>
            <div>New post</div>
            <div className={s.post}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </main>
    );
}

export default Profile;