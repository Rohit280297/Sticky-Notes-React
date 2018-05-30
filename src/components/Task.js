import React from 'react';
import classes from './Task.css';
import Delete from 'react-icons/lib/ti/trash';

const task=(props) =>{
 return(
     <div className={classes.Task}><p>{props.content}</p>
     <button className={classes.Delete} onClick={props.delete}><Delete/></button>
     </div>
 );
}

export default task;
