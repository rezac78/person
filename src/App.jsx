import React, { Component } from 'react';
import Persons from './component/Persons';

class App extends Component {
    state = {
        persons: [],
        person: "",
        showPersons: false
    }
    handleShowPerson = () => {
        this.setState({ showPersons: !this.state.showPersons })
    }
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter(p => p.id !== id);
        this.setState({ persons: filteredPerson });
    }
    handleNameChang = (event, id) => {
        const { persons: allPersons } = this.state;

        const persontIndex = allPersons.findIndex(p => p.id === id)
        const person = allPersons[persontIndex]
        person.fullname = event.target.value;

        const persons = [...allPersons]
        persons[persontIndex] = person
        this.setState({ persons: persons })
    }
    handleCreatPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 10000),
            fullname: this.state.person
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
            person = (<Persons persons={persons} deleted={this.handleDeletePerson} change={this.handleNameChang} />)
        }
        return (
            <div style={{ textAlign: "center" }}>
                <h2>مدیریت کننده اشخاص</h2>
                <h1>{persons.length}</h1>
                <div>
                    <input type="text" placeholder="ساخت شخص جدید" onChange={this.setPerson} value={this.state.person} />
                    <button onClick={this.handleCreatPerson}>click</button>
                </div>
                <button onClick={this.handleShowPerson}>click</button>
                {person}
            </div>
        )
    }
}
export default App;