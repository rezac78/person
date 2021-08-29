import React, { Component } from 'react';
import Persons from './component/Persons';

class App extends Component {
    state = {
        persons: [
            { id: 1, fullname: "rezaDalvand" },
            { id: 2, fullname: "alirezaDalvand" },
            { id: 3, fullname: "mohamadrezaDalvand" }
        ],
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
                <button onClick={this.handleShowPerson}>click</button>
                {person}
            </div>
        )
    }
}
export default App;