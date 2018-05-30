import React,{Component} from 'react';
import classes from './DisplayNote.css';

class DisplayNote extends Component{

    
    render(){
        let displayClass= this.props.showTasks ? classes.ShowLess : classes.ShowMore;
        if(this.props.openIndex===-1){
            return(
                <div className={displayClass}>
                    <h1>My First React Application</h1>
                    <h2>Sticky Notes and To-Do-List</h2>

                    <p>Created by : Rohit Shamdasani</p>
                     <p>Indian Institute Of Information Technology, Vadodara</p>
                     <button className={classes.AddButton} onClick={this.props.addNote}>+<span className={classes.Hint}>Add Notes</span></button>
                     
                </div>
            );
        }
    else if(this.props.edit && this.props.openIndex >=0 ){

        return(
            <div className={displayClass}>
                <textarea className={classes.Text} ref="note" onChange={this.props.editIt}>{this.props.open_note}</textarea>
                <button  
                className={classes.Save} 
                onClick={()=>{this.props.save(this.refs.note.value)}}>SAVE</button>
            </div>
        );
    }

    else{
        return(
            <div className={displayClass}>
                <pre className={classes.Display}>
                    {this.props.open_note}
                </pre>
                <button className={classes.Save} onClick={this.props.editIt} >EDIT</button>
                <button className={classes.Save} onClick={this.props.delete} >DELETE</button>
                <button className={classes.AddButton} onClick={this.props.addNote}>+<span className={classes.Hint}>Add Notes</span></button>
                
            </div>
        );
    }
}
}

export default DisplayNote;