
'use strict';

import * as core from './core';

export default function(state = core.INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_INITIAL_STATE':
            return core.setState(state, core.INITIAL_STATE);
        case 'TOGGLE_PERSON':
            return core.togglePerson(state, action.data);
        case 'CHANGE_PERSON_TEXT':
            return core.changePersonText(state, action.data);
        case 'CHANGE_NEW_TEXT':
            return core.changeNewText(state, action.data);
        case 'ADD_PERSON':
            return core.addPerson(state);
    }

    return state;
}