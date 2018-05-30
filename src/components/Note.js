import React from 'react';
import classes from './Note.css';

const note = (props) => {

    let note_class=props.status ? classes.Note_open:classes.Note;
    let text_class=props.status ? classes.TextOpen :classes.Text;

    return (
        <div className={note_class}>
            <pre className={text_class}>{props.content}</pre>
            <button onClick={props.delete}>Delete</button>
            <button onClick={props.showNote} >{props.status ? "Close" : "Open"}</button>
        </div>
    );
}

export default note;