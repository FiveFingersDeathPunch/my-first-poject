


import dialogsReducer from "./DialogsReducer";
import profileReducer  from "./ProfileReducer";



let store = {
    _state: {



        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you?", LikesKount: 12 },
                { id: 2, message: "It's my firsts post", LikesKount: 22 }
            ],
            newPostText: "new post"




        },
        messagesPage: {
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
        },
        sitebar: {
            NavData: [
                {

                    id: Math.random(100),
                    name: "Profile",
                    route: "profile"
                },
                {
                    id: Math.random(100),
                    name: "Messages",
                    route: "dialogs"
                },
                {
                    id: Math.random(100),
                    name: "News",
                    route: "news"
                },
                {
                    id: Math.random(100),
                    name: "Music",
                    route: "music"
                },
                {
                    id: Math.random(100),
                    name: "Settings",
                    route: "settings"
                }
            ]
        }

    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },


    addMessage(Messages) {
        let newMessage = {
            id: Math.random(100),
            message: Messages
        };
        this._state.messagesPage.messagesData.push(newMessage);

    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        

        this._callSubscriber(this._state);

    
    },

}













export default store;

