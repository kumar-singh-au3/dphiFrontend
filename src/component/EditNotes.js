import React, { useState } from 'react';
import {connect} from 'react-redux';
import moment from 'moment'

import './createNotes.css'
import {addNotes} from '../store/actions/addNotes';

const CreateNotes=({date,viewScreen,history, initialContent, addNotes})=>{
    const [text, onTextChange] =useState(initialContent);
    const save=()=>{
        addNotes({[date.toString()]:text})
        alert('Saved successfully')
        history.push('/')
    }
    return(
        <div>
        <h1>CreateNotes for {moment(date).format("MMMM Do YYYY")}</h1>
        <textarea
          value={text}
          onChange={(e)=>onTextChange(e.target.value)}
        />
        <div style={{display:'flex'}}>
        <button onClick={save} style={{display:'inline'}} className="push_button blue">
         Save
         </button>
         <button onClick={viewScreen} style={{display:'inline'}} className="push_button red">
         Go Back
         </button>
         </div>
        </div>
    )
}
const mapStateToProps = ({notes}, {date})=>{
    return {initialContent: notes[date]}
};
const mapsDispatchToProps = {
    addNotes
}
export default connect(mapStateToProps,mapsDispatchToProps)(CreateNotes)