import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessage, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export  let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateMessage={updateMessage} />
        </React.StrictMode>
    );
}