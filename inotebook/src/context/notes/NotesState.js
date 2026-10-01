import React from 'react';
import noteContext from './NotesContext';

const NotesState = (props) => {

    const state = {
        name: 'Umar',
        class: 'BS Software Engineering'
    };

    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NotesState;