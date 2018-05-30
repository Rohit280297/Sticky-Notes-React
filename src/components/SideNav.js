import React,{Component} from 'react';
import classes from './SideNav.css';
import StickyImage from '../assets/stickyNotes.jpg';
class Nav extends Component{
    render(){
   
        if(this.props.notes.length===0){
            return(
                <div className={classes.Image}><img src={StickyImage} /></div>
            );
        }

        else{
                return(
                    <div className={classes.SideNav}>
                        {
                            this.props.notes.map((note,index)=>{
                                return (
                                    <div>
                                <li className={classes.Item} key={index} onClick={()=>this.props.open(index)}>{note.content}<br/><p className={classes.Date}>Last Edited : {note.date}</p></li>
                                </div>
                                )
                            })
                        }
                    </div>
                );
            }
}
}

export default Nav;