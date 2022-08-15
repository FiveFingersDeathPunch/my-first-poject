const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initilaState = {
       
        messagesData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you" },
            { id: 3, message: "I'm fine" }
        ],
        DialogsData: [
            { id: 1, name: "Ruslan" },
            { id: 2, name: "Egor" },
            { id: 3, name: "Danil" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Pasha" }
        ],
        NewMessageBody: ""
     
}


const dialogsReducer = (state = initilaState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Math.random(100),
                message: state.NewMessageBody

            }
            state.messagesData.push(newMessage);
            state.NewMessageBody = ('');
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.NewMessageBody = action.newMessage;
            return state;
        default:
            return state;
    }




}

export const updateNewMessageBody = (message) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message }
}
export const addMessageActionCreactor = () => {
    return { type: ADD_MESSAGE }
}


export default dialogsReducer;