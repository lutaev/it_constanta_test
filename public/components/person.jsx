
'use strict';
import React from 'react';
import store from '../js/store';

export default React.createClass({
    personTextChange(event) {
        store.dispatch({
            type: 'CHANGE_PERSON_TEXT',
            data: {
                id: this.props.id,
                text: event.target.value
            }
        })
    },

    toggle() {
        store.dispatch({
            type: 'TOGGLE_PERSON',
            data: {
                id: this.props.id
            }
        })
    },

    render() {
        let buttonText = this.props.visible ? 'Remove' : 'Restore';

        return (
            <div className="person">
                <textarea onChange={this.personTextChange} defaultValue={this.props.text}/>
                <button onClick={this.toggle}>{buttonText}</button>
            </div>
        )
    }
})