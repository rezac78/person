import React from 'react';
import Person from '../person/Person';


const Persons = ({ persons, personDelete, personChange }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    firstname={person.firstname}
                    personDelete={() => personDelete(person.id)}
                    Changed={event => personChange(event, person.id)}
                />
            ))}
        </div>
    );
}

export default Persons;