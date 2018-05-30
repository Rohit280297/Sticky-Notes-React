import React, { Component } from 'react';
import Note from '../Note';
import classes from './App.css';
import Nav from '../SideNav';
import NewNote from '../NewNote';
import Modal from '../Modal';
import Backdrop from '../Backdrop';
import TopNav from '../TopNav';
import DisplayNote from '../DisplayNote';
import ToDoList from '../ToDoList';

class App extends Component {

  state = {
      notes: [
      //  { content: 'Rohit',open:false ,date:null }, { content: 'Piyush',open:false,date:null  }, { content: 'Hashey' ,open:false,date:null }, 
      //  { content: 'Anshuman',open:false ,date:null}
      ],
      showModal:false,
      editNote:false,
      openNote:{content:"No Notes Opened Yet"},
      openNoteIndex:-1,
      tasks: [],
      showTasks:false
    }

  addNoteHandler=(item)=> {
    const new_note={content:item, open:false};
    let notes=[...this.state.notes];
    let d=new Date();
    let date=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    new_note.date=date;
    new_note.open=false;
    notes.push(new_note);
    this.setState({
      notes:notes,
      showModal:false
    });
  }

  deleteNoteHandler=()=> {
      const notes = [...this.state.notes];
      notes.splice(this.state.openNoteIndex, 1);
      let length= notes.length;
      let curr_open=this.state.openNoteIndex;
      let nextOpen=(curr_open)%(length);
      console.log(nextOpen);
      if(notes.length===0){
        nextOpen=-1;
      }
      this.setState({
        openNoteIndex:nextOpen,
        notes:notes
      }, () => {
        if(this.state.openNoteIndex>=0)
        this.openNoteHandler(this.state.openNoteIndex);
      });
  }

  editNoteHandler=(event)=>{
      this.setState({
        editNote:true
      });
  }

  openNoteHandler=(index)=>{
    let open_text= this.state.notes[index];
    this.setState({
      openNote:open_text,
      openNoteIndex:index
    });
  }

  showModalHandler=()=>{
    this.setState({showModal:true});
    console.log(this.state.showModal);
  }

  saveNoteHandler=(item)=>{
    let d=new Date();
    let date=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    let notes=[...this.state.notes];
    notes[this.state.openNoteIndex].content=item;
    notes[this.state.openNoteIndex].date=date;
    this.setState({
      showModal:false,
      notes:notes,
      editNote:false
    });
  }

  showTasksHandler=()=>{
    let status=this.state.showTasks
    this.setState({
      showTasks:!status
    });
  }

  deleteTaskHandler=(ind)=>{
    let tasks=[...this.state.tasks];
    tasks.splice(ind,1);
    this.setState({tasks:tasks});
  }

  addTaskHandler=(item)=>{
      let tasks=[...this.state.tasks];
      let newtask = {content:item};
      tasks.push(newtask);
      this.setState({tasks:tasks});
  }

  render() {

   return (
      <div className={classes.App}>
       <TopNav showTasks={this.showTasksHandler} show={this.state.showTasks}/>
        <Nav notes={this.state.notes} open={(index)=>this.openNoteHandler(index)}/>
        <DisplayNote 
          edit={this.state.editNote} 
          editIt={(event)=>this.editNoteHandler(event)} 
          save={(item)=>this.saveNoteHandler(item)} 
          open_note={this.state.openNote.content} 
          delete={this.deleteNoteHandler}
          addNote={this.showModalHandler}
          showTasks={this.state.showTasks}
          openIndex={this.state.openNoteIndex}/>
          this.state.showModal ? <Modal show={this.state.showModal} close={(item)=>this.addNoteHandler(item)} /> : null;
          this.state.showModal ? <Backdrop show={this.state.showModal}/>: null;
          <ToDoList tasks={this.state.tasks} show={this.state.showTasks} deleteIndex={(key)=>this.deleteTaskHandler(key)} addTask={(item)=>this.addTaskHandler(item)}/>
      </div>
    );
  }
}

export default App;
