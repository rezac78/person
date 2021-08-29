import React from 'react';
import Person from './Person';

const Persons = ({ persons, deleted }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => deleted(person.id)}
                />
            ))}
        </div>
    )
}

export default Persons