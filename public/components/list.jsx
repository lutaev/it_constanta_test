
'use strict';
import React from 'react';
import store from '../js/store';

export default React.createClass({
    createMarkup(html) {
        return {__html: html.replace(/\n\r?/g, '<br />')};
    },

    render() {
        return (
            <div>
                <ul id="list">
                    {this.props.persons.map((person, index) => {
                        return person.visible ? <li key={index} dangerouslySetInnerHTML={this.createMarkup(person.text)}/> : '';
                    })}
                </ul>
            </div>
        )
    }
})