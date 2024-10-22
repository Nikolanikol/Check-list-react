import React, { useState } from 'react'
import './NoteItem.css'
import MyButton from '../../UI/MyButton/MyButton'
const NoteItem = ({ note, i,id, setModalVisible, setId}) => {
    const onEditNoteItem = (id)=>{
        setModalVisible(true)
        setId(id)
    }
  return (
    <li  key={note.id}>
        <p>{i+1}. {note.body} </p>
        <MyButton onClick = {()=>onEditNoteItem(id)} > Edit</MyButton>

    </li>
  )
}

export default NoteItem
