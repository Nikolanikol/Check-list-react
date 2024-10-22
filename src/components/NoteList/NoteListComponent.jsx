import React from 'react';
import  './NoteListComponent'
import MyButton from '../../UI/MyButton/MyButton';
import NoteItem from '../NoteItem/NoteItem';

const NoteListComponent = ({notes, handleNoteEdit, setModalVisible, setId}) => {
 
  return (
    <ul className='note-list'>
    {
        notes.map((note, i)=>{
            return (
                <NoteItem setId={setId} setModalVisible={setModalVisible} key={note.id} id={note.id} note = {note} i = {i} handleNoteEdit={handleNoteEdit}/>
            )
        })
    }
</ul>
  )
}

export default NoteListComponent
