import React,{Component} from 'react';
import Task from './Task'; 
import classes from './ToDoList.css';
import Check from 'react-icons/lib/fa/check';
import Add from 'react-icons/lib/ti/plus';
import Image from '../assets/task.png';

class ToDoList extends Component{

    state={
        openInput:false
    }

    saveTaskHandler=()=>{
        let status=this.state.openInput;
        this.setState({openInput:!status});
    }

    buttonCustomFunction =() =>{
        if(this.state.openInput && this.refs.newTask.value!=""){
            this.props.addTask(this.refs.newTask.value);
            this.refs.newTask.value="";
        }
        this.saveTaskHandler();
    }

    render(){
    let listClass=this.props.show ? classes.ToDoList : classes.NoDisplay;
    let inputClass = this.state.openInput ? classes.InputOpen : classes.InputClose;
    
    if(this.props.tasks.length !== 0){
    return(
        <div className={listClass}>
        {   
            this.props.tasks.map((task,index) =>{
                return (
                    <div>
                    <Task content={task.content} key={index} delete={(key)=>this.props.deleteIndex(key)}/>
                    </div>
                );       
            })
        }
        <input type="text" ref="newTask" className={inputClass} required placeholder="Add a task..."></input>
        <button className={classes.AddButton} onClick={this.buttonCustomFunction}><span className={classes.Hint}>Add Task</span>
                    {this.state.openInput ? <Check/> : <Add/>}
                    </button>
        </div>
    );
    }
    else{
        return (
            <div className={listClass}>
                    <img src={Image} className={classes.Image}/>
                    <input type="text" ref="newTask" className={inputClass} required placeholder="Add a task..." ></input>
                    <button className={classes.AddButton} onClick={this.buttonCustomFunction}><span className={classes.Hint}>Add Tasks</span>
                    {this.state.openInput ? <Check/> : <Add/>}
                    </button>
            </div>
        );
    }
}
}

export default ToDoList;