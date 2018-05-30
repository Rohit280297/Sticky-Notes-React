import React from 'react';
import classes from './NewNote.css';

const newNote=()=>{
    return(
        <div className={classes.NewNote}>
        <button>Save</button>
        </div>
    );
}

export default newNote;