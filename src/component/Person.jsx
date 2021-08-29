import React from 'react';


const Person = ({ fullname, deleted, change }) => {
    return (
        <div>
            <p>{`${fullname}`}</p>
            <input type="text" placeholder={fullname} onChange={change} />
            <button onClick={deleted}>delete</button>
        </div>
    )
}

export default Person;