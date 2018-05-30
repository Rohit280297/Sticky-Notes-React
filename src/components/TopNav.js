import React from 'react';
import classes from './TopNav.css';
import Left from 'react-icons/lib/ti/arrow-left';
import Right from 'react-icons/lib/ti/arrow-right';

const top_nav = (props) =>{

    let icon= props.show ? <Right className={classes.Icon}/> : <Left className={classes.Icon}/>;

    return(
        <div className={classes.TopNav}>
            <ul>
                 <li onClick={props.showTasks}> To-Do-List {icon} <span className={classes.Hint}>{props.show ? "Close...!":"Hit me..!"}</span> </li>
                 <li>Note Making</li>
             </ul>
        </div>
    );
}

export default top_nav;