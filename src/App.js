import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <main className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profile={props.appState.profile} addPost={props.addPost} updateNewPostText={updateNewPostText} />} />
                        <Route path='/dialogs/*' element={<Dialogs messages={props.appState.messages} addMessage={props.addMessage} updateMessage={props.updateMessage} newMessageText={state.messages.newMessageText}/>} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;