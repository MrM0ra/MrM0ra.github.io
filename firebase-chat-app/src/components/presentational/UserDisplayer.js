import React from 'react'

export const UserDisplayer = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.messages}</p>
        </div>
    )
}
