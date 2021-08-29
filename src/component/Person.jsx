import React from 'react';


const Person = ({ fullname, deleted, change }) => {
    return (
        <div onClick={deleted}>
            <p>{`${fullname}`}</p>
            <input placeholder={fullname} />
        </div>
    )
}

export default Person;