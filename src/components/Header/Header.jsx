import React from "react";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png" alt=""/>
        </header>
    );
}

export default Header;