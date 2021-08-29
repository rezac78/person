import React from 'react';
import Person from './Person';

const Persons = ({ persons, deleted, change }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => deleted(person.id)}
                    change={event => change(event, person.id)}
                />
            ))}
        </div>
    )
}

export default Persons