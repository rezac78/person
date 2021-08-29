import React, { Component } from 'react';
import Persons from './component/persons/Persons';

class App extends Component {
    state = {
        persons: [],
        person: "",
        showPersons: false
    };
    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons })
        console.log(this.state.showPersons);
    }
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter(p => p.id !== id)
        this.setState({ persons: filteredPerson })
    }
    handleEditPerson = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons })
    }
    handleNewPerson = () => {
        const persons = [...this.state.persons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            firstname: this.state.person
        };
        persons.push(person);
        this.setState({ persons, person: "" })
    }
    setPerson = event => {
        this.setState({ person: event.target.value });
    }
    render() {
        const { persons, showPersons } = this.state;

        let person = null;

        if (showPersons) {
            person = (
                <Persons persons={persons} personDelete={this.handleDeletePerson} personChange={this.handleEditPerson} />
            )
        }

        return (
            <div style={{ textAlign: "center" }}>
                <h2>مدیریت کننده اشخاص</h2>
                <h1>تعداد اشخاص {persons.length}</h1>
                <div>
                    <input
                        type="text"
                        placeholder="ساخت شخص جدید"
                        onChange={this.setPerson}
                        value={this.state.person}
                    />
                    <button onClick={this.handleNewPerson}>join</button>
                </div>
                <button onClick={this.handleShowPerson}>click</button>
                {person}
            </div>
        );
    }
}

export default App;