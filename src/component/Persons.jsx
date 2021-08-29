import React from 'react';
import Person from './Person';

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map(person => (
                <Person 
                    fullname={person.fullname}
                />
            ))}
        </div>
    )
}

export default Persons