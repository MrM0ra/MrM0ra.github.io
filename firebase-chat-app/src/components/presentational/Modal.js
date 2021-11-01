import React form 'react';

export const Modal = (props) => {

    const [msgBody, setMsgBody] = useState(props.msg.msg);

    const modalStyle={
        visibility: props.visibility,
    };

    const handleClick = () => {
        props.openModalAction({'visibility':'hidden'})
    }

    return (
        <div id="modal" style={modalStyle} className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p id="modal_text">Oh... you found me...</p>
                <form autoComplete="off">
                    <input type="text" placeholder="Task name" id="taskName" required='True' onChange={(e)=>setTaskName(e.target.value)}></input>
                    <input type="text" placeholder="Completed" id="completed" required='True' onChange={(e)=>setCompleted(e.target.value)}></input>
                    <input type="submit" id="btn" value="submit" onClick={handleClick}></input>
                </form>
            </div>
        </div>
    );

}