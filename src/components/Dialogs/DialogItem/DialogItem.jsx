import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let iDialog = `/dialogs/${props.id}`;
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={iDialog}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.mess}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id='1' name='Alica' />
                <DialogItem id='2' name='Nikita' />
                <DialogItem id='3' name='Sasha' />
                <DialogItem id='3' name='Katia' />
                <DialogItem id='3' name='Valera' />
            </div>
             <div className={s.messages}>
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
                 <Message mess='Какой-то там текст, просто как сообщения, все дела' />
             </div>
        </div>
    );
}

export default Dialogs;