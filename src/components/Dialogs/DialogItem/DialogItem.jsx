import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let iDialog = `/dialogs/${props.id}`;
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={iDialog}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;