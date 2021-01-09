import React, { useState } from 'react';
import {connect} from 'react-redux';
import moment from 'moment'
import './createNotes.css'
import {addNotes} from '../store/actions/addNotes';

const CreateNotes=(props)=>{
    const [text, onTextChange] =useState("");
    const save=()=>{
        props.addNotes({[props.date.toString()]:text})
        alert('Saved successfully')
        props.history.push('/')
    }
    return(
        <div>
        <h1>CreateNotes for {moment(props.date).format("MMMM Do YYYY")}</h1>
        <textarea
          value={text}
          onChange={(e)=>onTextChange(e.target.value)}
        />
        <div style={{display:'flex'}}>
        <button onClick={save} style={{display:'inline'}} className="push_button blue">
         Save
         </button>
         <button onClick={()=>props.onCreateEntry(false)} style={{display:'inline'}} className="push_button red">
         Go Back
         </button>
         </div>
        </div>
    )
}
const mapsDispatchToProps = {
    addNotes
}
export default connect(null,mapsDispatchToProps)(CreateNotes)