import React,{Component} from 'react';
import classes from './Modal.css';

class Modal extends Component{
    
    render(){
     let cssClass=[classes.Modal, this.props.show ? classes.ModalOpen :classes.ModalClose].join(' ');
    return (
        <div className={cssClass}>
            <textarea className={classes.Text} ref="newNote" autoFocus required placeholder="Add a note here..."></textarea>
            <button onClick={()=>{
                if(this.refs.newNote.value!=""){
                             this.props.close(this.refs.newNote.value);
                             this.refs.newNote.value="";
                         }
                     }
                } className={classes.Save} >Save</button>
        </div>
    );
}

}

export default Modal;