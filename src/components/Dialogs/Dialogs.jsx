import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.messages.dialogsData
        .map( d => <DialogItem name={d.name} id={d.id} />   );

    let messagesElements = props.messages.messagesData
        .map( m => <Message mess={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        props.updateMessage('');
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateMessage(message);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div>
                    <textarea></textarea>
                    <button>Add User</button>
                    <button>Delete User</button>
                </div>
                { dialogsElements }
            </div>
             <div className={s.messages}>
                 { messagesElements }
                 <div>
                     <textarea onChange={onMessageChange} className={s.textarea} ref={newMessageElement} value={ props.newMessageText }></textarea>
                     <button onClick={addMessage}>Send message</button>
                     <button>Clear dialogs</button>
                 </div>
             </div>
        </div>
    );
}

export default Dialogs;