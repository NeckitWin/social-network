import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.menu}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news'>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music'>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;