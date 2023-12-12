import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={s.menu}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a>Profile</a></li>
                <li className={s.item}><a>Messages</a></li>
                <li className={s.item}><a>News</a></li>
                <li className={s.item}><a>Music</a></li>
                <li className={s.item}><a>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;