import React from "react";
import s from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Message from '../Dialogs/Messages/Message';





const Dialogs = (props) => {

let state = props.messagesPage;

    let DialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.messagesData.map(message => <Message message={message.message} />);



    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageActionCreactor();

    }
    let OnMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageBody(message);

    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>

                    <div>
                        <textarea placeholder="Enter your message"
                            onChange={OnMessageChange}
                            ref={newMessageElement}
                            value={props.NewMessageBody} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>

            </div>

        </div>




    );
}
export default Dialogs;
