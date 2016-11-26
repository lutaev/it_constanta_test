
'use strict';

import {List, Map, fromJS} from 'immutable';


export const INITIAL_STATE = Map({
    showMenu: false,
    persons: List.of({
        id: 1,
        text: 'Иванов Иван\nдиректор',
        visible: true
    }, {
        id: 2,
        text: 'Петров Петр\nменеджер',
        visible: true
    }),
    newText: ''
});

export function togglePerson(state, data) {
    let persons = state.get('persons').toJS();
    persons.forEach(person => {
        if (person.id == data.id) {
            person.visible = !person.visible;
        }
    });

    return state.set('persons', fromJS(persons));
}

export function changePersonText(state, data) {
    let persons = state.get('persons').toJS();
    persons.forEach(person => {
        if (person.id == data.id) {
            person.text = data.text;
        }
    });

    return state.set('persons', fromJS(persons));
}

export function changeNewText(state, data) {
    return state.set('newText', data.text)
}

export function addPerson(state) {
    let newText = state.get('newText');

    if (newText) {
        let persons = state.get('persons').push({
            id: Date.now(),
            text: newText,
            visible: true
        });

        return state.merge({
            persons: persons,
            newText: ''
        });
    }

    return state;
}