
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
                <div className="new-person">
                    <textarea className="form-control" onChange={this.newTextChange} value={this.props.newText}/>
                    <div className="text-right">
                        <button className="btn btn-sm" onClick={this.addPerson}>Add person</button>
                    </div>
                </div>
            </div>
        )
    }
})