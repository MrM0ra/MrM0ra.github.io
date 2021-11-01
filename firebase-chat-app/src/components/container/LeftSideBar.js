import React from 'react'
import {UserDisplayer} from '../presentational/UserDisplayer';

export const LeftSideBar = (props) => {

    const renderUsers = () => {
        props.participants ? 
        props.participants.map(user => <UserDisplayer username={user.userName} messages={user.msg.count}/>)
        :
        <div>
        </div>;
    }

    return (
        <div style={{display: 'table-caption'}}>
            <div>
                <div>
                    <span>Usuarios involucrados en el foro</span>
                </div>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    {renderUsers()}
                </div>
            </div>
        </div>
    )
}
