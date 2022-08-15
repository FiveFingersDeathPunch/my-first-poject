import React from "react";
import { updateNewMessageBody, addMessageActionCreactor } from "../../redux/DialogsReducer"
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";



const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();
            let addMessage = () => {
                store.dispatch(addMessageActionCreactor());
            }
            let OnMessageChange = (message) => {
                let action = updateNewMessageBody(message);
                store.dispatch(action);
            }
            return <Dialogs updateNewMessageBody={OnMessageChange}
                addMessageActionCreactor={addMessage}
                DialogsData={state.messagesPage.DialogsData}
                messagesData={state.messagesPage.messagesData}
                messagesPage={state} />
        }}


    </StoreContext.Consumer>








}
export default DialogsContainer;
