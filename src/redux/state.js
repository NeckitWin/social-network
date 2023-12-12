import {rerenderEntireTree} from "../render";
import message from "../components/Dialogs/Message/Message";

let state = {
    profile: {
        posts:[
            {id:1, text: 'Hihiha', likes: 10},
            {id:2, text: 'kek', likes: 20},
            {id:3, text: 'New pos', likes: 13},
            {id:4, text: 'Test post', likes: 25}
        ],
        newPostText: 'neckitwin'
    },
    messages: {
        dialogsData:[
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Alica'},
            {id: 3, name: 'Katia'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Andrey'}
        ],
        messagesData:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'How long'},
            {id: 4, message: 'I like that'},
            {id: 5, message: 'Bye'},
            {id: 6, message: 'Test'}
        ],
        newMessageText: 'Текстик пестик'
    }
}

window.state = state;

export let addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.messages.newMessageText
    };
    state.messages.messagesData.push(newMessage);
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profile.newPostText,
        likes: 0
    };
    state.profile.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateMessage = (newMessage) => {
    state.messages.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;