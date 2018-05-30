import React from 'react';
import classes from './Backdrop.css';

const backdrop =(props)=>{

    let back_class=[classes.Backdrop, props.show ? classes.BackdropOpen : classes.BackdropClosed];
    return (
        <div className={back_class.join(' ')}></div>
    );
}

export default backdrop;