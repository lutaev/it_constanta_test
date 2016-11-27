
'use strict';
import React from 'react';
import store from '../js/store';
import Person from './person';

export default React.createClass({
    addPerson() {
        store.dispatch({
            type: 'ADD_PERSON'
        })
    },

    newTextChange(event) {
        store.dispatch({
            type: 'CHANGE_NEW_TEXT',
            data: {
                text: event.target.value
    }
        })
    },

    render() {
        return (
            <div>
                <div>
                    {this.props.persons.map((person, index) => {
                        return <Person key={index} id={person.id} text={person.text} visible={person.visible}/>
                    })}
                </div>
                <hr/>
                <br/>
                <div id="new-person">
                    <textarea onChange={this.newTextChange} value={this.props.newText}/>
                    <button onClick={this.addPerson}>Add person</button>
                </div>
            </div>
        )
    }
})