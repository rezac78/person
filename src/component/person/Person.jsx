import React from 'react';

const Person = ({ firstname,personDelete , Changed }) => {
    return (
        <div>
            <p>{`${firstname}`}</p>
            <input type="text" placeholder={firstname} onChange={Changed} />
            <button onClick={personDelete}>حذف</button>
        </div >
    )
}

export default Person;