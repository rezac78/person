import React, { Component } from 'react';
import Persons from './component/Persons';

class App extends Component {
    state = {
        persons: [
            { id: 1, fullname: "rezaDalvand" },
            { id: 2, fullname: "alirezaDalvand" },
            { id: 3, fullname: "mohamadrezaDalvand" }
        ],
        showPerson:false
    }
    handleShowPerson={
        
    }
    render() {
        const { persons } = this.state;
        return (
            <div style={{textAlign:"center"}}>
                <h2>مدیریت کننده اشخاص</h2>
                <h1>{persons.length}</h1>
                <button>click</button>
                <Persons persons={persons}/>
            </div>
        )
    }
}
export default App;