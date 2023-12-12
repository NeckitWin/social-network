import React from "react";
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.logo} src="/img/new-logo.png" alt=""/>
        </header>
    );
}

export default Header;