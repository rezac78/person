import React from 'react';


const Person = ({ fullname, deleted }) => {
    return (
        <div onClick={deleted}>
            <p>{`${fullname}`}</p>
        </div>
    )
}

export default Person;